import React from "react";

const Card = (props) => {
  return (
    <div className="w-52 h-64 shadow-lg bg-gray-100 rounded-lg">
      <div></div>
      <span>ราคา {props.price}</span>
    </div>
  );
};

export default Card;
