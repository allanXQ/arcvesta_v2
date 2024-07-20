import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-w-full">
      <div id="header-container" className="min-w-full">
        <nav className="fixed flex justify-between min-w-full px-10 py-3">
          <p>LOGO</p>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
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
      <div>
        <div id="services" className="flex flex-col items-center p-10 gap-4">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-center">
            We offer a wide range of services to help you achieve your business
            goals.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/web-design.svg"
                alt="web design"
                width={100}
                height={100}
              />
              <h3>Web Design</h3>
              <p>
                We design websites that are visually appealing, user-friendly,
                and optimized for search engines.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/web-development.svg"
                alt="web development"
                width={100}
                height={100}
              />
              <h3>Web Development</h3>
              <p>
                We develop custom websites and web applications that are
                tailored to your business needs.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/mobile-apps.svg"
                alt="mobile apps"
                width={100}
                height={100}
              />
              <h3>Mobile Apps</h3>
              <p>
                We create mobile applications that are user-friendly, fast, and
                secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
