import React from "react";
import logo from "../wheeel.png";
import { Link } from "react-router-dom";

const Result = () => {
  const result = localStorage.getItem("result");
  return (
    <div className="flex items-center justify-end pt-8 masked">
      <div className="ml-72 w-1/2 ">
        <img src={logo} alt="logo" className="w-80 h-80" />
      </div>

      <div className="flex mr-60 w-1/2 ">
        <div className="rounded-lg flex flex-col h-27rem w-10/12 mt-10 md:mt-0 z-10 ">
          <h2 className="mb-1 font-poppins font-bold text-3xl">
            Congrats! You Won:
          </h2>
          <h2 className="mb-1 font-poppins font-bold text-3xl">{result}</h2>
          <div className="flex m-4 h-16 border border-gray-300 items-center justify-center ">
            <div className=" h-16 w-2/3 bg-[#A2C2A5] flex items-center justify-start p-2 rounded-tl-lg rounded-bl-lg">
              <p className="text-white font-bold text-3xl">XAXPDF20</p>
            </div>
            <div className=" h-16 w-1/3 bg-[#146531] flex items-center justify-center rounded-tr-lg rounded-br-lg">
              <button className="text-white font-bold text-lg">COPY</button>
            </div>
          </div>

          <button className="text-white bg-[#146531] border-0 py-2 px-6 font-bold focus:outline-none rounded-xxl text-lg">
            Close Panel & Copy
          </button>

          <p className="text-xs scale-75 text-gray-500 mt-3 w-full">
            *You can claim your coupon for 10 minutes only!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;