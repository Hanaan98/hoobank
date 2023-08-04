import React from "react";

function Features() {
  return (
    <div
      className="flex justify-between gap-10 section_padding items-center mt-10 flex-col laptop:flex-row  laptop:gap-0"
      id="features"
    >
      <div className="flex flex-col laptop:w-1/2 gap-10">
        <h1 className="text-white text-3xl tablet:text-5xl font-bold">
          You do the business, we'll handle the money.
        </h1>
        <p className="text-[#ffffff96] text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="px-6 py-3 tablet:px-10 tablet:py-5 rounded-lg gradient_color w-fit text-black">
          Get Started
        </button>
      </div>
      <div className="flex flex-col gap-8 laptop:w-1/2">
        <div className="flex gap-4 feature_tab_color items-center justify-center px-3 py-3 laptop:px-6 laptop:py-6 rounded-3xl">
          <div className="px-4 py-4 rounded-full bg-[#071720]">
            <img src="/Star.b8bf87ea.svg" alt="" className="w-20 laptop:w-10" />
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-lg">Rewards</h1>
            <p className="text-[#ffffff96] text-base">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        <div className="flex gap-4 feature_tab_color  items-center justify-center px-3 py-3 laptop:px-6 laptop:py-6 rounded-3xl">
          <div className="px-4 py-4 rounded-full bg-[#071720]">
            <img
              src="/Shield.6d9e87e5.svg"
              alt=""
              className="w-20 laptop:w-10"
            />
          </div>

          <div className="">
            <h1 className="text-white font-semibold text-lg">100% Secured</h1>
            <p className="text-[#ffffff96] text-base">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        <div className="flex gap-4 feature_tab_color  items-center justify-center px-3 py-3 laptop:px-6 laptop:py-6 rounded-3xl">
          <div className="px-4 py-4 rounded-full bg-[#071720]">
            <img src="/Send.454b3199.svg" alt="" className="w-20 laptop:w-10" />
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-lg">
              Balance Transfer
            </h1>
            <p className="text-[#ffffff96] text-base">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
