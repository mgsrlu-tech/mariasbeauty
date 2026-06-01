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
        backgroundColor: "var(--white)",
        padding: "5rem 2rem 6rem",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--pink)",
                fontWeight: 700,
                fontFamily: "var(--font-syne), sans-serif",
                marginBottom: "0.5rem",
              }}
            >
              — Colección
            </p>
            <h2
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "var(--black)",
              }}
            >
              Todo lo que te gusta,{" "}
              <span style={{ color: "var(--pink)", fontStyle: "italic" }}>en un lugar.</span>
            </h2>
          </div>

          {/* Category filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: "100px",
                  fontFamily: "var(--font-syne), sans-serif",
                  border: activeCategory === cat
                    ? "1.5px solid var(--pink)"
                    : "1.5px solid var(--gray-light)",
                  backgroundColor: activeCategory === cat ? "var(--pink)" : "transparent",
                  color: activeCategory === cat ? "var(--white)" : "var(--gray-dark)",
                  textTransform: "uppercase",
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
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "2rem 1.5rem",
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
