import React from "react";
import Dashboard from "@/components/Dashboard";
import InputComponent from "@/components/InputComponent";

const DashboardPage = () => {
  return (
    <section>
      <h1 className="text-6xl font-bold text-center">Welcome to Omogbare</h1>
      <p className="text-xl mt-4 text-center">
        Your enchanted realm of task mastery
      </p>
      <section>
        <Dashboard />
        <InputComponent />
      </section>
    </section>
  );
};

export default DashboardPage;
