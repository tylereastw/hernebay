declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackBookingClick() {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18001798200/rXkQCLyz_6IcELjI9odD',
    });
  }
}
