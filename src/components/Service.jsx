import React from "react";

function Service() {
  return (
    <div className=" section_padding mt-10">
      <div className="flex justify-between laptop:items-center bg-black section_padding rounded-2xl bg-black-gradient-2 flex-col laptop:flex-row gap-10 laptop:gap-0">
        <div className="flex flex-col gap-10 ">
          <h1 className="text-white text-3xl tablet:text-5xl font-bold">
            Come try our service now!
          </h1>
          <p className="text-[#ffffff96] text-lg laptop:w-3/4">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="laptop:w-1/3 laptop:text-right">
          <button className="px-6 py-3 tablet:px-10 tablet:py-5 rounded-lg gradient_color w-fit text-black ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
