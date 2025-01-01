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
      className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} gap-20 justify-center items-center flex-wrap lg:flex-nowrap`}
    >
      <div className="flex flex-col gap-4 lg:max-w-xl">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
        {features && featureType === "list" && (
          <div className="grid w-full grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Image
                  src="/images/icons/check.jpg"
                  alt="check mark"
                  width={20}
                  height={20}
                />
                <p>{typeof feature === "string" ? feature : feature.title}</p>
              </div>
            ))}
          </div>
        )}
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
        layout="responsive"
      />
    </div>
  );
};

const Services = () => {
  const services: ServiceSectionProps[] = [
    {
      title: "Website Design and Development",
      description:
        "We create visually appealing, user-friendly websites that not only reflect your brand's unique identity but also captivate and engage your audience, driving higher levels of interaction and ensuring a memorable online experience for your customers.",
      features: [
        "Responsive Design",
        "Custom Design",
        "SEO Optimized",
        "Content Management",
      ],
      featureType: "list",
      imageSrc: "/images/design1.png",
      reverse: false,
    },
    {
      title: "Web Application Development",
      description:
        "In contrast to traditional websites, which primarily serve as informational platforms, web applications are interactive, dynamic systems designed to perform specific functions or tasks online. Our web application development services focus on creating robust, scalable, and secure applications that deliver seamless user experiences and drive productivity.",
      features: [
        {
          title: "Custom Development",
          description:
            "Tailored applications to meet your unique business needs.",
        },
        {
          title: "Scalable",
          description:
            "Built to grow with your business and handle increasing traffic.",
        },
        {
          title: "Secure",
          description:
            "Implementing the latest security measures to protect against threats.",
        },
        {
          title: "User-friendly",
          description:
            "Intuitive and easy-to-use applications for a positive user experience.",
        },
      ],
      featureType: "details",
      imageSrc: "/images/design1.png",
      reverse: true,
    },
    {
      title: "Mobile Application Development",
      description:
        "In today’s fast-paced digital world, having a robust mobile presence is crucial for any business. Our mobile app development services are designed to create high-performance, feature-rich applications for iOS, Android, and cross-platform environments. We combine cutting-edge technology with creative design to deliver apps that align with your brand’s identity while providing an engaging and seamless user experience.",
      features: null,
      featureType: null,
      imageSrc: "/images/design1.png",
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
