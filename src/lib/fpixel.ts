
'use client'

export const FB_PIXEL_ID = '1033178425462645'

export const pageview = () => {
  if (typeof (window as any).fbq !== 'function') {
    return;
  }
  (window as any).fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof (window as any).fbq !== 'function') {
    return;
  }
  (window as any).fbq('track', name, options)
}
