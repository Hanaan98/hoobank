import React from "react";

function Hero() {
  return (
    <div className="pl-[2rem] flex items-center flex-col laptop:flex-row laptop:pl-[6rem] gap-10 laptop:gap-0">
      <div className="flex flex-col gap-12 pr-[2rem] laptop:pr-0">
        <div className="flex text-[#ffffff96] items-center  gap-2 tab_color rounded-lg  w-fit px-8 py-3 mx-auto tablet:w-4/5 laptop:w-fit laptop:mx-0">
          <img src="/Discount.61d9dc08.svg" alt="" />
          <h1 className="text-xs tablet:text-base">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </h1>
        </div>

        <div className="flex flex-col gap-5 laptop:flex-row laptop:gap-0 items-center">
          <h1 className="text-white text-xl tablet:text-6xl font-bold laptop:text-7xl text-center laptop:text-left ">
            The Next <span className="font_color">Generation</span> Payment
            Method.
          </h1>
          <div className="">
            <h1 className="font_color container border border-[#33bbcf] text-xs">
              Get
              <img src="/arrow-up.012ff21b.svg" alt="" />
              Started
            </h1>
          </div>
        </div>

        <p className="text-[#ffffff96] text-md text-center tablet:text-lg laptop:text-left laptop:w-3/4">
          Our team of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="">
        <img src="/robot.352cd501.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
