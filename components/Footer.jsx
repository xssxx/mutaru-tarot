import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex w-full bottom-0 py-2 border-2 bg-violet-200">
      <ul className="flex flex-row justify-center gap-4 items-center sm:gap-8">
        <li className="flex items-center gap-2">
          <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
        </li>
        <li className="flex items-center gap-2">
          <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
        </li>
        <li className="flex items-center gap-2">
          <Image src="line.svg" width={29} height={29} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
