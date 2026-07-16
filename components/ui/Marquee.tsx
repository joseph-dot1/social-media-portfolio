/**
 * Continuous ticker band in the chimdibam style — pure CSS animation
 * (see globals.css), pauses entirely for reduced-motion users.
 * Items render as "TEXT ✦ TEXT ✦ …", duplicated for a seamless loop.
 */
export function Marquee({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <div className="marquee-row" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.14em] text-navy md:text-base">
            {item}
          </span>
          <span className="text-orange" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee border-y border-blue/10 bg-tint py-4">
      {row(false)}
      {row(true)}
    </div>
  );
}
