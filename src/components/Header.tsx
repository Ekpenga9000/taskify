import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-black font-semibold p-4">
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
          <li className="cursor-pointer">
            <Link href={"/login"} className="login"><FaUser />Login</Link>
          </li>
          <li className="cursor-pointer signup">
            <Link href={"/register"}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
