import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <header>
      <nav className="flex1 justify-between">
        <div className="flex1 gap-12">
          <h3 className="font-semibold text-2xl"><Link href={"/"}>Taskify</Link></h3>

          <ul className="flex1 gap-4">
            <li className="menu-items"><Link href={"/projects"}>Projects</Link></li>
            <li className="menu-items"><Link href={"/tasks"}>Tasks</Link></li>
          </ul>
        </div>

        <div className="flex1 gap-4">
          <Input type="search" placeholder="Search"/>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
