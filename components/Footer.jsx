import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex w-full py-2 bg-violet-200 justify-center gap-4">
      <span className="flex text-indigo-800 items-center">
        &copy; 2023 | Mutaru tarot
      </span>
      <ul className="flex flex-row justify-center gap-8 items-center sm:gap-8">
        <li className="flex items-center gap-2 cursor-pointer">
          <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <Image src="line.svg" width={29} height={29} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
