import RankList from "@/components/RankList";
import React from "react";

const page = () => {
  return (
    <section className="p-10">
      <h1 className="text-2xl font-semibold mb-4">About Taskify</h1>
      <p className="mb-4">
        Taskify is not just another task management app; it's your portal to
        unlocking productivity potential like never before. Seamlessly blending
        the thrill of gaming with the practicality of task management, Taskify
        empowers you to conquer your to-do list and ascend through the ranks of
        productivity.
      </p>
      <p className="mb-4">
        With Taskify, every completed task propels you forward, upgrading your
        ranking within the app's enchanting hierarchy. From Novice Task Sprites
        to Supreme Task Enigmas, your dedication to task completion shapes your
        journey towards ultimate productivity mastery.
      </p>
      <p className="mb-4">
        Experience the magic of productivity with Taskify - where completing
        tasks isn't just rewarding; it's your ticket to unlocking a world of
        accomplishment. Join Taskify today and level up your productivity game
        like never before!
      </p>

      <h2 className="text-2xl font-bold mb-4">Ranking System</h2>
      <h3 className="text-lg font-bold mb-2">
        Rank your lists and details of the ranks
      </h3>
      <p className="mb-4">
        Welcome to the enchanted realm of task mastery! As you embark on your
        journey, completing tasks will earn you mystical ranks, each
        representing your progress and dedication. Starting as a Novice Task
        Sprite, you'll ascend through the ranks, gaining wisdom and power with
        each completed task. Whether you're an Apprentice Task Faerie or a
        Supreme Task Enigma, your journey towards mastery is filled with magic
        and wonder. Embrace the enchantment of task completion and watch as your
        rank illuminates the path to greatness in this mystical world of
        productivity.
      </p>
      <RankList />
    </section>
  );
};

export default page;
