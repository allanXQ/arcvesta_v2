import Image from "next/image";
import React from "react";

const currency = "KSH";

const plans = [
  {
    name: "Website",
    price: "15,000", // Adjusted to reflect realistic market rates
    features: [
      "Custom Design",
      "Responsive Design (Mobile & Tablet Optimization)",
      "SEO Optimization",
      "Contact Form Integration",
      "Social Media Links Integration",
      "Email Accounts",
      "Max 10 Pages",
      "Max 5 revisions",
      "Dedicated Support",
      "1-Month Maintenance and Updates",
    ],
  },
  {
    name: "Web Application",
    price: "50,000",
    features: [
      "Custom Dashboard or Admin Panel",
      "Responsive Design (Mobile & Tablet Optimization)",
      "SEO Optimization",
      "Dedicated Support",
      "User Authentication System (Login/Signup)",
      "Custom Forms and Interactive Features",
      "API Integration (Payment Gateway etc.)",
      "E-commerce Solutions",
      "1-Month Maintenance and Updates",
    ],
  },
  {
    name: "Mobile Application",
    price: "70,000", // Kept as "Custom" for flexibility
    features: [
      "Cross-Platform Development (iOS and Android)",
      "UI/UX Design Customization",
      "Push Notifications and Alerts",
      "In-App Purchases or Monetization Features",
      "Integration with Backend Services",
      "Performance Optimization for App Stores",
      "E-commerce Solutions",
      "Dedicated Support",
      "1-Month Maintenance and Updates",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col gap-10 w-full items-center px-4 sm:px-10 lg:px-20 py-10"
    >
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Pricing Plans
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Choose the perfect service for your business needs. Flexible pricing with
          no hidden costs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full max-w-screen-lg">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col gap-5 bg-white p-5 shadow-lg rounded-lg"
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-center">{plan.name}</h3>

            {/* Price */}
            <p className="text-3xl font-extrabold text-gray-800 text-center">
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
