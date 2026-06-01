"use client";

import { useState } from "react";
import { products, categories } from "@/app/data/products";
import type { Product } from "@/app/data/products";
import ProductCard from "./ProductCard";

type Props = {
  onAddToCart: (product: Product) => void;
};

export default function StoreSection({ onAddToCart }: Props) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="tienda"
      style={{
        backgroundColor: "var(--ivory)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  backgroundColor: "var(--terracotta)",
                }}
              />
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  fontWeight: 500,
                }}
              >
                Colección
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Todo lo que te gusta,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>
                en un lugar.
              </em>
            </h2>
          </div>

          {/* Category filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1.1rem",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: activeCategory === cat
                    ? "1px solid var(--terracotta)"
                    : "1px solid rgba(196,120,90,0.3)",
                  backgroundColor: activeCategory === cat
                    ? "var(--terracotta)"
                    : "transparent",
                  color: activeCategory === cat
                    ? "var(--ivory)"
                    : "var(--muted)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "2.5rem 2rem",
          }}
        >
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
