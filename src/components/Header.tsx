import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>Taskify</Link>
        <ul className="flex space-x-4 text-sm">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href="/list">My Lists</Link>
          </li>
          <li>
            <Link href="/completed">Completed</Link>
          </li>
          <li>
            <Link href={"/stats"}>Stats</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4 text-sm">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer signup">
            <Link href={"/register"}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
