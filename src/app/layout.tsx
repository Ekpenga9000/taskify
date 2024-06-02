import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@/components/Container";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>

//       </body>
//     </html>
//   )
// }

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
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        <Container>
          {children}
          <Toaster />
          <Footer />
        </Container>
      </body>
    </html>
  );
}
