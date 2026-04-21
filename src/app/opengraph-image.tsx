import { ImageResponse } from "next/og";

export const alt = "Dylan Teugels — Technical Lead & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#1b1814",
        color: "#f5ece0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(232,148,102,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(232,148,102,0.10), transparent 55%)",
      }}
    >
      <div
        style={{
          fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
          fontSize: 18,
          color: "#8a776b",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ color: "#e89466" }}>●</span>
        <span>Dylan Teugels · Portfolio · 2026</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            color: "#f5ece0",
          }}
        >
          Technical Lead
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "#e89466",
          }}
        >
          Adobe Commerce & Hyvä
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
          fontSize: 20,
          color: "#b8a89b",
        }}
      >
        <span>5+ years · enterprise merchants · Belgium</span>
        <span style={{ color: "#8a776b" }}>dylan.teugels</span>
      </div>
    </div>,
    { ...size }
  );
}
