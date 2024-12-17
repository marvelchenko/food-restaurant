import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-gray-300 md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      <div>
        <p className="text-black-200">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem 
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className="font-semibold"> {props.name} </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
