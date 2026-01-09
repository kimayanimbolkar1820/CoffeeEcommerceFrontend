import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import { MdCoffeeMaker } from "react-icons/md";
import { GiCoffeeMug } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";

const Categories = () => {
  const categaries = [
    {
      name: "Coffee",
      icon: <SiBuymeacoffee />,
    },
    {
      name: "Machines",
      icon: <MdCoffeeMaker />,
    },
    {
      name: "Accessories",
      icon: <GiCoffeeMug />,
    },
  ];
  return (
    <div className="bg-[#0f0f0f]">
      <h1 className="md:text-4xl text-white text-3xl font-cinzel text-center font-bold pt-10 ">
        Top Categories
      </h1>
      <p className="font-playfair text-gray-300 text-center text-[16px] md:text-[18px] pt-2">
        Find your perfect brew, one category at a time.
      </p>
      <div>
        <ul className="flex md:gap-10 gap-5 justify-center">
          {categaries.map((item, i) => (
            <li key={i}>
              <div className="pt-10 flex flex-col items-center  ">
                <div className="relative flex items-center justify-center">
                  <FaCircle className="md:text-8xl text-6xl text-[#6b4b31]" />

                  <span className="absolute md:text-5xl text-3xl text-[#d2b99c]">
                    {item.icon}
                  </span>
                </div>
                <p className="text-white font-playfair pt-2 text-[16px] text-center">
                  {item.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
