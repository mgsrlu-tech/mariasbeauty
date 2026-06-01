"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--off-white)",
        borderTop: "1px solid var(--gray-light)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
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
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "1.6rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--black)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Maria&apos;s<span style={{ color: "var(--pink)" }}>.</span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: "var(--gray)",
                maxWidth: "260px",
                fontWeight: 400,
              }}
            >
              Las marcas de belleza más virales del momento, directo a tu puerta en México.
            </p>
            {/* Social / newsletter teaser */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "1.5rem",
              }}
            >
              <input
                type="email"
                placeholder="Tu email"
                style={{
                  flex: 1,
                  padding: "0.6rem 1rem",
                  border: "1.5px solid var(--gray-light)",
                  borderRadius: "100px",
                  fontSize: "0.78rem",
                  outline: "none",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  backgroundColor: "var(--white)",
                  color: "var(--black)",
                }}
              />
              <button
                style={{
                  padding: "0.6rem 1.2rem",
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  border: "none",
                  borderRadius: "100px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-syne), sans-serif",
                  transition: "background-color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--black)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--pink)"; }}
              >
                Suscribir
              </button>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h4
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--black)",
                fontWeight: 700,
                fontFamily: "var(--font-syne), sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Tienda
            </h4>
            {["Labios", "Maquillaje", "Skincare", "Accesorios", "Novedades", "Best Sellers"].map((item) => (
              <a
                key={item}
                href="#tienda"
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "var(--gray)",
                  textDecoration: "none",
                  marginBottom: "0.55rem",
                  transition: "color 0.2s ease",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--pink)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gray)"; }}
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
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--black)",
                fontWeight: 700,
                fontFamily: "var(--font-syne), sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Ayuda
            </h4>
            {["Sobre nosotras", "Envíos", "Devoluciones", "Rastrear pedido", "Contacto"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "var(--gray)",
                  textDecoration: "none",
                  marginBottom: "0.55rem",
                  transition: "color 0.2s ease",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--pink)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gray)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--gray-light)",
          }}
        >
          <span style={{ fontSize: "0.7rem", color: "var(--gray)", letterSpacing: "0.04em" }}>
            © {year} Maria&apos;s Beauty · Hecho con amor en México 🇲🇽
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacidad", "Términos", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--gray)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--pink)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gray)"; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
