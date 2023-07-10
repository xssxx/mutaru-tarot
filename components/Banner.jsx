import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 w-full h-[28rem] sm:justify-between items-center bg-[url('../public/background.gif')]">
      {/* left side  */}
      <div className="flex flex-col items-center text-gray-100 gap-2">
        <span className="flex text-4xl font-bold cursor-pointer text-center">
          Magic surround you today
        </span>
        <p className="text-3xl">ดูดวงกับพี่หมอบอม</p>
      </div>
      {/* right side */}
      <div className="hidden sm:flex">
        <Image
          src="zodiac.svg"
          alt="zodiac"
          width={376}
          height={376}
          // className="animate-spin slow opacity-60"
          className="opacity-60"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
