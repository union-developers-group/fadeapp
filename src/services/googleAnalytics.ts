/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

declare const window: Window &
  typeof globalThis & {
    gtag: any
  }

export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID!, {
        page_path: url,
    })
}

export const analyticsEvent = (action: string, category: string, label: string, value?: number ) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value ?? 0,
    })
  }
}
