"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DashboardHeader from "./DashboardHeader";
import DashboardGreetings from "./DashboardGreetings";



const Dashboard = () => {
  const token = localStorage.getItem("token");
  const router = useRouter();

  if (!token) {
    router.push("/login");
  }

  const [user, setUser] = useState<any>({});

  useEffect(() => {}, [token]);

  return (
    <section>
      <div className="border p-4">
        <DashboardHeader />
      </div>
      <div className="mt-8 px-4">
        <DashboardGreetings/>
          </div>
          <div>
              
          </div>
    </section>
  );
};

export default Dashboard;
