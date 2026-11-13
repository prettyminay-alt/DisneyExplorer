const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  back: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
  close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  orbit: <><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-35 12 12)" /><circle cx="12" cy="12" r="2" /></>,
  star: <path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6-4.8-4.7 6.6-1 2.9-6Z" />,
  grid: <><rect x="4" y="4" width="5" height="5" rx=".7" /><rect x="15" y="4" width="5" height="5" rx=".7" /><rect x="4" y="15" width="5" height="5" rx=".7" /><rect x="15" y="15" width="5" height="5" rx=".7" /></>,
  play: <path d="m8 5 12 7-12 7V5Z" />,
  external: <><path d="M14 3h7v7m0-7L10 14" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
}

export default function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.orbit}
    </svg>
  )
}
