import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-xs text-gray-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
