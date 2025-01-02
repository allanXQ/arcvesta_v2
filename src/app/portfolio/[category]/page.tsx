"use client";
import PortfolioSection from "@/app/components/portfolioSection";
import { projects } from "@/app/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const validCategories = ["webapps", "websites", "mobileapps"];

const CategoryPortfolioPage = () => {
  const pathname = usePathname();
  const category = pathname.split("/").pop() || ""; // Extract category
  const isActive = (path: string) => pathname === path;

  const filteredProjects = validCategories.includes(category)
    ? projects.filter((project) => project.tag === category.slice(0, -1)) // Handle pluralization
    : [];

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

      <PortfolioSection projects={filteredProjects} />
    </div>
  );
};

export default CategoryPortfolioPage;
