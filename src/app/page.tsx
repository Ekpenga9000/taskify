import LandingPage from "@/components/LandingPage";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <section className="flex flex-col items-center justify-between p-24">
        <LandingPage />
      </section>
      <section className="bg-zinc-200 ">
        <div className="p-24 flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold">Boost Your Productivity with Gamification</h2>
          <p className="text-zinc-500">
            Unlock the full potential of your to-do list with our gamification
            features. Stay motivated, track your progress, and earn rewards for
            completing tasks.
          </p>
        </div>
        <div>
          <Link href={"/register"} className="signup">
            Get Started
          </Link>
        </div>
        </div>
      </section>
    </main>
  );
}
