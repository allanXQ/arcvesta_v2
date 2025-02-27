import Image from "next/image";
import React from "react";

const currency = "KSH";

const plans = [
  {
    name: "Website",
    price: "15,000",
    features: [
      "Custom Design",
      "Responsive Design (Mobile & Tablet Optimization)",
      "SEO Optimization",
      "Contact Form Integration",
      "Social Media Links Integration",
      "Email Accounts",
      "Max 10 Pages",
      "Max 5 Revisions",
      "Dedicated Support",
    ],
  },
  {
    name: "Web Application",
    price: "50,000",
    features: [
      "Custom Dashboard or Admin Panel",
      "Responsive Design (Mobile & Tablet Optimization)",
      "SEO Optimization",
      "User Authentication System (Login/Signup)",
      "API Integration (Payment Gateway, etc)",
      "E-commerce Solutions",
      "Performance Optimization",
      "Max 5 Revisions",
      "Dedicated Support",
    ],
  },
  {
    name: "Mobile Application",
    price: "70,000",
    features: [
      "Cross-Platform Development (iOS and Android)",
      "Custom Application Design",
      "3rd Party API integrations",
      "Push Notifications and Alerts",
      "In-App Purchases or Monetization Features",
      "Integration with Backend Services",
      "Performance Optimization for App Stores",
      "E-commerce Solutions",
      "Max 5 Revisions",
      "Dedicated Support",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col gap-10 w-full items-center px-4 sm:px-10 lg:px-20"
    >
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Pricing Plans
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Choose the perfect service for your business needs. Flexible pricing
          with no hidden costs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col gap-2 bg-white p-5 shadow-lg rounded-lg"
          >
            {/* Plan Name */}
            <h3 className="text-xl font-bold text-center">{plan.name}</h3>

            {/* Price */}
            <p className="text-2xl font-bold text-gray-800 text-center">
              Starting at {plan.price} {currency}
            </p>
            {/* Features List */}
            <ul className="text-sm text-gray-700 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Image
                    src="/images/icons/check.jpg"
                    alt="check"
                    width={20}
                    height={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
