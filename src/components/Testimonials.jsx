import React from "react";

function Testimonials() {
  return (
    <div className="section_padding flex flex-col gap-10 mt-10 " id="clients">
      <div className="flex justify-between laptop:items-center flex-col laptop:flex-row gap-10 ">
        <h1 className="text-white font-bold text-3xl tablet:text-5xl">
          What people are saying about us
        </h1>
        <p className="text-[#ffffff96] text-lg">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex gap-5 flex-col laptop:flex-row">
        <div className="flex flex-col gap-5 feature_tab_color p-5 rounded-xl laptop:w-1/3">
          <img src="/quotes.a87d5e6d.svg" alt="" className="w-10" />
          <h1 className="text-white text-lg laptop:text-2xl">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </h1>
          <div className="flex gap-5">
            <img
              src="/people01.a772086b.png"
              alt=""
              className="w-14 laptop:w-20 object-cover"
            />
            <div>
              <h1 className="text-white text-md laptop:text-xl">
                Herman Jensen
              </h1>
              <p className="text-[#ffffff96] text-md laptop:text-lg">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 feature_tab_color p-5 rounded-xl laptop:w-1/3">
          <img src="/quotes.a87d5e6d.svg" alt="" className="w-10" />
          <h1 className="text-white text-lg laptop:text-2xl">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </h1>
          <div className="flex gap-5">
            <img
              src="/people02.ee8ce82b.png"
              alt=""
              className="w-14 laptop:w-20 object-cover"
            />
            <div>
              <h1 className="text-white text-md laptop:text-xl">
                Herman Jensen
              </h1>
              <p className="text-[#ffffff96] text-md laptop:text-lg">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 feature_tab_color p-5 rounded-xl laptop:w-1/3">
          <img src="/quotes.a87d5e6d.svg" alt="" className="w-10" />
          <h1 className="text-white text-lg laptop:text-2xl">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </h1>
          <div className="flex gap-5">
            <img
              src="/people03.d9f4f98a.png"
              alt=""
              className="w-14 laptop:w-20 object-cover"
            />
            <div>
              <h1 className="text-white text-md laptop:text-xl">
                Herman Jensen
              </h1>
              <p className="text-[#ffffff96] text-md laptop:text-lg">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
