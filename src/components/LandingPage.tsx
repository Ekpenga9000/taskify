import React from "react";
import Link from "next/link";
import { RiGamepadLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { GoGift } from "react-icons/go";
import GamifiedUi from "./GamifiedUi";

const LandingPage = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-2xl mb-4">
        Conquer Your Tasks with Gamified Todo
      </h1>
      <p className="text-lg text-center text-zinc-500 mb-4">
        Unlock the power of gamification to stay motivated and productive. Earn
        rewards, track your progress, and make tackling your to-do list a fun
        challenge.
      </p>
      <div className="flex justify-center">
        <Link href={"/register"} className="signup">
          Get Started
        </Link>
      </div>
      {/* Gamified Ui */}
      <section className="my-8">
        <GamifiedUi />
      </section>
      {/* Section for the features of coding */}
      <section>
        <div className="flex justify-center my-4">
          <p className="bg-zinc-300 py-1 px-2 rounded text-sm">Key Features</p>
        </div>
        <h2 className="text-4xl font-semibold text-center mb-4">
          Gamify Your Productivity
        </h2>
        <p className="text-center text-zinc-500 mb-8">
          Unlock the power of gamification to stay motivated and achieve your
          goals. Our app transforms your to-do list into an engaging challenge
          with rewards and progress tracking.
        </p>

        {/* details of the features */}
        <ul className="flex justify-center gap-4 items-start">
          <li>
            <h3 className="features-header">
              <RiGamepadLine /> Task Gamification
            </h3>
            <p className="features-body">
              Turn your to-do list into a game with points, levels, and
              achievements. Earn rewards for completing tasks and stay
              motivated.
            </p>
          </li>
          <li>
            <h3 className="features-header">
              <GiProgression /> Progress Tracking
            </h3>
            <p className="features-body">
              Monitor your productivity and see your progress over time.
              Visualize your accomplishments and identify areas for improvement.{" "}
            </p>
          </li>
          <li>
            <h3 className="features-header">
              <GoGift /> Rewards System
            </h3>
            <p className="features-body">
              Earn virtual rewards and unlock special features as you complete
              tasks. Stay motivated and celebrate your achievements.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default LandingPage;
