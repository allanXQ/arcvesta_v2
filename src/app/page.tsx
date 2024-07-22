import Image from "next/image";
import "./page.css";

const DarkButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-black text-sm text-white font-medium">
    {children}
  </button>
);

const LightButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-white text-sm text-black border border-black font-medium">
    {children}
  </button>
);

const websitefeatures = [
  "Responsive",
  "SEO Optimized",
  "Custom Design",
  "Content Management",
];

const webappfeatures = [
  {
    title: "Custom Development",
    description: "Tailored applications to meet your unique business needs.",
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
];

const appfeatures = ["Android", "IOS", "Cross-Platform"];

const complimentaryservices = [
  {
    title: "E-commerce Solutions",
    description:
      "Create and manage an online store to sell your products and services.",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage the power of the cloud for storage, computing, and more.",
  },
  {
    title: "API Development and Integration",
    description:
      "Connect your applications and systems for seamless data sharing.",
  },
  {
    title: "Data Management and Analytics",
    description:
      "Collect, analyze, and leverage data to make informed business decisions.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Integrate with popular platforms and services to extend your reach.",
  },
  {
    title: "Chatbots and AI",
    description:
      "Implement AI-driven chatbots to improve customer service and engagement",
  },
  {
    title: "Maintenance and Support",
    description:
      "Ongoing support and maintenance to keep your digital assets running smoothly.",
  },
  {
    title: "Web Hosting",
    description:
      "Reliable hosting services to ensure your website is always online.",
  },
  {
    title: "Domain Registration",
    description:
      "Register and manage your domain names to establish your online presence.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full gap-20">
      <div id="header-container" className="min-w-full">
        <nav className="fixed flex justify-between min-w-full px-10 py-3">
          <p>LOGO</p>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <DarkButton>Contact Us</DarkButton>
        </nav>
        <div
          id="hero"
          className="flex items-center justify-center min-w-full min-h-screen "
        >
          <div className="flex flex-col items-center p-10 max-w-3xl gap-4">
            <h1 className="text-4xl text-center font-bold">
              Transforming businesses through innovative web solutions
              {/* Modern. user-friendly creative, functional */}
            </h1>
            <p>
              We are a leading web design and development company that
              specializes in creating user-friendly websites and mobile
              applications. Oue team of experts combines creativity and
              technical expertise to deliver exceptional digital solutions
              tailored to your business needs.
            </p>
            <div className="flex gap-4">
              <DarkButton>Learn More</DarkButton>
              <LightButton>Get Started</LightButton>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="flex flex-col items-center px-10 gap">
        <div id="services-header" className="flex flex-col items-center gap-1">
          <p className="text-xs font-bold">Whatever you need</p>
          <h2 className="text-3xl font-bold text-center">
            We have the solution
          </h2>
        </div>
        <div id="services-container" className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center items-center">
            <div id="service-text" className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">
                Website Design and Development
              </h2>
              <p>
                We create visually appealing, user-friendly websites that not
                only reflect your brand's unique identity but also captivate and
                engage your audience, driving higher levels of interaction and
                ensuring a memorable online experience for your customers.
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
              width={650}
              height={650}
              alt="web design"
            />
          </div>
          <div className="flex flex-row-reverse gap-4 justify-center items-center">
            <div id="service-text" className="flex flex-col gap-4">
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
              width={650}
              height={650}
              alt="web design"
            />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div id="service-text" className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">
                Mobile Application Development
              </h2>
              <p>
                In today's fast-paced digital world, having a robust mobile
                presence is crucial for any business. Our mobile app development
                services are designed to create high-performance, feature-rich
                applications for iOS, Android, and cross-platform environments.
                We combine cutting-edge technology with creative design to
                deliver apps that not only align with your brand’s identity but
                also provide an engaging and seamless user experience.
              </p>
              {/* <div className="flex gap-x-60 gap-y-5 flex-wrap items-center justify-center">
                {appfeatures.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <Image
                      src="/images/icons/cube.png"
                      alt="cube"
                      width={20}
                      height={20}
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div> */}
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Portfolio</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={650}
              height={650}
              alt="web design"
            />
          </div>

          <div
            id="complimentary-services"
            className="flex flex-col items-center justify-center gap-4"
          >
            <h2 className="font-bold text-3xl w-1/2 text-center">
              We provide a range of additional services to ensure your digital
              presence is comprehensive and effective
            </h2>
            <div className="grid w-full grid-cols-3 place-items-center gap-4">
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
      <div id="cta" className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold text-center">
          Ready to take your business to the next level?
        </h2>
        <p className="text-center">
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
