"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StoreSection from "@/components/StoreSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Cart, { CartItem } from "@/components/Cart";
import type { Product } from "@/app/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <Hero />
        <Marquee />
        <StoreSection onAddToCart={addToCart} />
        <Features />
      </main>

      <Footer />

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdate={updateQty}
          onRemove={removeItem}
        />
      )}
    </>
  );
}
