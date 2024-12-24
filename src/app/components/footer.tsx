import React from "react";
import { homeLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socials = [
    {
      name: "facebook",
      link: "https://www.facebook.com",
    },
    {
      name: "twitter",
      link: "https://www.twitter.com",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com",
    },
    {
      name: "whatsapp",
      link: "https://www.whatsapp.com",
    },
  ];
  return (
    <footer className="flex flex-col items-center gap-4 w-full px-10 mt-10">
      <div className="flex flex-col items-center gap-10 w-full">
        <div>LOGO</div>
        <div className="flex flex-col items-center gap-2">
          <span>Follow Us</span>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.link}>
                  <Image
                    src={`/images/logos/${social.name}.png`}
                    alt={social.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p>© 2024 Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
