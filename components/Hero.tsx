"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2rem 6rem",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--warm-black)",
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 70% at 70% 30%, rgba(196,120,90,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(125,43,78,0.22) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Big decorative number */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-2rem",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(18rem, 35vw, 42rem)",
          fontWeight: 300,
          color: "rgba(250,246,241,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        M
      </div>

      {/* Floating tag top-right */}
      <div
        className="animate-fade-in"
        style={{
          position: "absolute",
          top: "6rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.5rem",
          animationDelay: "0.8s",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          Skincare — México
        </span>
        <div
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "rgba(201,168,76,0.4)",
          }}
        />
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "rgba(250,246,241,0.4)",
          }}
        >
          desde 2024
        </span>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Category label */}
        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            animationDelay: "0.1s",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "var(--terracotta)",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--terracotta)",
              fontWeight: 500,
            }}
          >
            Rituales de Belleza
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            color: "var(--ivory)",
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            animationDelay: "0.25s",
          }}
        >
          Tu piel,
          <br />
          <em style={{ color: "var(--blush)", fontStyle: "italic" }}>tu ritual.</em>
        </h1>

        {/* Bottom row */}
        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            animationDelay: "0.45s",
          }}
        >
          <p
            style={{
              maxWidth: "360px",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(250,246,241,0.6)",
              fontWeight: 300,
            }}
          >
            Skincare formulado con ingredientes de alta pureza para la mujer mexicana.
            Sin parabenos, sin fragancias sintéticas.
          </p>

          <a
            href="#tienda"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 2.5rem",
              backgroundColor: "var(--terracotta)",
              color: "var(--ivory)",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--rose-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--terracotta)";
            }}
          >
            Explorar colección
            <span style={{ fontSize: "1.2rem" }}>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animationDelay: "1.2s",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(250,246,241,0.3)",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(250,246,241,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "50%",
              backgroundColor: "var(--terracotta)",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
