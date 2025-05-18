import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./QueryClient";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Музей Элистинского Политехнического Колледжа",
  description:
    "Музей Элистинского Политехнического Колледжа имени Эльвартынова",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1D1D1D] min-h-screen flex flex-col`}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
