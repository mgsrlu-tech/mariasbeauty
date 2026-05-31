"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

type NavbarProps = {
  cartCount: number;
  onCartClick: () => void;
};

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Tienda", "Colecciones", "Ritual", "Nosotras"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(250,246,241,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,120,90,0.15)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.75rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "var(--warm-black)",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Maria&apos;s<span style={{ color: "var(--terracotta)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.5rem" }} className="hidden md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#tienda"
              className="hover-line"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--warm-black)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={onCartClick}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--warm-black)",
            }}
            aria-label="Carrito de compras"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "var(--terracotta)",
                  color: "white",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--warm-black)",
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--ivory)",
            borderTop: "1px solid rgba(196,120,90,0.2)",
            padding: "1.5rem 2rem 2rem",
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
                padding: "0.75rem 0",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--warm-black)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(196,120,90,0.1)",
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
