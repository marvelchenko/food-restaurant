import React from "react";
import Button from "../layouts/Button";
import { data } from "../components/ImgData";

const Home = () => {
  return (
    <div
      className="min-h-screen flex gap-4 flex-col  md:flex-col justify-center text-white  items-center lg:px-32 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${data[0].homeBg})` }}
    >
      <div className="text-center bg-black bg-opacity-25 w-full lg:w-2/3 space-y-5">
        <h1 className="text-wtite-300 font-semibold text-6xl">Elevate your foodie with bite</h1>
        <p className="text-white-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div> 
      <Button title="Order Now" />
    </div>
  );
};

export default Home;
