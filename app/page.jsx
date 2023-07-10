import React from "react";
import Zodiac from "@/components/Zodiac";
import Intro from "@/components/Banner";

const page = () => {
  return (
    <div>
      {/* Navbar is already in layout */}
      <Intro />
      <Zodiac />
      {/* <Footer /> is in layout */}
    </div>
  );
};

export default page;
