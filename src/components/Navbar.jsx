import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between section_padding relative">
      <div>
        <Image
          src="/logo.efc6c435 (1).svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <div className="hidden tablet:block">
        <ul className="flex gap-10 text-white ">
          <Link href="#home" onClick={handleScroll} className="menu_color">
            <li>Home</li>
          </Link>
          <Link href="#features" onClick={handleScroll} className="menu_color">
            <li>Features</li>
          </Link>
          <Link href="#product" onClick={handleScroll} className="menu_color">
            <li>Product</li>
          </Link>
          <Link href="#clients" onClick={handleScroll} className="menu_color">
            <li>Clients</li>
          </Link>
        </ul>
      </div>
      <div className="tablet:hidden">
        {toggle ? (
          <div>
            <FontAwesomeIcon
              icon={faBars}
              className={`text-white tablet:hidden ${
                toggle ? "fade-in active" : "fade-in"
              }`}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faClose}
              className={`text-white tablet:hidden ${
                toggle ? "fade-in" : "fade-in active"
              }`}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        )}
      </div>
      {!toggle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute right-12 top-12 bg-black-gradient-2 rounded-lg tablet:hidden"
        >
          <div className="">
            <ul className="flex gap-5 text-white flex-col  px-8 py-6 ">
              <Link href="#home" onClick={handleScroll} className="menu_color">
                <li>Home</li>
              </Link>
              <Link
                href="#features"
                onClick={handleScroll}
                className="menu_color"
              >
                <li>Features</li>
              </Link>
              <Link
                href="#product"
                onClick={handleScroll}
                className="menu_color"
              >
                <li>Product</li>
              </Link>
              <Link
                href="#clients"
                onClick={handleScroll}
                className="menu_color"
              >
                <li>Clients</li>
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
