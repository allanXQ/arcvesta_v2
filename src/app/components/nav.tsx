import React from "react";
import { homeLinks } from "../constants";
import Link from "next/link";
import { DarkButton } from "./button";

const Topbar = () => {
  return (
    <nav className="fixed flex item-center justify-between min-w-full px-10 pt-4 bg-slate-100 bg-opacity-75">
      <span className="text-red-600 font-extrabold text-2xl">VESTA</span>
      <ul className="flex gap-10 font-semibold">
        {homeLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            {link.name}
          </Link>
        ))}
      </ul>
      <DarkButton>Contact Us</DarkButton>
    </nav>
  );
};

export default Topbar;
