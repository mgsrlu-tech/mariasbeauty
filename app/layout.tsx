import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maria's Beauty — Cuidado Facial de Lujo",
  description: "Skincare de alta calidad para el cuidado facial. Productos seleccionados para la mujer mexicana moderna.",
  keywords: "skincare, cuidado facial, belleza, México, cremas faciales, sueros, limpiadores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body
        style={{ fontFamily: "var(--font-jost), sans-serif" }}
        className="min-h-screen flex flex-col antialiased"
      >
        {children}
      </body>
    </html>
  );
}
