import React from "react";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../images/wheeel.png";


const Home: React.FC = () => {
  // mock api call to create a user with email and number onclick of button and then redirect to spin page
// interface User {
//   email: string;
//   phoneNumber: string;
// }

// function CreateUserButton() {
//   const [user, setUser] = useState<User>({
//     email: '',
//     phoneNumber: '',
//   });

//   const createUser = () => {
//     const headers = new Headers();
//     headers.set('Content-Type', 'application/json');
//     headers.set('Accept', 'application/json');

//     const request = new Request('/users', {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(user),
//     });

//     fetch(request)
//       .then((res) => {
//         console.log('got response:', res);
//         if (res.ok) {
//           console.log('User created!');
//         } else {
//           console.error('Error creating user');
//         }
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//       });
//   };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-8 masked px-4 md:px-0">
      <div className=" md:w-1/2 flex justify-center">
        <img src={logo} alt="logo" className="w-80 h-80 mb-8" />
      </div>

      <div className="flex flex-col md:mr-10 md:w-1/4 md:max-w-md ">
        <div className="rounded-lg flex flex-col mt-4 z-10">
          <h2 className="mb-1 font-poppins font-extrabold text-2xl md:text-2xl text-center md:text-left">
            This is how EngageBud looks like in action!
          </h2>
          <div className="relative mb-4 mt-2">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-t-lg border-b border-[#146531] focus:ring-2 focus:ring-[#146531] text-base outline-none text-gray-700 px-3 mb-1 leading-8 transition-colors duration-200 ease-in-out pl-8"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
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
            <input type="checkbox" className="bg-black" />
            <div className="ml-1 flex flex-col justify-end">
              <p className="text-center md:text-left text-xs">
                I agree to receiving recurring automated messages at the number
                I have provided.
              </p>
              <p className="text-center md:text-left text-xs">
                Consent is not a condition to purchase.
              </p>
            </div>
          </div>
          <Link to="/spin">
            <button className="text-white bg-[#146531] border-0 py-2 px-6 font-bold focus:outline-none rounded-xxl text-lg">
              Try Your luck!
            </button>
          </Link>
          <div className="w-full text-xs scale-75 text-gray-500 m-0 p-0 text-center">
            *You can spin the wheel only once! *If you win, you can claim your
            coupon for 10 minutes only!
          </div>

          <div className="mt-1 flex items-center justify-center md:justify-end">
            <p className="text-center md:text-right mr-1">
              No, I don't feel lucky
            </p>
            <RxCross2 size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
