import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex justify-center w-fit h-fit shadow-lg bg-purple-100 rounded-lg">
      <Image
        src="logo.svg"
        alt="service"
        width={300}
        height={300}
        priority={true}
      />
    </div>
  );
};

export default Card;
