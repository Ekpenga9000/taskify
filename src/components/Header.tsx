import React from "react";
import Link from "next/link";
import { signOut } from "@/auth";
import { LuLogOut } from "react-icons/lu";

const Header = () => {
  const handleLogout = async () => {
    "use server";
    await signOut();
  };

  return (
    <nav className="border-b text-zinc-900 px-10 py-5">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-semibold">
          Taskify
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashbaord/list">My Tasks</Link>
          </li>
          <li>
            <Link href="/dashboard/completed">Completed</Link>
          </li>
          <li>
            <Link href={"/dashboard/rank"}>Rank</Link>
          </li>
        </ul>
        <form action={handleLogout}>
          <button className="text-zinc-100 bg-zinc-700 hover:bg-zinc-900 flex items-center gap-1 px-3 py-1 rounded-md" type="submit">
          <LuLogOut />  Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
