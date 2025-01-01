import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  title: string;
  text: string;
  name: string;
  position: string;
  company: string;
}

const testimonials = [
  {
    imageSrc: "/images/testimonials/user1.jpg",
    title: "Exceptional Website",
    text: "Vesta transformed our online presence with an exceptional website. The team was professional, responsive, and a pleasure to work with.",
    name: "John Doe",
    position: "CEO",
    company: "TechCorp",
  },
  {
    imageSrc: "/images/testimonials/user2.jpg",
    title: "Exceeded Expectations",
    text: "Their web application development services exceeded our expectations. Our productivity has increased significantly since implementing their solution.",
    name: "Jane Smith",
    position: "Marketing Manager",
    company: "Innovate Inc.",
  },
  {
    imageSrc: "/images/testimonials/user3.jpg",
    title: "Stunning Mobile App",
    text: "The Vesta team created a stunning mobile app for us. It’s user-friendly and perfectly aligned with our brand vision. Highly recommend!",
    name: "Samuel Green",
    position: "Founder",
    company: "Startup Hub",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  title,
  text,
  name,
  position,
  company,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Profile Image */}
      <Image
        src={imageSrc}
        alt={name}
        width={80}
        height={80}
        className="rounded-full border-4 border-green-500"
      />

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>

      {/* Testimonial Text */}
      <p className="text-sm text-gray-600 text-center">{text}</p>

      {/* Name and Position */}
      <div className="text-center">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">
          {position} at <span className="text-green-500">{company}</span>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-10 bg-white"
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          Hear from businesses we’ve helped transform with our innovative
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
