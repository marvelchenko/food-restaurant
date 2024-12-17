import React from "react";
import img1 from "../assets/edeSoup.jpg";
import img2 from "../assets/egusiSoup.jpg";
import img3 from "../assets/afangSoup.jpg";
import DishCard from "../layouts/DishCard";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:px-32 px-5 min-h-screen">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium Menu</h1>

      <div className="flex flex-wrap justify-center gap-8">
        <DishCard img={img1} title="Ede Soup" price="₦15,000" />
        <DishCard img={img2} title="Egusi Soup" price="₦15,000" />
        <DishCard img={img3} title="Afang Soup" price="₦15,000" />
      </div>
    </div>
  );
};

export default Menu;
