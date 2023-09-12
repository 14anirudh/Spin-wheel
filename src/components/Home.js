import React from "react";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "../wheeel.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-end pt-8 masked">
      <div className="ml-72 w-1/2 ">
        <img src={logo} alt="logo" className="w-80 h-80" />
      </div>

      <div className="flex mr-60 w-1/2 ">
        <div className="rounded-lg flex flex-col md:ml-auto h-27rem w-10/12 mt-4 md:mt-0 z-10 ">
          <h2 className="mb-1 font-poppins font-bold text-2xl text-left ">
            This is how EngageBud looks like in action!
          </h2>
          <div className="relative mb-4 mt-2">
            {/* <div className="absolute inset-y-0 left-5 pl-2 flex items-center pointer-events-none ">
                  <p>Email</p>
                </div> */}
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-t-lg border-b border-[#146531]  focus:ring-2 focus:ring-[#146531] text-base outline-none text-gray-700 px-3 mb-1 leading-8 transition-colors duration-200 ease-in-out pl-8"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center justify-center pointer-events-none ">
              <LuMail />
            </div>
          </div>
          <div className="relative mb-4">
            <div>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded-t-lg border-b border-[#146531] focus:ring-2 focus:ring-[#146531] text-base outline-none text-gray-700 px-3 mb-1 leading-8 transition-colors duration-200 ease-in-out pl-8"
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <MdOutlinePhone />
              </div>
            </div>
          </div>
          <div className="relative mb-2 flex justify-center items-center border-2 border-black p-2 rounded-lg">
            <input type="checkbox" className=" bg-black" />
            <div className="ml-1 flex flex-col justify-end">
              <p className="text-left text-xs">
                I agree to receiving recurring automated messages at the number
                I have provided.
              </p>
              <p className="text-left text-xs">
                Consent is not a condition to purchase.
              </p>
            </div>
          </div>
          <Link to="/wheel">
            <button className="text-white bg-[#146531] border-0 py-2 px-6 font-bold focus:outline-none rounded-xxl text-lg">
              Try Your luck!
            </button>
          </Link>
          <div className="w-full text-xs scale-75 text-gray-500 m-0 p-0">
            *You can spin the wheel only once! *If you win, you can claim your
            coupon for 10 minutes only!
          </div>

          <div className="mt-1 flex items-center justify-end">
            <p className="text-right mr-1">No,I don't feel lucky</p>
            <RxCross2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
