declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackBookingClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const url = e.currentTarget.href;
  e.preventDefault();

  const callback = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18001798200/rXkQCLyz_6IcELjI9odD',
      event_callback: callback,
    });
    setTimeout(callback, 1000);
  } else {
    callback();
  }
}
