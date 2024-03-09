import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b text-zinc-900 px-10 py-5">
      <nav className="flex justify-between">
        <Link href={"/"} className="font-semibold">Taskify</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/list">My Tasks</Link>
          </li>
          <li>
            <Link href="/completed">Completed</Link>
          </li>
          <li>
            <Link href={"/rank"}>Rank</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
