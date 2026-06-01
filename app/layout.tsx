import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maria's Beauty — Makeup & Skincare",
  description: "Las marcas que amas — Rhode, Summer Fridays, Patrick Ta, Beauty of Joseon — entregadas en México.",
  keywords: "skincare, makeup, belleza, México, Rhode, Summer Fridays, Patrick Ta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${syne.variable} ${jakarta.variable}`}>
      <body
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        className="min-h-screen flex flex-col antialiased"
      >
        {children}
      </body>
    </html>
  );
}
