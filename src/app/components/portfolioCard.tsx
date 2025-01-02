import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi"; // Import an external link icon

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  url?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  url,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden relative">
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

      {/* External Link Icon */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          aria-label={`Visit ${title}`}
        >
          <FiExternalLink className="text-gray-800 w-5 h-5" />
        </a>
      )}
    </div>
  );
};

export default PortfolioCard;
