"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SessionProvider>
          <Navbar />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </SessionProvider>
      </body>
    </html>
  );
}
