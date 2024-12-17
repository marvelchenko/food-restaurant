import React from "react";
import DishCard from "../layouts/DishCard";
import img1 from "../assets/edeSoup.jpg";
import img2 from "../assets/egusiSoup.jpg";
import img3 from "../assets/afangSoup.jpg";
import img4 from "../assets/ofe-akwu.png";
import img5 from "../assets/friedRice.jpg";
import img6 from "../assets/jollofRice.jpg";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishCard img={img1} title="Ede Soup" price="₦5,000" />
        <DishCard img={img2} title="Egusi Soup" price="₦6,000" />
        <DishCard img={img3} title="Afang Soup" price="₦6,000" />
        <DishCard img={img4} title="Ofe-Akwu - Banga Soup" price="₦4,000" />
        <DishCard img={img5} title="Fried Rice" price="₦6,000" />
        <DishCard img={img6} title="Jollof Rice" price="₦7,000" />
      </div>
    </div>
  );
};

export default Dishes;
