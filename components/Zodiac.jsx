"use client";
import React, { useState } from "react";
import checkZodiac from "@/utils/zodiac";

const Zodiac = () => {
  const [zodiac, setZodiac] = useState("-");
  const [ascendant, setAscendant] = useState("-");
  const [birthdate, setBirthdate] = useState("");
  const [birthtime, setBirthtime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const [year, month, day] = birthdate.split("-");
    const [hour, minute] = birthtime.split(":");
    // console.log("sss", year, month, day);
    const result = checkZodiac({ day, month, hour, minute });
    setZodiac(result);
    // setAscendant(result.ascendant);
  };

  return (
    <div className="flex flex-col gap-4 bg-violet-400 h-[18rem] p-8">
      <div className="flex justify-center">
        <h1 className="text-3xl text-white">เช็คลักษณะราศี</h1>
      </div>
      <form className="flex flex-col items-center gap-4 text-white">
        <div className="flex gap-2">
          <label htmlFor="birthdate">วัน/เดือน/ปีเกิด</label>
          <input
            type="date"
            id="birthdate"
            className="text-black rounded-md text-center"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="birthtime">เวลาเกิด</label>
          <input
            type="time"
            id="birthtime"
            className="text-black rounded-md w-32 text-center"
            value={birthtime}
            onChange={(e) => setBirthtime(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-purple-500 w-16 rounded-md hover:bg-purple-600"
        >
          เช็ค
        </button>
      </form>
      <div className="flex flex-col text-white items-center">
        <span>ราศีของคุณคือ {zodiac}</span>
        <span>ลักษณะของคุณคือ {ascendant}</span>
      </div>
    </div>
  );
};

export default Zodiac;
