"use client";

const items = [
  "Rhode Skin",
  "Summer Fridays",
  "Patrick Ta",
  "Beauty of Joseon",
  "e.l.f. Cosmetics",
  "Kiko Milano",
  "Anastasia Beverly Hills",
  "Starface",
  "Shiseido",
  "Anua",
  "Envío a todo México",
  "100% Originales",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        backgroundColor: "var(--terracotta)",
        color: "var(--ivory)",
        overflow: "hidden",
        padding: "0.85rem 0",
        borderTop: "1px solid rgba(250,246,241,0.1)",
        borderBottom: "1px solid rgba(250,246,241,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              whiteSpace: "nowrap",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              paddingRight: "2rem",
            }}
          >
            {item}
            <span style={{ color: "rgba(250,246,241,0.4)", fontSize: "0.5rem" }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
