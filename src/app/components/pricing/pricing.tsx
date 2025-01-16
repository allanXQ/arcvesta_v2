import Image from "next/image";
import React from "react";

const plans = [
  {
    name: "Website",
    price: "$99",
    features: [
      "1 Website",
      "Max 5 Pages",
      "Basic SEO",
      "Custom Design",
      "Standard Hosting",
    ],
  },
  {
    name: "Pro Plan",
    price: "$199",
    features: [
      "5 Websites",
      "Advanced SEO",
      "Priority Support",
      "50 GB Hosting",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    features: [
      "Unlimited Websites",
      "Dedicated Support",
      "Custom Features",
      "Unlimited Hosting",
    ],
  },
]

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-evenly gap-10"
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Pricing Plans
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Choose the perfect plan for your business needs. Flexible pricing with
          no hidden costs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col items-center justify-between bg-white p-6 shadow-lg rounded-lg w-[20vw] h-[80vh]"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-extrabold text-gray-800">
              {plan.price}
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
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
