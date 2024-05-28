import React from "react";
import {
  GiElfHelmet,
  GiFairyWings,
  GiFairyWand,
  GiWingedShield,
  GiSpellBook,
  GiBookAura,
  GiBurningBook,
  GiRobe,
} from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";
import { FaPhoenixFramework, FaPhoenixSquadron } from "react-icons/fa6";

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
      <ul className="font-bold">
        <li className="flex items-center gap-1">
          <GiElfHelmet /> Sprite
        </li>
        <li className="flex items-center gap-1">
          <GiFairyWings /> Faerie
        </li>
        <li className="flex items-center gap-1">
          <GiFairyWand /> Enchanter
        </li>
        <li className="flex items-center gap-1">
          <FaHatWizard /> Sorcerer
        </li>
        <li className="flex items-center gap-1">
          <GiWingedShield /> Guardian
        </li>
        <li className="flex items-center gap-1">
          <GiSpellBook /> Druid
        </li>
        <li className="flex items-center gap-1">
          <GiBurningBook/> Magus
        </li>
        <li className="flex items-center gap-1">
          <GiBookAura /> Archmage
        </li>
        <li className="flex items-center gap-1">
          <GiRobe /> Sage
        </li>
        <li className="flex items-center gap-1">
          <FaPhoenixFramework /> Enigma
        </li>
        <li className="flex items-center gap-1">
          <FaPhoenixSquadron /> Legend
        </li>
      </ul>
    </section>
  );
};

export default page;
