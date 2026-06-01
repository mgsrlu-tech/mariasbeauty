"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--white)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        paddingTop: "104px", // navbar + announcement bar
      }}
    >
      {/* Left — text side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 3rem 4rem 5vw",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "2rem",
            animationDelay: "0.05s",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--pink)",
              display: "inline-block",
              animation: "pulsePink 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--pink)",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            Nuevos arrivals disponibles
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(3rem, 6vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--black)",
            marginBottom: "2.5rem",
            textTransform: "uppercase",
            animationDelay: "0.15s",
          }}
        >
          Tu
          <br />
          beauty
          <br />
          <span
            style={{
              color: "var(--pink)",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            favorita.
          </span>
        </h1>

        {/* Body */}
        <p
          className="animate-fade-up"
          style={{
            maxWidth: "340px",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "var(--gray)",
            fontWeight: 400,
            marginBottom: "3rem",
            animationDelay: "0.28s",
          }}
        >
          Rhode, Summer Fridays, Patrick Ta, Beauty of Joseon y más —
          las marcas más virales del momento, en México.
        </p>

        {/* CTA group */}
        <div
          className="animate-fade-up"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animationDelay: "0.38s" }}
        >
          <a
            href="#tienda"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.95rem 2.25rem",
              backgroundColor: "var(--pink)",
              color: "var(--white)",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "var(--font-syne), sans-serif",
              borderRadius: "100px",
              transition: "all 0.25s ease",
              border: "2px solid var(--pink)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--black)";
              el.style.borderColor = "var(--black)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "var(--pink)";
              el.style.borderColor = "var(--pink)";
            }}
          >
            Ver colección →
          </a>
          <a
            href="#tienda"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.95rem 2.25rem",
              backgroundColor: "transparent",
              color: "var(--black)",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "var(--font-syne), sans-serif",
              borderRadius: "100px",
              border: "2px solid var(--gray-light)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--black)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gray-light)";
            }}
          >
            Best sellers
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--gray-light)",
            animationDelay: "0.5s",
          }}
        >
          {[
            { num: "50+", label: "Marcas" },
            { num: "100%", label: "Originales" },
            { num: "MX", label: "Envío gratis" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "var(--black)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--gray)", letterSpacing: "0.08em", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — visual side */}
      <div
        style={{
          position: "relative",
          backgroundColor: "var(--pink-pale)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Big decorative letter */}
        <div
          style={{
            position: "absolute",
            fontSize: "clamp(18rem, 28vw, 32rem)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            color: "rgba(255,27,107,0.06)",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            textTransform: "uppercase",
          }}
        >
          M
        </div>

        {/* Floating brand pills */}
        {[
          { name: "Rhode", top: "18%", left: "15%", delay: "0.6s" },
          { name: "Summer Fridays", top: "30%", right: "10%", delay: "0.75s" },
          { name: "Patrick Ta", top: "55%", left: "8%", delay: "0.9s" },
          { name: "Beauty of Joseon", bottom: "25%", right: "12%", delay: "1.05s" },
          { name: "e.l.f.", top: "72%", left: "30%", delay: "1.2s" },
        ].map((pill) => (
          <div
            key={pill.name}
            className="animate-fade-in"
            style={{
              position: "absolute",
              top: pill.top,
              left: pill.left,
              right: (pill as { right?: string }).right,
              bottom: (pill as { bottom?: string }).bottom,
              backgroundColor: "var(--white)",
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              fontSize: "0.7rem",
              fontWeight: 600,
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "0.04em",
              color: "var(--black)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              animationDelay: pill.delay,
              whiteSpace: "nowrap",
            }}
          >
            {pill.name}
          </div>
        ))}

        {/* Center circle */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "var(--pink)",
            opacity: 0.08,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "var(--pink)",
            opacity: 0.12,
            position: "absolute",
          }}
        />

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
            gap: "0.4rem",
            animationDelay: "1.5s",
          }}
        >
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray)", fontFamily: "var(--font-syne), sans-serif" }}>
            scroll
          </span>
          <div style={{ width: "1px", height: "36px", backgroundColor: "var(--gray-light)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", backgroundColor: "var(--pink)", animation: "scrollLine 1.6s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { grid-template-columns: 1fr !important; }
          section > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
