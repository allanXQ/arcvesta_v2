import Image from "next/image";
import "./page.css";
import fs from "fs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full">
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
          <button>Get Started</button>
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
              <button className="w-24 h-10 bg-black text-sm text-white">
                Learn More
              </button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="flex flex-col items-center">
        <p className="text-xs font-bold">Whatever you need</p>
        <h2 className="text-3xl font-bold text-center">We have the solution</h2>
      </div>
      <div id="tech-exertise">
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
      </div>
    </main>
  );
}
