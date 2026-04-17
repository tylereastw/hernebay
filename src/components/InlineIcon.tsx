// Critical icons rendered as inline SVG so they render instantly on first paint
// without waiting for the Material Symbols font to download.

type Name = 'recycling' | 'phone' | 'chat' | 'calendar_month';

const paths: Record<Name, JSX.Element> = {
  recycling: (
    <path
      fill="currentColor"
      d="M5.24 15.33 3.87 15.7l-2.33-4.04 3.63-6.29 2.6 1.5-1.49 2.58 2.98 1.72-1 1.73H5.58l1.46 2.53-1.8.9zm4.47 3.17-.68 1.25H4.87l-2.12-3.68 1.74-1 1.74 3h3.48zM19.1 21h-6.6v-3h5.44l1.75-3 1.73 1zm-3.96-11.29-2.35 1.36V6l7.27 4.2-1 1.73-2.6-1.5-2.61 4.52-1.73-1zM8.54 5.15 11.5 0h4.66L18.3 3.67l-1.74 1-1.56-2.67h-3.92L9.41 6.65z"
    />
  ),
  phone: (
    <path
      fill="currentColor"
      d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
    />
  ),
  chat: (
    <path
      fill="currentColor"
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
    />
  ),
  calendar_month: (
    <path
      fill="currentColor"
      d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-9.5-5.17A1.5 1.5 0 0 0 8 13.33c.83 0 1.5.67 1.5 1.5zm5 0A1.5 1.5 0 0 0 13 13.33c.83 0 1.5.67 1.5 1.5z"
    />
  ),
};

export function InlineIcon({
  name,
  className = '',
  size = 24,
}: {
  name: Name;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
