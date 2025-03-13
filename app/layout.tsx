import type { Metadata } from "next";
import { Inter, Pacifico, Merienda } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
const merienda = Merienda({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merienda"
});

export const metadata: Metadata = {
  title: "Priyansh Singh Bisht",
  description: "Priyansh Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${pacifico.variable} ${merienda.variable}`}>{children}</body>
    </html>
  );
}
