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
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(26,13,13,0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 100,
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Drawer */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(440px, 100vw)",
          backgroundColor: "var(--ivory)",
          zIndex: 101,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-20px 0 60px rgba(26,13,13,0.15)",
          animation: "slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.75rem 2rem",
            borderBottom: "1px solid rgba(196,120,90,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <ShoppingBag size={18} strokeWidth={1.5} color="var(--terracotta)" />
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.3rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              Tu Carrito
            </h2>
            {items.length > 0 && (
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                ({items.reduce((s, i) => s + i.qty, 0)} artículos)
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "var(--muted)",
            }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem 2rem" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                gap: "1rem",
                color: "var(--muted)",
              }}
            >
              <ShoppingBag size={48} strokeWidth={1} color="var(--blush)" />
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                }}
              >
                Tu carrito está vacío
              </p>
              <button
                onClick={onClose}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Explorar productos →
              </button>
            </div>
          ) : (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid rgba(196,120,90,0.1)",
                  }}
                >
                  {/* Product image */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      flexShrink: 0,
                      backgroundColor: "#F5F0EB",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        marginBottom: "0.15rem",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.brand}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Qty controls */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          border: "1px solid rgba(196,120,90,0.25)",
                          padding: "0.25rem 0.5rem",
                        }}
                      >
                        <button
                          onClick={() => item.qty === 1 ? onRemove(item.id) : onUpdate(item.id, item.qty - 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", color: "var(--muted)" }}
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span style={{ fontSize: "0.8rem", fontWeight: 500, minWidth: "16px", textAlign: "center" }}>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdate(item.id, item.qty + 1)}
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", color: "var(--warm-black)" }}
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>

                      <span
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.1rem",
                          fontWeight: 500,
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
              padding: "1.5rem 2rem",
              borderTop: "1px solid rgba(196,120,90,0.15)",
              backgroundColor: "var(--ivory)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                }}
              >
                ${total.toLocaleString("es-MX")} MXN
              </span>
            </div>

            <button
              style={{
                width: "100%",
                padding: "1.1rem",
                backgroundColor: "var(--warm-black)",
                color: "var(--ivory)",
                border: "none",
                cursor: "pointer",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "0.75rem",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--rose-dark)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--warm-black)";
              }}
            >
              Proceder al pago
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "0.65rem",
                color: "var(--muted)",
                letterSpacing: "0.05em",
              }}
            >
              Envío gratis a todo México en pedidos +$800 MXN
            </p>
          </div>
        )}
      </aside>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
