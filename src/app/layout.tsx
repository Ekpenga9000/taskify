import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/Container";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omogbare's Todo List",
  description: "A very nice todo list made with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        <Container>
          <Header />
          <main className="min-h-screen p-10">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
