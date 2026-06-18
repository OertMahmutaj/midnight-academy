import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; 

export const metadata: Metadata = {
  title: "Midnight Academy | Premium Graphic Design Bootcamp",
  description: "Learn Graphic Design from a 12-Year Creative Director. Right here in Tirana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="antialiased bg-black text-white">
        {/* Render Navbar globally across all child page views */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}