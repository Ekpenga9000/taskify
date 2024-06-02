"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  
  return (
    <button onClick={handleLogout} className="signup font-semibold">
      <i className="bx bx-log-out"></i> Sign Out
    </button>
  );
};

export default Logout;
