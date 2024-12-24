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
    <footer className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-10">
        <div>
          <span>Quick Links</span>
          <ul className="flex flex-col gap-2">
            {homeLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <span>Portfolio</span>
          <ul className="flex flex-col gap-2">
            {homeLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <span>Follow Us</span>
        <ul className="flex gap-2">
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
      <p>© 2024 Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
