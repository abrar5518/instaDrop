/**
 * Meta Pixel, GTM, GA4, Clarity, Search Console & Schema.org Tracker for InstaDrop Courier
 */

declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
        _fbq?: any;
        dataLayer?: any[];
        gtag?: (...args: any[]) => void;
        clarity?: (...args: any[]) => void;
    }
}

let isInitialized = false;

export interface AnalyticsConfig {
    enabled: boolean;
    meta_pixel_id?: string | null;
    gtm_container_id?: string | null;
    ga4_measurement_id?: string | null;
    clarity_project_id?: string | null;
    google_search_console_code?: string | null;
    site_name?: string | null;
    contact_email?: string | null;
    contact_phone?: string | null;
    contact_address?: string | null;
    schemas?: {
        organization?: any;
        website?: any;
    };
}

/**
 * Initialize Meta Pixel, GTM, GA4, Clarity, Search Console & Schema.org dynamically.
 */
export function initAnalytics(config: AnalyticsConfig): void {
    if (typeof window === 'undefined' || !config || !config.enabled || isInitialized) {
        return;
    }

    // 1. Initialize Meta Pixel
    if (config.meta_pixel_id) {
        const pixelId = config.meta_pixel_id.trim();

        if (pixelId && !window.fbq) {
            (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            const win = window as any;
            if (win.fbq) {
                win.fbq('init', pixelId);
                win.fbq('track', 'PageView');
            }
        }
    }

    // 2. Initialize Google Tag Manager (GTM)
    if (config.gtm_container_id) {
        const gtmId = config.gtm_container_id.trim();

        if (gtmId && !document.getElementById('gtm-script')) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

            const script = document.createElement('script');
            script.id = 'gtm-script';
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            document.head.appendChild(script);

            // GTM NoScript iframe fallback
            const noscript = document.createElement('noscript');
            noscript.id = 'gtm-noscript';
            noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.insertBefore(noscript, document.body.firstChild);
        }
    }

    // 3. Initialize Google Analytics 4 (GA4)
    if (config.ga4_measurement_id) {
        const ga4Id = config.ga4_measurement_id.trim();

        if (ga4Id && !document.getElementById('ga4-script')) {
            const script = document.createElement('script');
            script.id = 'ga4-script';
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer?.push(arguments); }
            window.gtag = gtag;
            window.gtag('js', new Date());
            window.gtag('config', ga4Id);
        }
    }

    // 4. Initialize Microsoft Clarity
    if (config.clarity_project_id) {
        const clarityId = config.clarity_project_id.trim();

        if (clarityId && !document.getElementById('clarity-script')) {
            (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t = l.createElement(r);
                t.id = 'clarity-script';
                t.async = 1;
                t.src = 'https://www.clarity.ms/tag/' + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, 'clarity', 'script', clarityId);
        }
    }

    // 5. Inject Google Search Console Verification Meta Tag
    if (config.google_search_console_code) {
        const code = config.google_search_console_code.trim();

        if (code && !document.getElementById('gsc-meta-tag')) {
            if (code.includes('<meta')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = code;
                const metaEl = tempDiv.querySelector('meta');
                if (metaEl) {
                    metaEl.id = 'gsc-meta-tag';
                    document.head.appendChild(metaEl);
                }
            } else {
                const metaEl = document.createElement('meta');
                metaEl.id = 'gsc-meta-tag';
                metaEl.name = 'google-site-verification';
                metaEl.content = code;
                document.head.appendChild(metaEl);
            }
        }
    }

    // 6. Inject Dynamic Schema.org JSON-LD Structured Data
    if (config.schemas?.organization) {
        injectJsonLdSchema('organization-schema', config.schemas.organization);
    }
    if (config.schemas?.website) {
        injectJsonLdSchema('website-schema', config.schemas.website);
    }

    isInitialized = true;
}

/**
 * Inject JSON-LD Schema tag into document head.
 */
export function injectJsonLdSchema(id: string, schemaData: object): void {
    if (typeof window === 'undefined' || !schemaData) return;

    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);
}

/**
 * Track Meta Pixel & GA4 PageView event.
 */
export function trackPageView(): void {
    if (typeof window !== 'undefined') {
        const win = window as any;
        if (win.fbq) win.fbq('track', 'PageView');
        if (win.gtag) win.gtag('event', 'page_view');
    }
}

/**
 * Track Meta Pixel & GA4 Lead event (Quote / Inquiry submission).
 */
export function trackLead(details: {
    quote_number?: string;
    vehicle_type?: string;
    route?: string;
}): void {
    if (typeof window !== 'undefined') {
        const win = window as any;
        if (win.fbq) {
            win.fbq('track', 'Lead', {
                content_name: details.quote_number || 'Delivery Quote Request',
                content_category: details.vehicle_type || 'Same-Day Courier',
            });
        }
        if (win.gtag) {
            win.gtag('event', 'generate_lead', {
                transaction_id: details.quote_number,
                event_category: details.vehicle_type,
            });
        }
    }
}

/**
 * Track Meta Pixel & GA4 Purchase / Payment event.
 */
export function trackPurchase(details: {
    order_number: string;
    value: number;
    currency?: string;
}): void {
    if (typeof window !== 'undefined') {
        const win = window as any;
        if (win.fbq) {
            win.fbq('track', 'Purchase', {
                content_name: details.order_number,
                value: details.value,
                currency: details.currency || 'GBP',
            });
        }
        if (win.gtag) {
            win.gtag('event', 'purchase', {
                transaction_id: details.order_number,
                value: details.value,
                currency: details.currency || 'GBP',
            });
        }
    }
}
