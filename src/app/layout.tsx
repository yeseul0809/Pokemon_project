import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./providers/provider";

export const metadata: Metadata = {
  title: "Pokemons project",
  description: "나만의 포켓몬 도감",
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
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
