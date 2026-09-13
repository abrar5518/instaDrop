import { ImageResponse } from "next/og";

export const alt = "InstaDrop Courier Services — same-day courier across the UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", background: "#07182d", color: "white", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#c6ff00", fontSize: 28, fontWeight: 700, letterSpacing: 3 }}>INSTADROP · UK COURIER NETWORK</div>
      <div style={{ display: "flex", marginTop: 38, maxWidth: 980, fontSize: 76, lineHeight: 1.08, fontWeight: 800 }}>From your door to theirs, the same day.</div>
      <div style={{ display: "flex", marginTop: 34, fontSize: 28, color: "#cbd5e1" }}>Dedicated vehicles · Dispatch-confirmed collection · Tracking &amp; POD</div>
    </div>,
    size,
  );
}
