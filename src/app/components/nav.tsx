"use client";
import React, { useState } from "react";
import { homeLinks } from "../constants";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // For Menu and Close Icons
import { DarkButton } from "./button";

const Topbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed flex items-center justify-between w-full h-14 px-6 py-4 bg-white">
        <span className="text-red-600 font-extrabold text-2xl">VESTA</span>
        <ul className="hidden md:flex gap-10">
          {homeLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </ul>
        <Link
          href="contact"
          className="hidden md:flex items-center justify-center w-24 h-10 bg-black text-sm text-white font-medium"
        >
          Contact Us
        </Link>
        <button
          className="md:hidden text-red-600 text-2xl"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-red-600 font-extrabold text-2xl">VESTA</span>
          <button className="text-red-600 text-2xl" onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-6 px-6">
          {homeLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={toggleSidebar}>
              <li className="cursor-pointer hover:text-red-600 transition">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="mt-6 px-6">
          <DarkButton>Contact Us</DarkButton>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Topbar;
