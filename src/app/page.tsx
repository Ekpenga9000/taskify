import Image from "next/image";
import Dashboard from "@/components/Dashboard";
import InputComponent from "@/components/InputComponent";

export default function Home() {
  return (
    <section>
      <h1 className="text-6xl font-bold text-center">Welcome to Taskify</h1>
      <p className="text-xl mt-4 text-center">Your enchanted realm of task mastery</p>
      <section>
        <Dashboard />
        <InputComponent />
      </section>
    </section>
  );
}
