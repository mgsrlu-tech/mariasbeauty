"use client";

const pillars = [
  {
    symbol: "I",
    title: "Ingredientes puros",
    desc: "Seleccionamos activos de alta concentración, libres de rellenos, con origen verificado.",
  },
  {
    symbol: "II",
    title: "Ciencia + naturaleza",
    desc: "Fórmulas respaldadas por dermatología, inspiradas en la riqueza botánica mexicana.",
  },
  {
    symbol: "III",
    title: "Tu tipo de piel",
    desc: "Diseñados para el clima, la pigmentación y las necesidades de la piel latinoamericana.",
  },
  {
    symbol: "IV",
    title: "Sin compromisos",
    desc: "Cruelty-free, vegano, sin parabenos, sin sulfatos. Belleza ética sin sacrificar eficacia.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        backgroundColor: "var(--warm-black)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(250,246,241,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(250,246,241,0.03)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "500px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ width: "30px", height: "1px", backgroundColor: "var(--gold)" }} />
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              Nuestra filosofía
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--ivory)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            La belleza real
            <br />
            <em style={{ color: "var(--blush)", fontStyle: "italic" }}>no se improvisa.</em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(250,246,241,0.08)",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 2rem",
                borderRight: i < pillars.length - 1 ? "1px solid rgba(250,246,241,0.08)" : "none",
                borderBottom: "1px solid rgba(250,246,241,0.08)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,120,90,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--terracotta)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                {pillar.symbol}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: "var(--ivory)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.01em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  color: "rgba(250,246,241,0.5)",
                  fontWeight: 300,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
