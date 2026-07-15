/**
 * Visible stand-in for a real asset (screenshot, logo, headshot).
 * Every unreal asset renders with a badge so nothing fake ships silently —
 * swap for a real <Image> when the asset arrives.
 */
export function PlaceholderBox({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-blue/30 bg-tint ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <svg
        className="absolute inset-0 h-full w-full text-blue/10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="ph-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0v24" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-grid)" />
      </svg>
      <span className="relative rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue shadow-sm">
        [Placeholder] {label}
      </span>
    </div>
  );
}
