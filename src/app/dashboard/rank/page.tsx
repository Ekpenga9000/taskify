import RankList from "@/components/RankList";
import React from "react";


const page = () => {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rank Lists</h1>
      <h2 className="text-lg font-bold mb-2">
        Rank your lists and details of the ranks
      </h2>
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
