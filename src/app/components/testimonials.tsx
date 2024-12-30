import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-10 py-16 bg-white"
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
        {[
          {
            image: "/images/testimonials/user1.jpg",
            name: "John Doe",
            position: "CEO, TechCorp",
            quote:
              "Vesta transformed our online presence with an exceptional website. The team was professional, responsive, and a pleasure to work with.",
          },
          {
            image: "/images/testimonials/user2.jpg",
            name: "Jane Smith",
            position: "Marketing Manager, Innovate Inc.",
            quote:
              "Their web application development services exceeded our expectations. Our productivity has increased significantly since implementing their solution.",
          },
          {
            image: "/images/testimonials/user3.jpg",
            name: "Samuel Green",
            position: "Founder, Startup Hub",
            quote:
              "The Vesta team created a stunning mobile app for us. It’s user-friendly and perfectly aligned with our brand vision. Highly recommend!",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col items-center gap-4 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
            <p className="text-sm text-gray-700 text-center">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
