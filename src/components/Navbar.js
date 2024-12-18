import React, { useState } from "react";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] ">
          <div className="flex flex-row items-center cursor-pointer">
          <span>
              <BiRestaurant size={32} className='text-amber-500' />
            </span>
            <h1 className="text-xl font-semibold">Eat & Smile</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-500 transition-all cursor-pointer"
            >
              Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-amber-500 transition-all cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg flex-row p-5 ">
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Spicy
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Cripsy
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-500 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-500 transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-500 transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Button title="login" />
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuFold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-15 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
             <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-amber-500 transition-all cursor-pointer"
            >
              Home
            </Link>
         <div className="relative group">
              <div className="flex justify-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-amber-500 transition-all cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border text-black border-gray-300 rounded-lg flex-row ml-32 p-5">
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Spicy
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li className="hover:border-b-2 hover:border-amber-500">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" hover:text-amber-500 transition-all cursor-pointer"
                  >
                    Cripsy
                  </Link>
                </li>
              </ul>
            </div>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-amber-500 transition-all cursor-pointer"
          >
            Spicy
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-amber-500 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-amber-500 transition-all cursor-pointer"
          >
            Menu
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-amber-500 transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Button title="login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
