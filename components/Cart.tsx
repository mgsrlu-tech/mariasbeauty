"use client";

import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/app/data/products";

export type CartItem = Product & { qty: number };

type Props = {
  items: CartItem[];
  onClose: () => void;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
};

export default function Cart({ items, onClose, onUpdate, onRemove }: Props) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(12,12,12,0.45)",
          backdropFilter: "blur(6px)",
          zIndex: 100,
          animation: "fadeIn 0.2s ease",
        }}
      />

      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(440px, 100vw)",
          backgroundColor: "var(--white)",
          zIndex: 101,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-24px 0 80px rgba(12,12,12,0.12)",
          animation: "slideInRight 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.5rem 1.75rem",
            borderBottom: "1px solid var(--gray-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <ShoppingBag size={18} strokeWidth={1.8} color="var(--pink)" />
            <h2
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--black)",
              }}
            >
              Tu carrito
            </h2>
            {items.length > 0 && (
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "var(--gray)",
                  fontWeight: 500,
                }}
              >
                ({items.reduce((s, i) => s + i.qty, 0)})
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", color: "var(--gray)" }}
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem 1.75rem" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pink-pale)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShoppingBag size={32} strokeWidth={1.5} color="var(--pink)" />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--black)",
                }}
              >
                Carrito vacío
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--gray)", textAlign: "center", maxWidth: "200px" }}>
                Agrega tus productos favoritos
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: "0.6rem 1.5rem",
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  border: "none",
                  borderRadius: "100px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                Ver productos
              </button>
            </div>
          ) : (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid var(--gray-light)",
                  }}
                >
                  <div
                    style={{
                      width: "76px",
                      height: "76px",
                      flexShrink: 0,
                      backgroundColor: "var(--off-white)",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="76px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--pink)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-syne), sans-serif", marginBottom: "0.15rem" }}>
                      {item.brand}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--black)",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </h3>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          border: "1.5px solid var(--gray-light)",
                          borderRadius: "100px",
                          padding: "0.2rem 0.6rem",
                        }}
                      >
                        <button
                          onClick={() => item.qty === 1 ? onRemove(item.id) : onUpdate(item.id, item.qty - 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", color: "var(--gray)", lineHeight: 1 }}
                        >
                          <Minus size={11} strokeWidth={2.5} />
                        </button>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, minWidth: "14px", textAlign: "center", fontFamily: "var(--font-syne), sans-serif" }}>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdate(item.id, item.qty + 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", color: "var(--black)", lineHeight: 1 }}
                        >
                          <Plus size={11} strokeWidth={2.5} />
                        </button>
                      </div>

                      <span
                        style={{
                          fontFamily: "var(--font-syne), sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--black)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        ${(item.price * item.qty).toLocaleString("es-MX")}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: "1.5rem 1.75rem",
              borderTop: "1px solid var(--gray-light)",
              backgroundColor: "var(--white)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray)", fontWeight: 600, fontFamily: "var(--font-syne), sans-serif" }}>
                Subtotal
              </span>
              <span style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--black)", letterSpacing: "-0.03em" }}>
                ${total.toLocaleString("es-MX")} <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--gray)" }}>MXN</span>
              </span>
            </div>

            <button
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "var(--pink)",
                color: "var(--white)",
                border: "none",
                borderRadius: "100px",
                cursor: "pointer",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "var(--font-syne), sans-serif",
                marginBottom: "0.75rem",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--black)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--pink)"; }}
            >
              Proceder al pago →
            </button>

            <p style={{ textAlign: "center", fontSize: "0.65rem", color: "var(--gray)" }}>
              Envío gratis en pedidos +$800 MXN
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
