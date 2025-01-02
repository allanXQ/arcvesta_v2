"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import PortfolioSection from "../components/portfolioSection";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform with integrated payment gateway and advanced search functionality.",
    imageSrc: "/images/projects/download.jpeg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    tag: "website",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio website designed to showcase personal projects and achievements.",
    imageSrc: "/images/projects/download.jpeg",
    technologies: ["HTML", "CSS", "JavaScript"],
    tag: "website",
  },
  {
    title: "Mobile App",
    description:
      "A cross-platform mobile app with real-time notifications and offline capabilities.",
    imageSrc: "/images/projects/download.jpeg",
    technologies: ["React Native", "Expo", "Firebase"],
    tag: "mobileapp",
  },
  {
    title: "Web Application",
    description:
      "An interactive web application for managing tasks and collaborating with team members in real-time.",
    imageSrc: "/images/projects/download.jpeg",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    tag: "webapp",
  },
];

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
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </Link>
        <Link
          href="/portfolio/webapps"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/webapps")
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Web Apps
        </Link>
        <Link
          href="/portfolio/websites"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/websites")
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Websites
        </Link>
        <Link
          href="/portfolio/mobileapps"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            isActive("/portfolio/mobileapps")
              ? "bg-blue-500 text-white"
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
