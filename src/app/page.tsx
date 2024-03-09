import Image from "next/image";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-6xl font-bold">Welcome to Taskify</h1>
      <p className="text-xl mt-4">Your enchanted realm of task mastery</p>
      <section>
        <Dashboard />
      </section>
    </main>
  );
}
