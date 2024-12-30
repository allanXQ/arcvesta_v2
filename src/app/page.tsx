import Image from "next/image";
import "./page.css";
import { DarkButton, LightButton } from "./components/button";
import {
  websitefeatures,
  webappfeatures,
  complimentaryservices,
} from "./constants";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full gap-20">
      <div
        id="hero"
        className="flex items-center justify-center min-w-full min-h-screen px-4 md:px-10"
      >
        <div className="flex flex-col items-center p-6 max-w-xl md:max-w-3xl gap-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Transforming businesses through innovative web solutions
          </h1>
          <p className="text-sm md:text-base">
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
        <div id="services-header" className="flex flex-col items-center gap-1">
          <p className="text-sm font-bold">Whatever you need</p>
          <h2 className="text-3xl font-bold text-center">
            We have the solution
          </h2>
        </div>
        <div id="services-container" className="flex flex-col gap-16">
          <div className="flex gap-20 justify-center items-center flex-wrap">
            <div id="service-text" className="flex flex-col gap-4 max-w-xl">
              <h2 className="font-bold text-2xl">
                Website Design and Development
              </h2>
              <p>
                We create visually appealing, user-friendly websites that not
                only reflect your brand&apos;s unique identity but also
                captivate and engage your audience, driving higher levels of
                interaction and ensuring a memorable online experience for your
                customers.
              </p>
              <div className="grid w-full grid-cols-2">
                {websitefeatures.map((feature) => (
                  <div key={feature} className="flex gap-4 items-center">
                    <Image
                      src="/images/icons/check.jpg"
                      alt="check mark"
                      width={20}
                      height={20}
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Portfolio</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={600}
              height={600}
              alt="web design"
              className="w-full max-w-lg mx-auto"
              layout="responsive"
            />
          </div>
          <div className="flex flex-row-reverse gap-20 justify-center items-center flex-wrap">
            <div id="service-text" className="flex flex-col gap-4 max-w-xl">
              <h2 className="font-bold text-2xl">
                Web Application Development
              </h2>
              <p>
                In contrast to traditional websites, which primarily serve as
                informational platforms, web applications are interactive,
                dynamic systems designed to perform specific functions or tasks
                online. Our web application development services focus on
                creating robust, scalable, and secure applications that deliver
                seamless user experiences and drive productivity
              </p>
              <div className="grid w-full grid-cols-2 gap-4 items-start justify-center">
                {webappfeatures.map((feature) => (
                  <div key={feature.title} className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Portfolio</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={600}
              height={600}
              alt="web design"
              className="w-full max-w-lg mx-auto"
              layout="responsive"
            />
          </div>
          <div className="flex flex-row gap-20 justify-center items-center flex-wrap">
            <div id="service-text" className="flex flex-col gap-4 max-w-xl">
              <h2 className="font-bold text-2xl">
                Mobile Application Development
              </h2>
              <p className="">
                In today&apos;s fast-paced digital world, having a robust mobile
                presence is crucial for any business. Our mobile app development
                services are designed to create high-performance, feature-rich
                applications for iOS, Android, and cross-platform environments.
                We combine cutting-edge technology with creative design to
                deliver apps that not only align with your brand’s identity but
                also provide an engaging and seamless user experience.
              </p>
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Portfolio</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={600}
              height={600}
              alt="web design"
              className="w-full max-w-lg mx-auto"
              layout="responsive"
            />
          </div>

          <div
            id="complimentary-services"
            className="flex flex-col items-center justify-center gap-4 p-4"
          >
            <h2 className="font-bold text-3xl w-full lg:w-1/2 text-center">
              We offer a suite of additional services to create a fully-rounded
              and impactful digital presence.
            </h2>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
              {complimentaryservices.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col w-80 gap-2 items-center"
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
      <Pricing />
      <Testimonials />
      https://bambulab.com/en/a1-mini get fonts
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
