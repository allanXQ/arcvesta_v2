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
      {/* Topbar */}
      <nav className="fixed flex items-center justify-between w-full px-6 md:px-10 py-4 bg-slate-100 bg-opacity-75 z-50">
        <span className="text-red-600 font-extrabold text-2xl">VESTA</span>
        <ul className="hidden md:flex gap-10 font-semibold">
          {homeLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="hidden md:block">
          <DarkButton>Contact Us</DarkButton>
        </div>
        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-red-600 text-2xl"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Sidebar */}
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
        <ul className="flex flex-col gap-4 mt-6 px-6 font-semibold">
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

      {/* Backdrop for Sidebar */}
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
