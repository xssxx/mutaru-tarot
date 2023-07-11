import React from "react";
import Card from "../components/Card";

const Service = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-gradient-to-b from-[#c494e1] to-[#7e6bbd]">
      <span className="text-4xl text-white py-8">Services</span>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Service;
