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
  GiStarGate,
  GiPolarStar,
  GiAngelOutfit,
  GiSpikedHalo,
  GiAngelWings,
  GiWingedSword,
} from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import { FaPhoenixFramework, FaPhoenixSquadron } from "react-icons/fa6";
const RankList = () => {
  return (
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
        <GiBurningBook /> Magus
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
        <GiWingedSword /> Legend
      </li>
      <li className="flex items-center gap-1">
        <GiSpikedHalo /> Elder
      </li>
      <li className="flex items-center gap-1">
        <GiAngelWings /> Enlightened
      </li>
      <li className="flex items-center gap-1">
        <FaPhoenixSquadron /> Ascended
      </li>
      <li className="flex items-center gap-1">
        <GiAngelOutfit /> Celestial
      </li>
    </ul>
  );
};

export default RankList;
