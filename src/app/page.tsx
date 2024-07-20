import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div
        id="hero"
        className="flex items-center justify-center min-h-screen min-w-full"
      >
        <div className="flex flex-col items-center p-10 max-w-3xl gap-4">
          <h1 className="text-4xl text-center font-bold">
            Transforming businesses through innovative web solutions
            {/* Modern. user-friendly creative, functional */}
          </h1>
          <p>
            We are a leading web design and development company that specializes
            in creating user-friendly websites and mobile applications. Oue team
            of experts combines creativity and technical expertise to deliver
            exceptional digital solutions tailored to your business needs.
          </p>
          <div className="flex gap-4">
            <button className="w-24 h-10 bg-black text-sm text-white">
              Learn More
            </button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Our Services</h2>
          <div>
            <div>
              <Image
                src="/web-design.png"
                width={100}
                height={100}
                alt="web degin"
              />
              <h3>Web Design</h3>
              <p>
                We design and develop user-friendly websites that help you
                achieve your business goals.
              </p>
            </div>
            <div>
              <Image src="/web-development.png" width={100} height={100} />
              <h3>Web Development</h3>
              <p>
                We build custom websites and web applications that are tailored
                to your business needs.
              </p>
            </div>
            <div>
              <Image src="/mobile-apps.png" width={100} height={100} />
              <h3>Mobile Apps</h3>
              <p>
                We create mobile applications that are intuitive and easy to use
                for your customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
