import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokemons project",
  description: "next app first project",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="font-dohyeon bg-black" lang="en">
      <body>{children}</body>
    </html>
  );
}
