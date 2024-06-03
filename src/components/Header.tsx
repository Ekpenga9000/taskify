"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Logout from "./Logout";

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <header className="bg-white text-black font-semibold p-4">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>Taskify</Link>
        <ul className="flex space-x-4">
          <li className="menu-items">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="menu-items">
            <Link href="/list">My Lists</Link>
          </li>
          <li className="menu-items">
            <Link href="/completed">Completed</Link>
          </li>
          <li className="menu-items">
            <Link href={"/stats"}>Stats</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4 text-sm">
          {!token && (
            <li className="cursor-pointer">
              <Link href={"/login"} className="login">
                <FaUser />
                Login
              </Link>
            </li>
          )}
          {!token && (
            <li className="cursor-pointer signup">
              <Link href={"/register"}>Sign up</Link>
            </li>
          )}
          {token && (
            <li className="cursor-pointer signup">
              <Link href={"/dashboard"} className="flex items-center gap-1"><MdOutlineDashboardCustomize /> Dashboard</Link>
            </li>
          )}
          {token && (
            <li onClick={() => setToken("")}>
              <Logout />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
