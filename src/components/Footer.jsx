import React from "react";

function Footer() {
  return (
    <div className="section_padding flex flex-col gap-10 mt-10">
      <div className="grid grid-cols-2 gap-10 laptop:grid-cols-5 justify-between">
        <div className="col-span-2">
          <img src="/logo.efc6c435.svg" alt="" />
          <h1 className="text-[#ffffff96] text-lg mt-3 laptop:w-3/4">
            A new way to make payments easy, reliable and secure.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl">Useful Links</h1>
          <ul className="flex flex-col gap-3 text-[#ffffff96] text-md">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl">Community</h1>
          <ul className="flex flex-col gap-3 text-[#ffffff96] text-md">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl">Partner</h1>
          <ul className="flex flex-col gap-3 text-[#ffffff96] text-md">
            <li>Our Partner</li>
            <li>Become a partner</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-10">
          <hr />
          <div>
            <h1 className="text-white text-sm tablet:text-md">
              2022 HooBank. All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
