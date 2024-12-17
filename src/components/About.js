import React from "react";
import aboutImg from "../assets/ofe-akwu.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 lg:flex-row justify-center items-center lg:px-32 px-5 p-4">
      <img className="rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" src={aboutImg} alt="about" />
      <div className=" space-y-4 lg:pt-14 ">
        <h3 className="font-semibold text-4xl text-center md:text-start">Why Choose Us</h3>
        <p>
          it look like readable English. Many desktop publishing packages and
          web page editors now use Lorem Ipsum as their default model text, and
          a search for 'lorem ipsum' will uncover many web sites still in their
          infancy. 
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className="flex justify-center lg:justify-start">
        <Button title="Learn More" />
      </div>
      </div>
      
    </div>
  );
};

export default About;
