import React from "react";

function Better() {
  return (
    <div className="flex justify-between gap-10 items-center section_padding mt-10 flex-col laptop:flex-row ">
      <div className="flex flex-col gap-10 laptop:w-1/2 order-2">
        <h1 className="text-white text-3xl tablet:text-5xl font-bold">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-[#ffffff96] text-lg">
          We consider the payment methods you'll offer your customers when you
          start your business. This is an important part of managing your
          business cash flow and meeting your customer's needs.
        </p>
        <div className="flex gap-5 ">
          <button className="px-6 py-3 tablet:px-10 tablet:py-5 rounded-lg gradient_color w-fit text-black">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center order-1 laptop:order-2 laptop:w-1/2">
        <img src="/card.af071def.png" alt="" />
      </div>
    </div>
  );
}

export default Better;
