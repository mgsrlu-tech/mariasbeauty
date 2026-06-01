"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

type NavbarProps = {
  cartCount: number;
  onCartClick: () => void;
};

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Tienda", "Marcas", "Skincare", "Makeup", "Novedades"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.35s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.98)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--gray-light)" : "1px solid transparent",
      }}
    >
      {/* Announcement bar */}
      <div
        style={{
          backgroundColor: "var(--pink)",
          color: "var(--white)",
          textAlign: "center",
          padding: "0.45rem 1rem",
          fontSize: "0.68rem",
          letterSpacing: "0.12em",
          fontWeight: 600,
          textTransform: "uppercase",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        Envío gratis en compras +$800 MXN · Todo México
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--black)",
            textDecoration: "none",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Maria&apos;s<span style={{ color: "var(--pink)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#tienda"
              className="hover-line"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
                color: "var(--gray-dark)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--black)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gray-dark)")}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <button
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--gray-dark)" }}
            aria-label="Buscar"
          >
            <Search size={19} strokeWidth={1.8} />
          </button>

          <button
            onClick={onCartClick}
            style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--black)" }}
            aria-label="Carrito"
          >
            <ShoppingBag size={19} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "3px",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pink)",
                  color: "white",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--black)" }}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--white)",
            borderTop: "1px solid var(--gray-light)",
            padding: "1rem 2rem 1.5rem",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#tienda"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.7rem 0",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--black)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gray-light)",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
