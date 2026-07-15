/**
 * Static poster behind (and instead of) the 3D scene: navy gradient plus an
 * ascending SVG growth curve. This is the entire hero visual on mobile,
 * reduced-motion, and low-end devices — zero JS cost.
 */
export function HeroPoster() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#16307a] to-[#101f4d]" />
      <div className="absolute -left-1/4 top-0 h-full w-3/4 rounded-full bg-blue/20 blur-[120px]" />
      <svg
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-curve" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1D4ED8" stopOpacity="0.05" />
            <stop offset="1" stopColor="#93B4FF" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path
          d="M0 490 C 350 480, 650 420, 850 280 S 1120 60, 1200 20"
          stroke="url(#hero-curve)"
          strokeWidth="3"
        />
        <path
          d="M0 495 C 380 488, 700 445, 900 320 S 1140 110, 1200 60"
          stroke="url(#hero-curve)"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
