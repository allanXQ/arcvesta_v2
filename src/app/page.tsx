import Image from "next/image";
import "./page.css";
import { DarkButton, LightButton } from "./components/button";
import { complimentaryservices } from "./constants";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full gap-32">
      <div
        id="hero"
        className="flex items-center justify-center min-w-full min-h-screen px-4 md:px-10"
      >
        <div className="flex flex-col items-center p-6 max-w-xl md:max-w-3xl gap-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Transforming businesses through innovative web solutions
          </h1>
          <p className="">
            We are a leading web design and development company specializing in
            user-friendly websites and mobile applications.
          </p>
          <div className="flex gap-2 md:gap-4">
            <DarkButton>Learn More</DarkButton>
            <LightButton>Get Started</LightButton>
          </div>
        </div>
      </div>
      <div id="services" className="flex flex-col items-center px-5 gap-10">
        <div id="services-header" className="flex flex-col items-center gap-1">
          <p className="text-sm font-bold">Whatever you need</p>
          <h2 className="text-3xl font-bold text-center">
            We have the solution
          </h2>
        </div>
        <div id="services-container" className="flex flex-col gap-32">
          <Services />
          <div
            id="complimentary-services"
            className="flex flex-col items-center justify-center gap-4"
          >
            <h2 className="font-bold text-3xl w-full lg:w-1/2 text-center">
              We offer a suite of additional services to create a fully-rounded
              and impactful digital presence.
            </h2>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
              {complimentaryservices.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-2 items-center"
                >
                  <Image
                    src="/images/icons/cube.png"
                    alt="check mark"
                    width={20}
                    height={20}
                  />
                  <div className="flex flex-col gap-1 items-center text-center">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div id="cta" className="flex flex-col items-center gap-2 max-w-xl">
        <h2 className="text-3xl font-bold text-center text-wrap">
          Ready to take your business to the next level?
        </h2>
        <p className="text-center text-wrap">
          Contact us today for a free consultation and quote on your project.
        </p>
        <div className="flex gap-4">
          <DarkButton>Contact Us</DarkButton>
          <LightButton>Learn More</LightButton>
        </div>
      </div>
    </main>
  );
}
