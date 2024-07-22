import Image from "next/image";
import "./page.css";
import fs from "fs";

const DarkButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-black text-sm text-white">{children}</button>
);

const LightButton = ({ children }: { children: React.ReactNode }) => (
  <button className="w-24 h-10 bg-white text-sm text-black border border-black">
    {children}
  </button>
);

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
      <div id="services" className="flex flex-col items-center px-10 gap-4">
        <div id="services-header" className="flex flex-col items-center gap-2">
          <p className="text-xs font-bold">Whatever you need</p>
          <h2 className="text-3xl font-bold text-center">
            We have the solution
          </h2>
        </div>
        <div id="services-container">
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
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Learn More</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={500}
              height={500}
              alt="web design"
            />
          </div>
          <div className="flex flex-row-reverse gap-4 justify-center items-center">
            <div id="service-text" className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">
                Mobile Application Design and Development
              </h2>
              <p>
                We craft high-quality, visually engaging mobile applications
                tailored for iOS, Android, and cross-platform use. Our apps
                seamlessly integrate with your brand, delivering an exceptional
                user experience that captivates and engages your audience,
                fostering increased interaction and long-lasting customer
                satisfaction.
              </p>
              <div className="flex gap-4">
                <DarkButton>See Pricing</DarkButton>
                <LightButton>Learn More</LightButton>
              </div>
            </div>
            <Image
              src="/images/design1.png"
              width={500}
              height={500}
              alt="web design"
            />
          </div>
        </div>
      </div>
      {/* <div id="tech-exertise">
        <h2 className="text-3xl font-bold text-center">
          Technological Expertise
        </h2>
        <p className="text-center">
          Transform your digital vision into reality with our innovative and
          proficient tech solutions. We bring the future of technology to your
          fingertips.
        </p>
        <div id="tech-logos">
          <div id="tech-logos" className="flex gap-4 flex-wrap">
            {fs.readdirSync("public/images/techlogos").map((fileName) => (
              <Image
                key={fileName}
                src={`/images/techlogos/${fileName}`}
                alt={fileName}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      </div> */}
    </main>
  );
}
