import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/manImg.jpg";
import img2 from "../assets/lady.jpg";
import img3 from "../assets/man2.jpg";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Emmanuel Prince" />
        <ReviewCard img={img2} name="Jennier Obioze" />
        <ReviewCard img={img3} name="Thankgod Chukwu" />
      </div>
    </div>
  );
};

export default Review;
