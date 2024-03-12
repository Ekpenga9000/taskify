import React from "react";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Todo List",
  description: "This is the perfect todo list made with Next.js and Tailwind CSS",

};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

