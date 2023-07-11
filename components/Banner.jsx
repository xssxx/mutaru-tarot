import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-center lg:grid lg:justify-between relative pt-16 lg:grid-cols-2 gap-8 w-full h-[28rem] items-center bg-[url('../public/background.gif')]">
      {/* left side  */}
      <div className="flex flex-col items-center text-white gap-2 z-1">
        <span className="flex text-5xl font-bold cursor-pointer text-center px-2">
          Magic surround you<br></br>today
        </span>
        <p className="text-4xl">ดูดวงกับพี่หมอบอม</p>
      </div>
      {/* right side */}
      <div className="grid absolute lg:relative lg:flex m-auto w-fit z-0">
        <Image
          src="zodiac.svg"
          alt="zodiac"
          width={370}
          height={370}
          className="opacity-30"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
