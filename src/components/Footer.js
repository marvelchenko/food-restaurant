import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white  mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 ">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-amber-500 text-xl pb-4">Eat & Smile</h1>
          <p className="text-sm">
            Eating delicious food" means to be enjoying a meal that is very
            tasty, flavorful, and pleasurable to eat; essentially, savoring a
            meal that is highly appealing to your taste buds.
          </p>
        </div>
        <div className="">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-amber-500 transition-all" href="/">Dishes</a>
            <a className="hover:text-amber-500 transition-all" href="/">About</a>
            <a className="hover:text-amber-500 transition-all" href="/">Menu</a>
            <a className="hover:text-amber-500 transition-all" href="/">Reviews</a>
          </nav>
        </div>
        <div className="">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-amber-500 transition-all" href="/">Our Dishes</a>
            <a className="hover:text-amber-500 transition-all" href="/">Premium Menu</a>
          </nav>
        </div>
        <div className="">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a className="hover:text-amber-500 transition-all" href="/">eat-smile@gmail.com</a>
            <a className="hover:text-amber-500 transition-all" href="/">07062151904</a>
           <div>
           <a className="hover:text-amber-500 transition-all" href="/">Social Media
           </a>
           <div className="flex gap-5">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
           </div>
           </div>
          </nav>
        </div>
      </div>
      <div className="text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Developed by <span className="font-semibold text-amber-500">Marvelous Egor</span>. All rights reserved.
      </p>
      </div>
    </div>
  );
};

export default Footer;
