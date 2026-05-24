import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Diaz Barreiro Aldana",
  description:
    "Portfolio for Alejandro Diaz Barreiro Aldana, an Industrial and Systems Engineering graduate student focused on optimization, analytics, and complex systems.",
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
