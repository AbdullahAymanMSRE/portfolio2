import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Ayman",
  description:
    "with 3 years of expertise crafting immersive digital experiences. Proficient in React JS and PHP Laravel I bring creativity and precision to every project. Let's turn your ideas into captivating web realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
