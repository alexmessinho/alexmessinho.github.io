import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Diaz Barreiro - Sports Analytics, Systems & Team Performance",
  description:
    "Portfolio for Alejandro Diaz Barreiro Aldana, an Industrial and Systems Engineering graduate student focused on optimization, analytics, sports analytics, and team performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
