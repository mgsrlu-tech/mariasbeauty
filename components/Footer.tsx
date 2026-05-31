"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--warm-black)",
        borderTop: "1px solid rgba(250,246,241,0.06)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "var(--ivory)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Maria&apos;s<span style={{ color: "var(--terracotta)" }}>.</span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "rgba(250,246,241,0.4)",
                maxWidth: "280px",
                fontWeight: 300,
              }}
            >
              Skincare de alta calidad para la mujer mexicana moderna.
              Formulado con ingredientes puros, sin compromisos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              Tienda
            </h4>
            {["Sueros", "Cremas", "Limpieza", "Protección", "Mascarillas", "Tratamientos"].map((item) => (
              <a
                key={item}
                href="#tienda"
                className="hover-line"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "rgba(250,246,241,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.6rem",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,246,241,0.5)";
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 500,
                marginBottom: "1.25rem",
              }}
            >
              Información
            </h4>
            {["Sobre nosotras", "Ingredientes", "Ritual de belleza", "Envíos y devoluciones", "Contacto"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "rgba(250,246,241,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.6rem",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ivory)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,246,241,0.5)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(250,246,241,0.06)",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "rgba(250,246,241,0.25)",
              letterSpacing: "0.05em",
            }}
          >
            © {year} Maria&apos;s Beauty. Hecho con amor en México.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacidad", "Términos", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(250,246,241,0.25)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,246,241,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,246,241,0.25)";
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
