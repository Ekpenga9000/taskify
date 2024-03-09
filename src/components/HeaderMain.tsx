import React from "react";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <header className="border-b text-zinc-900 px-10 py-5">
      <nav className="flex justify-between">
        <Link href={"/"} className="font-semibold">
          Taskify
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMain;
