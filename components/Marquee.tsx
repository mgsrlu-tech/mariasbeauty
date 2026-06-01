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
        backgroundColor: "var(--black)",
        color: "var(--white)",
        overflow: "hidden",
        padding: "0.9rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              whiteSpace: "nowrap",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              paddingRight: "1.5rem",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            {item}
            <span style={{ color: "var(--pink)", fontSize: "0.6rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
