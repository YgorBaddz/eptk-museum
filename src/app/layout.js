import { Oswald } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./QueryClient";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"], // можно указать веса по необходимости
});

export const metadata = {
  title: "Музей Элистинского Политехнического Колледжа",
  description:
    "Музей Элистинского Политехнического Колледжа имени Эльвартынова",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${oswald.variable} antialiased bg-[#F5F5DC] min-h-screen flex flex-col pt-4 font-sans`}
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
