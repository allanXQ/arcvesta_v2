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
    <footer className="flex flex-col items-center gap-4 w-full px-4 md:px-10 mt-32">
      <div className="flex flex-col items-center gap-6 w-full">
        <span className="font-extrabold text-2xl">VESTA</span>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm md:text-base">Follow Us</span>
          <ul className="flex gap-2 md:gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.link}>
                  <Image
                    src={`/images/logos/${social.name}.png`}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-5 md:w-8"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm md:text-base text-center">
        © {new Date().getFullYear()} Vesta Systems. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
