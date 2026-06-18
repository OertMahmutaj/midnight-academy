import type { Metadata } from "next";
import "./globals.css"; 

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}