import React from "react";
import Card from "../components/Card";

const Service = () => {
  return (
    <div className="flex flex-col px-2 py-1 items-center bg-gradient-to-r from-indigo-300 to-purple-300">
      <div className="h-12 text-3xl">
        <span>Our Services</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
        <Card price="400" />
      </div>
    </div>
  );
};

export default Service;
