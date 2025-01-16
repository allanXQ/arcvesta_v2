import React from "react";
import PortfolioCard from "./portfolioCard";

interface PortfolioSectionProps {
  projects: any[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 py-2 min-h-[40vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500">No projects found.</p>
      )}
    </div>
  );
};

export default PortfolioSection;
