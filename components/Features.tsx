"use client";

const pillars = [
  {
    num: "01",
    title: "Marcas que amas",
    desc: "Rhode, Summer Fridays, Patrick Ta, Beauty of Joseon, e.l.f. y más.",
  },
  {
    num: "02",
    title: "Precios en MXN",
    desc: "Sin conversiones ni sorpresas. Paga en pesos con métodos mexicanos.",
  },
  {
    num: "03",
    title: "Envío a todo México",
    desc: "Salimos desde CDMX. Gratis en pedidos mayores a $800 MXN.",
  },
  {
    num: "04",
    title: "100% Originales",
    desc: "Productos auténticos, importados directamente. Sin réplicas.",
  },
];

export default function Features() {
  return (
    <section
      style={{
        backgroundColor: "var(--black)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Pink glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,27,107,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--pink)",
              fontWeight: 700,
              fontFamily: "var(--font-syne), sans-serif",
              marginBottom: "0.75rem",
            }}
          >
            — Por qué elegirnos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--white)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            Beauty sin{" "}
            <span style={{ color: "var(--pink)", fontStyle: "italic" }}>complicaciones.</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 2rem",
                borderRight: i < pillars.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "background-color 0.25s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,27,107,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--pink)",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.65rem",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
