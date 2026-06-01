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
  "Más vendido": { bg: "var(--warm-black)", color: "var(--gold)" },
  Nuevo: { bg: "var(--terracotta)", color: "var(--ivory)" },
  Agotado: { bg: "#9B8578", color: "var(--ivory)" },
  Oferta: { bg: "var(--rose-dark)", color: "var(--ivory)" },
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image wrapper */}
      <div
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          backgroundColor: "#F5F0EB",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Tag badge */}
        {tag && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              padding: "0.2rem 0.65rem",
              backgroundColor: tag.bg,
              color: tag.color,
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
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
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0.9rem 1rem",
            backgroundColor: added ? "var(--rose-dark)" : "rgba(26,13,13,0.92)",
            backdropFilter: "blur(4px)",
            color: "var(--ivory)",
            border: "none",
            cursor: product.tag === "Agotado" ? "not-allowed" : "pointer",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), background-color 0.25s ease",
            zIndex: 2,
          }}
        >
          {added ? (
            <Check size={13} strokeWidth={2.5} />
          ) : (
            <ShoppingBag size={13} strokeWidth={1.5} />
          )}
          {product.tag === "Agotado" ? "Agotado" : added ? "Agregado" : "Agregar al carrito"}
        </button>
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
            fontWeight: 600,
            marginBottom: "0.2rem",
          }}
        >
          {product.brand}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.15rem",
            fontWeight: 500,
            color: "var(--warm-black)",
            lineHeight: 1.25,
            marginBottom: "0.5rem",
            letterSpacing: "0.01em",
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginBottom: "0.75rem",
            display: hovered ? "block" : "none",
          }}
        >
          {product.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "var(--warm-black)",
            }}
          >
            ${product.price.toLocaleString("es-MX")}
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
                color: "var(--muted)",
                marginLeft: "0.3rem",
              }}
            >
              MXN
            </span>
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                textDecoration: "line-through",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              ${product.originalPrice.toLocaleString("es-MX")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
