import React from "react";
import Zodiac from "@/components/Zodiac";
import Intro from "@/components/Intro";

const page = () => {
  return (
    <div>
      {/* Navbar is already in layout */}
      <Intro />
      <div className="bg-purple-300 h-12"></div>
      <Zodiac />
      <div className="h-12"></div>
      {/* <Footer /> is in layout */}
    </div>
  );
};

export default page;
