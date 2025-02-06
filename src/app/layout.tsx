import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from "./components/Footer";
import { CartProvider } from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Clerk imports
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackathon3-E-Commerce",
  description: "Created by Qareer Shah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Wrapping the app with Cart Context */}
          <CartProvider>
            {/* Header will handle user-related actions */}
            <Header />
            <ResponsiveNav />
            {children}
            <Footer />
          </CartProvider>
          {/* Toast Notifications */}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
