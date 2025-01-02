"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import PortfolioSection from "../components/portfolioSection";
import { projects } from "../constants";

const PortfolioPage = () => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-10 py-16">
      {/* Tabs for Navigation */}
      <div className="flex gap-4 justify-center">
        <Link
          href="/portfolio"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </Link>
        <Link
          href="/portfolio/webapps"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/webapps")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Web Apps
        </Link>
        <Link
          href="/portfolio/websites"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/websites")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Websites
        </Link>
        <Link
          href="/portfolio/mobileapps"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/mobileapps")
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Mobile Apps
        </Link>
      </div>

      {/* Portfolio Section */}
      <PortfolioSection projects={projects} />
    </div>
  );
};

export default PortfolioPage;
