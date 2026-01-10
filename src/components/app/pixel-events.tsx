
'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'
import * as fpixel from '@/lib/fpixel'

const FacebookPixel = () => {
  const pathname = usePathname()

  useEffect(() => {
    // This hook is still useful for triggering pageviews on client-side navigation.
    if (!fpixel.FB_PIXEL_ID) return;
    
    fpixel.pageview()

  }, [pathname])

  if (!fpixel.FB_PIXEL_ID) {
    console.warn('Facebook Pixel ID is not configured. Tracking is disabled.');
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fpixel.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  )
}

export default FacebookPixel
