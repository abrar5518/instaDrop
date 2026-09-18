"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/tracking";

type Invoice = {
  invoice_number: string; customer_name: string; pickup_address: string; delivery_address: string;
  vehicle_type: string; subtotal: string; vat_amount: string; total_amount: string; status: string;
  payment_token: string; paypal_client_id: string; currency: string;
};

type PayPalData = { orderID: string };
type PayPalButtons = { render: (selector: string) => Promise<void>; close?: () => Promise<void> };
type PayPalWindow = Window & {
  paypal?: {
    Buttons: (options: {
      createOrder: () => Promise<string>;
      onApprove: (data: PayPalData) => Promise<void>;
      onCancel: () => void;
      onError: () => void;
    }) => PayPalButtons;
  };
};

const paypalScriptId = "instadrop-paypal-sdk";

export default function PayPalCheckout({ token }: { token: string }) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [error, setError] = useState("");
  const [paid, setPaid] = useState(false);
  const [buttonsReady, setButtonsReady] = useState(false);

  useEffect(() => {
    fetch(`/api/invoices/${encodeURIComponent(token)}`, { cache: "no-store" })
      .then(async response => { const data = await response.json(); if (!response.ok) throw new Error(data.message); return data; })
      .then(setInvoice).catch(error => setError(error.message || "Invoice not found."));
  }, [token]);

  useEffect(() => {
    if (!invoice || invoice.status === "paid" || !invoice.paypal_client_id) return;
    let active = true;
    let buttons: PayPalButtons | undefined;

    const renderButtons = async () => {
      if (!active) return;
      const paypal = (window as PayPalWindow).paypal;
      if (!paypal) {
        setError("PayPal could not be loaded. Please refresh the page or try again later.");
        return;
      }

      buttons = paypal.Buttons({
        createOrder: async () => {
          trackEvent("payment_started", { currency: invoice.currency, value: Number(invoice.total_amount), invoice_number: invoice.invoice_number });
          const response = await fetch("/api/payments/paypal/create", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payment_token: token }) });
          const data = await response.json();
          if (!response.ok) throw new Error(data.message || "Unable to start PayPal checkout.");
          return data.order_id;
        },
        onApprove: async (data) => {
          const response = await fetch("/api/payments/paypal/capture", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payment_token: token, paypal_order_id: data.orderID }) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.message || "Unable to confirm payment.");
          setPaid(true);
          trackEvent("payment_completed", { currency: invoice.currency, value: Number(invoice.total_amount), invoice_number: invoice.invoice_number });
        },
        onCancel: () => setError("Payment was cancelled. No charge was made. Refresh the page when you are ready to try again."),
        onError: () => setError("PayPal could not complete the payment. Please try again."),
      });

      try {
        await buttons.render("#paypal-buttons");
        if (active) setButtonsReady(true);
      } catch {
        if (active) setError("PayPal could not display the payment options. Please refresh the page or contact dispatch.");
      }
    };

    const existingScript = document.getElementById(paypalScriptId) as HTMLScriptElement | null;
    if ((window as PayPalWindow).paypal) {
      void renderButtons();
    } else if (existingScript) {
      existingScript.addEventListener("load", renderButtons, { once: true });
      existingScript.addEventListener("error", () => setError("PayPal could not be loaded. Please refresh the page or try again later."), { once: true });
    } else {
      const script = document.createElement("script");
      script.id = paypalScriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(invoice.paypal_client_id)}&currency=${encodeURIComponent(invoice.currency)}&intent=capture&components=buttons`;
      script.async = true;
      script.addEventListener("load", renderButtons, { once: true });
      script.addEventListener("error", () => setError("PayPal could not be loaded. Please refresh the page or try again later."), { once: true });
      document.body.appendChild(script);
    }

    return () => {
      active = false;
      void buttons?.close?.();
    };
  }, [invoice, token]);

  if (error) return <div className="max-w-xl mx-auto p-8 rounded-3xl bg-red-50 border border-red-200 text-red-700">{error}</div>;
  if (!invoice) return <div className="text-center text-slate-500">Loading secure invoice…</div>;
  if (paid || invoice.status === "paid") return <div className="max-w-xl mx-auto p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center"><h1 className="text-2xl font-extrabold text-emerald-800">Payment received</h1><p className="mt-2 text-sm text-emerald-700">Invoice {invoice.invoice_number} is paid and your booking is confirmed.</p></div>;
  if (!invoice.paypal_client_id) return <div className="max-w-xl mx-auto p-8 rounded-3xl bg-amber-50 border border-amber-200 text-amber-800">Online payment is temporarily unavailable. Please contact dispatch and quote invoice {invoice.invoice_number}.</div>;

  return <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6">
    <div><span className="text-xs font-bold uppercase text-blue-700">Secure PayPal Checkout</span><h1 className="text-2xl font-extrabold text-[#0a192f] mt-2">Invoice {invoice.invoice_number}</h1><p className="text-sm text-slate-500">{invoice.customer_name}</p></div>
    <div className="bg-slate-50 rounded-2xl p-5 text-sm space-y-3"><p><strong>Route:</strong> {invoice.pickup_address} → {invoice.delivery_address}</p><p><strong>Vehicle:</strong> {invoice.vehicle_type.replaceAll("_", " ")}</p><div className="border-t pt-3 flex justify-between text-lg font-extrabold"><span>Total</span><span>£{Number(invoice.total_amount).toFixed(2)}</span></div></div>
    {!buttonsReady && <p className="text-center text-sm text-slate-500" role="status">Loading secure payment options…</p>}
    <div id="paypal-buttons" aria-live="polite" />
    <p className="text-[11px] text-center text-slate-500">Payment is processed securely by PayPal. InstaDrop does not receive or store card details.</p>
  </div>;
}
