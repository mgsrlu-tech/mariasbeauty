"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import type { Product } from "@/app/data/products";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
};

export default function ProductCard({ product, onAddToCart, index }: Props) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const delay = `${index * 0.08}s`;

  return (
    <article
      className="animate-fade-up"
      style={{
        animationDelay: delay,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          backgroundColor: "var(--cream)",
          overflow: "hidden",
          marginBottom: "1.25rem",
        }}
      >
        {/* Color accent blobs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 70% 60% at 30% 70%, ${product.color}22 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 75% 25%, ${product.color}15 0%, transparent 50%)`,
            transition: "opacity 0.4s ease",
            opacity: hovered ? 1 : 0.5,
          }}
        />

        {/* Product visual */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "4.5rem",
                marginBottom: "1rem",
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))",
              }}
            >
              {product.emoji === "✦" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="32" fill={`${product.color}20`} stroke={`${product.color}40`} strokeWidth="1"/>
                  <path d="M40 16 L43 37 L64 40 L43 43 L40 64 L37 43 L16 40 L37 37 Z" fill={product.color} opacity="0.7"/>
                </svg>
              )}
              {product.emoji === "◈" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect x="20" y="20" width="40" height="40" rx="8" fill={`${product.color}20`} stroke={`${product.color}40`} strokeWidth="1"/>
                  <rect x="32" y="32" width="16" height="16" rx="3" fill={product.color} opacity="0.7"/>
                  <circle cx="40" cy="40" r="4" fill={`${product.color}`} opacity="0.9"/>
                </svg>
              )}
              {product.emoji === "◉" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="28" fill={`${product.color}18`} stroke={`${product.color}35`} strokeWidth="1"/>
                  <circle cx="40" cy="40" r="18" fill={`${product.color}25`} stroke={`${product.color}50`} strokeWidth="1"/>
                  <circle cx="40" cy="40" r="8" fill={product.color} opacity="0.75"/>
                </svg>
              )}
              {product.emoji === "◎" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" fill={`${product.color}12`} stroke={`${product.color}30`} strokeWidth="1.5"/>
                  <circle cx="40" cy="40" r="20" fill={`${product.color}18`} stroke={`${product.color}45`} strokeWidth="1"/>
                  <circle cx="40" cy="40" r="10" fill={`${product.color}30`} stroke={`${product.color}60`} strokeWidth="1"/>
                  <circle cx="40" cy="40" r="3" fill={product.color}/>
                </svg>
              )}
              {product.emoji === "◆" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <polygon points="40,10 70,40 40,70 10,40" fill={`${product.color}18`} stroke={`${product.color}35`} strokeWidth="1"/>
                  <polygon points="40,22 58,40 40,58 22,40" fill={`${product.color}30`} stroke={`${product.color}55`} strokeWidth="1"/>
                  <polygon points="40,32 48,40 40,48 32,40" fill={product.color} opacity="0.8"/>
                </svg>
              )}
              {product.emoji === "⬡" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <polygon points="40,12 64,26 64,54 40,68 16,54 16,26" fill={`${product.color}18`} stroke={`${product.color}35`} strokeWidth="1"/>
                  <polygon points="40,24 54,32 54,48 40,56 26,48 26,32" fill={`${product.color}28`} stroke={`${product.color}50`} strokeWidth="1"/>
                  <circle cx="40" cy="40" r="6" fill={product.color} opacity="0.75"/>
                </svg>
              )}
              {product.emoji === "◇" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <polygon points="40,14 66,40 40,66 14,40" fill={`${product.color}15`} stroke={`${product.color}30`} strokeWidth="1"/>
                  <polygon points="40,26 54,40 40,54 26,40" fill={`${product.color}25`} stroke={`${product.color}50`} strokeWidth="1"/>
                  <line x1="40" y1="14" x2="40" y2="66" stroke={`${product.color}20`} strokeWidth="1"/>
                  <line x1="14" y1="40" x2="66" y2="40" stroke={`${product.color}20`} strokeWidth="1"/>
                </svg>
              )}
              {product.emoji === "✧" && (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="28" fill={`${product.color}15`} stroke={`${product.color}25`} strokeWidth="1"/>
                  <path d="M40 18 L42 38 L62 40 L42 42 L40 62 L38 42 L18 40 L38 38 Z" fill={product.color} opacity="0.5"/>
                  <path d="M40 28 L41 39 L52 40 L41 41 L40 52 L39 41 L28 40 L39 39 Z" fill={product.color} opacity="0.85"/>
                </svg>
              )}
            </div>

            <div
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                color: `${product.color}`,
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              {product.category}
            </div>
          </div>
        </div>

        {/* Tag badge */}
        {product.tag && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              backgroundColor: "var(--warm-black)",
              color: "var(--gold)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "0.3rem 0.7rem",
            }}
          >
            {product.tag}
          </div>
        )}

        {/* Add to cart overlay */}
        <button
          onClick={handleAdd}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1rem",
            backgroundColor: added ? "var(--rose-dark)" : "var(--warm-black)",
            color: "var(--ivory)",
            border: "none",
            cursor: "pointer",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease",
          }}
        >
          {added ? <Check size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
          {added ? "Añadido" : "Agregar al carrito"}
        </button>
      </div>

      {/* Product info */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "var(--warm-black)",
            marginBottom: "0.2rem",
            letterSpacing: "0.01em",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            letterSpacing: "0.05em",
            marginBottom: "0.75rem",
          }}
        >
          {product.subtitle}
        </p>

        {/* Benefits */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1rem",
          }}
        >
          {product.benefits.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                padding: "0.2rem 0.6rem",
                border: `1px solid ${product.color}40`,
                color: product.color,
                backgroundColor: `${product.color}0a`,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "var(--warm-black)",
            }}
          >
            ${product.price.toLocaleString("es-MX")} MXN
          </span>
        </div>
      </div>
    </article>
  );
}
