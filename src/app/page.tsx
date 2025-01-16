import Image from "next/image";
import "./page.css";
import { DarkButton, LightButton } from "./components/button";
import { complimentaryservices } from "./constants";
import Testimonials from "./components/testimonials";
import Services from "./components/services";
import HeaderSection from "./components/headerSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full gap-28">
      <div
        id="hero"
        className="flex items-center justify-center min-w-full min-h-screen px-4 md:px-10"
      >
        <div className="flex flex-col items-center p-6 max-w-xl md:max-w-3xl gap-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Transforming businesses through innovative solutions
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
      <div id="services" className="flex flex-col items-center px-10 gap-10">
        <HeaderSection
          subTitle="Our Services"
          title="We offer a range of services to help grow your business."
        />
        <div id="services-container" className="flex flex-col gap-28">
          <Services />
          <div
            id="complimentary-services"
            className="flex flex-col items-center justify-center gap-4"
          >
            <HeaderSection
              subTitle="Complimentary Services"
              title="Our suite of complimentary services will create a fully-rounded
              and impactful digital presence."
            />
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
      <div className="flex flex-col items-center px-10 gap-10">
        <Testimonials />
      </div>
      <div id="cta" className="flex flex-col items-center max-w-xl">
        <HeaderSection
          subTitle="Ready to take your business to the next level?"
          title="Contact us today for a free consultation and quote on your project."
        />
        <div className="flex gap-4 mt-4">
          <DarkButton>Contact Us</DarkButton>
          <LightButton>Learn More</LightButton>
        </div>
      </div>
    </main>
  );
}
