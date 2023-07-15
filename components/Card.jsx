import React from "react";

const Card = ({ children, name, price }) => {
  return (
    <div className="hover:opacity-75 duration-200 cursor-pointer flex flex-col items-center w-fit h-96 shadow-xl bg-gradient-to-r from-purple-300 to-violet-300 rounded-lg">
      <div className="bg-[#9477d1] w-full py-2 text-center rounded-t-lg">
        <span className="text-white text-2xl">{name}</span>
      </div>
      <div className="h-[16rem] w-[17rem] text-center text-white text-2xl py-2 flex flex-col justify-center gap-1">
        {children}
      </div>
      <div className="w-full bg-gray-200 text-center text-lg text-[#9575da] rounded-b-lg flex-grow flex flex-col justify-center">
        {Array.isArray(price) ? (
          price.map((item, idx) => <p key={idx}>{item}</p>)
        ) : (
          <p>{price}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
