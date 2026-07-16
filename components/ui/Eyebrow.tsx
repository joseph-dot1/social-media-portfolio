export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.08em] md:text-sm ${
        light ? "text-blue-200" : "text-blue"
      }`}
    >
      {children}
    </p>
  );
}
