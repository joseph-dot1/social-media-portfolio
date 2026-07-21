import { ImageResponse } from "next/og";

export const alt = "Eshenake Joseph — Social Media Growth Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card — shows whenever the site link is pasted into
// WhatsApp, Instagram, LinkedIn, X, or Slack.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1E3A8A 0%, #16307A 55%, #101F4D 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              color: "#93B4FF",
              textTransform: "uppercase",
            }}
          >
            Social Media Growth Specialist
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Eshenake Joseph
          </div>
          <div style={{ fontSize: 34, color: "#DBEAFE" }}>
            I turn attention into measurable growth.
          </div>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          {[
            ["900K+", "organic views"],
            ["7", "brands grown"],
            ["3+", "years"],
          ].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 56, fontWeight: 700, color: "#EA580C" }}>{num}</div>
              <div style={{ fontSize: 24, color: "#93B4FF" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
