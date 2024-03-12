import React from "react";
import HeaderMain from "@/components/HeaderMain";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderMain />
      {children}
    </section>
  );
};