"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Check } from "lucide-react";
import type { Product } from "@/app/data/products";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
};

const tagStyles: Record<string, { bg: string; color: string }> = {
  "Más vendido": { bg: "var(--black)", color: "var(--white)" },
  Nuevo:         { bg: "var(--pink)", color: "var(--white)" },
  Agotado:       { bg: "var(--gray)", color: "var(--white)" },
  Oferta:        { bg: "#00C06B", color: "var(--white)" },
};

export default function ProductCard({ product, onAddToCart, index }: Props) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    if (product.tag === "Agotado") return;
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const tag = product.tag ? tagStyles[product.tag] : null;

  return (
    <article
      className="animate-fade-up"
      style={{
        animationDelay: `${index * 0.06}s`,
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
          aspectRatio: "1 / 1",
          backgroundColor: "var(--off-white)",
          overflow: "hidden",
          marginBottom: "0.9rem",
          borderRadius: "12px",
          border: hovered ? "1.5px solid var(--pink-mid)" : "1.5px solid transparent",
          transition: "border-color 0.25s ease",
        }}
      >
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />

        {/* Tag badge */}
        {tag && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              padding: "0.25rem 0.7rem",
              backgroundColor: tag.bg,
              color: tag.color,
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "100px",
              fontFamily: "var(--font-syne), sans-serif",
              zIndex: 2,
            }}
          >
            {product.tag}
          </div>
        )}

        {/* Add to cart overlay */}
        <button
          onClick={handleAdd}
          disabled={product.tag === "Agotado"}
          aria-label={`Agregar ${product.name} al carrito`}
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            right: "0.75rem",
            padding: "0.75rem 1rem",
            backgroundColor: added ? "#00C06B" : "var(--black)",
            color: "var(--white)",
            border: "none",
            cursor: product.tag === "Agotado" ? "not-allowed" : "pointer",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 700,
            fontFamily: "var(--font-syne), sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            borderRadius: "100px",
            transform: hovered ? "translateY(0)" : "translateY(calc(100% + 0.75rem))",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), background-color 0.25s ease",
            zIndex: 2,
          }}
        >
          {added ? <Check size={13} strokeWidth={2.5} /> : <ShoppingBag size={13} strokeWidth={2} />}
          {product.tag === "Agotado" ? "Agotado" : added ? "¡Agregado!" : "Agregar"}
        </button>
      </div>

      {/* Info */}
      <div style={{ flex: 1, padding: "0 0.25rem" }}>
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--pink)",
            fontWeight: 700,
            marginBottom: "0.15rem",
            fontFamily: "var(--font-syne), sans-serif",
          }}
        >
          {product.brand}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "var(--black)",
            lineHeight: 1.3,
            marginBottom: "0.6rem",
            letterSpacing: "-0.01em",
          }}
        >
          {product.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--black)",
                letterSpacing: "-0.02em",
              }}
            >
              ${product.price.toLocaleString("es-MX")}
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--gray)", fontWeight: 500 }}>MXN</span>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--gray)",
                  textDecoration: "line-through",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                ${product.originalPrice.toLocaleString("es-MX")}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
