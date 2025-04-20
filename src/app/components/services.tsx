import React from "react";
import Image from "next/image";
import { DarkButton, LightButton } from "./button";

interface Feature {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  features?: string[] | Feature[] | null;
  featureType?: "list" | "details" | null;
  imageSrc: string;
  reverse: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  features,
  featureType,
  imageSrc,
  reverse,
}) => {
  return (
    <div
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} gap-5 justify-center items-center flex-wrap lg:flex-nowrap`}
    >
      <div className="flex flex-col gap-4 lg:max-w-xl">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
        {features && featureType === "details" && (
          <div className="grid w-full grid-cols-2 gap-4 items-start justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-1">
                {typeof feature !== "string" && (
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                )}
                {typeof feature !== "string" && <p>{feature.description}</p>}
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-4">
          <DarkButton>See Pricing</DarkButton>
          <LightButton>Portfolio</LightButton>
        </div>
      </div>
      <Image
        src={imageSrc}
        width={600}
        height={600}
        alt={title}
        className="w-full max-w-lg mx-auto"
      />
    </div>
  );
};

const Services = () => {
  const services: ServiceSectionProps[] = [
    {
      title: "Website Design & Development",
      description:
        "Captivating websites that blend style with function. We create user-friendly digital experiences that engage visitors and showcase your brand's unique identity.",
      featureType: "details",
      features: [
        {
          title: "Responsive Design",
          description:
            "Perfect viewing on all devices from desktops to smartphones.",
        },
        {
          title: "Custom Design",
          description:
            "Unique visuals that reflect your brand and connect with your audience.",
        },
        {
          title: "SEO Optimization",
          description:
            "Built to boost visibility and drive more organic traffic.",
        },
        {
          title: "Content Management",
          description: "Easy tools to update and manage your website content.",
        },
      ],
      imageSrc: "/images/services/webdesign.png",
      reverse: false,
    },
    {
      title: "Web Application Development",
      description:
        "Powerful web apps that solve real business problems. We deliver interactive, secure solutions that transform how you operate online.",
      features: [
        {
          title: "Custom Solutions",
          description:
            "Tailored applications built for your specific business needs.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Systems that grow with your business and handle increased demand.",
        },
        {
          title: "Enhanced Security",
          description:
            "Industry-best practices to protect your data and users.",
        },
        {
          title: "Intuitive Interfaces",
          description: "User-friendly designs that simplify complex tasks.",
        },
      ],
      featureType: "details",
      imageSrc: "/images/services/webapp2.png",
      reverse: true,
    },
    {
      title: "Mobile Application Development",
      description:
        "Connect with users anywhere through standout mobile apps. We combine smart technology with sharp design for exceptional iOS, Android, and cross-platform experiences.",
      featureType: "details",
      imageSrc: "/images/services/mobileapp.png",
      features: [
        {
          title: "iOS Development",
          description: "High-performance apps that leverage Apple's ecosystem.",
        },
        {
          title: "Android Development",
          description:
            "Responsive apps optimized for the diverse Android landscape.",
        },
        {
          title: "Cross-Platform Solutions",
          description:
            "Consistent quality and functionality across multiple platforms.",
        },
        {
          title: "App Store Optimization",
          description:
            "Strategic positioning to maximize visibility and downloads.",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
