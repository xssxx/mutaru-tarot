import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 w-full h-[28rem] sm:justify-between items-center bg-[url('../public/background.gif')]">
      {/* left side  */}
      <div className="flex flex-col items-center text-gray-100 gap-2">
        <span className="text-5xl cursor-pointer">Mutaru tarot</span>
        <p className="text-3xl">ดูดวงกับพี่หมอบอม</p>
        <button className="text-xl bg-violet-500 hover:bg-violet-600 px-20 rounded-md py-2 shadow-md">
          Services
        </button>
      </div>
      {/* right side */}
      <div className="hidden sm:flex">
        <Image
          src="/zodiac.svg"
          alt="zodiac"
          width={400}
          height={400}
          className="animate-spin slow opacity-60"
          priority
        />
      </div>
    </div>
  );
};

export default Intro;
