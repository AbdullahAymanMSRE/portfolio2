import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title:
    "Abdullah Ayman | Senior Full Stack Engineer | React | Next.js | Laravel",
  description:
    "Hi, I love to help clients build fast, modern, and scalable web apps that look great and work even better. From responsive UI design to API integrations, I make sure every line of code serves your business goals. I’ve got solid experience with tools like React, Next.js, TypeScript and Laravel, and I’m always excited to learn new tech to deliver the best solutions possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <ToastProvider />
      </body>
    </html>
  );
}

function ToastProvider() {
  "use client";

  return (
    <ToastContainer
      className="z-[999999999]"
      position="top-center"
      toastClassName="!bg-accent !text-primary"
      autoClose={2000}
      closeButton={false}
      icon={false}
      hideProgressBar
    />
  );
}
