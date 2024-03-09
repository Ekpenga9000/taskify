import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="border-b text-zinc-900 px-10 py-5">
      <div className="flex justify-between">
        <Link href={"/"} className="font-semibold">
          Taskify
        </Link>
        <ul className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default Header;
