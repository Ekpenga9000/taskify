import React from "react";
import Dashboard from "@/components/Dashboard";
import InputComponent from "@/components/InputComponent";
import { auth } from "@/auth";

const DashboardPage = async() => {
  const session = await auth(); 
  return (
    <section>
      <h1 className="text-2xl font-bold text-center">Welcome</h1>
      <div>
        {JSON.stringify(session)}
      </div>
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
