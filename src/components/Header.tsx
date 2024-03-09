import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4">
      <nav className="flex justify-between">
        <Link href={"/"}>Taskify</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/list">My Lists</Link>
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
