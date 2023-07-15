import React from "react";
// import Zodiac from "@/components/Zodiac";
import Banner from "@/components/Banner";
import Service from "@/components/Service";

const page = () => {
  return (
    <div>
      {/* Navbar is already in layout */}
      <Banner />
      <Service />
      {/* <Zodiac /> */}
      {/* <Footer /> is in layout */}
    </div>
  );
};

export default page;
