import Link from "next/link";
export default function Home() {
  return (
    <section className="mt-20">
      <h1 className="text-6xl font-bold text-center mt-8">Welcome to Taskify</h1>
      <p className="text-xl mt-4 text-center">
        Your enchanted realm of task mastery 🧙‍♂️.
        <br />
        Elevate your rank as you complete your tasks.
      </p>
      <div className="flex justify-center gap-8 mt-4">
        <Link href={"/login"} className="border  px-10 py-2 rounded-md border-zinc-600"> 🗝️ Login</Link>
        <Link href={"/register"} className="px-10 py-2 text-zinc-50 bg-zinc-900 rounded-md"> 😀 Get Started</Link>
      </div>
    </section>
  );
}
