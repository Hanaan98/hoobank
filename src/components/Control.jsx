import React from "react";

function Control() {
  return (
    <div
      className="flex justify-between items-center section_padding mt-10 flex-col laptop:flex-row gap-10 laptop:gap-0"
      id="product"
    >
      <div className="flex gap-2 items-center laptop:w-1/2">
        <img src="/bill.fd47dad8.png" alt="" />
      </div>
      <div className="flex flex-col gap-10 laptop:w-1/2">
        <h1 className="text-white text-3xl tablet:text-5xl font-bold">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-[#ffffff96] text-lg">
          We consider the payment methods you'll offer your customers when you
          start your business. This is an important part of managing your
          business cash flow and meeting your customer's needs.
        </p>
        <div className="flex gap-5 ">
          <img src="/apple.994d47a8.svg" alt="" />
          <img src="/google.3035153f.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Control;
