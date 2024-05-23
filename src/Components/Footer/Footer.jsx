import React from "react";
import PaymentIcons from "./PaymentIcons";
import Smicons from "./SmIcons";

const Footer = () => {
  return (
    <footer className="bg-red-100">
      <div className="px-8 mx-auto">
        <div className="hidden px-8 pt-16 pb-7 desktop-menu justify-around md:flex w-full">
          <div className="md:flex md:py-7 overflow-x-hidden w-max">
            <div className="mt-12 md:mt-0">
              <h4
                placeholder=""
                className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold"
              >
                Shop
              </h4>
              <ul role="list" className="mt-1 space-y-1">
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    How to Order
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Shipping &amp; Returns
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Track My Order
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    My Account
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Shop Locator
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:py-7 overflow-x-hidden w-max">
            <div className="mt-12 md:mt-0">
              <h4
                placeholder=""
                className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold"
              >
                About
              </h4>
              <ul role="list" className="mt-1 space-y-1">
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:py-7 overflow-x-hidden w-max">
            <div className="mt-12 md:mt-0">
              <h4
                placeholder=""
                className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold"
              >
                Do You Need Help?
              </h4>
              <ul role="list" className="mt-1 space-y-1">
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
                <li className="me-8">
                  <a
                    className="text-sm text-black  hover:underline "
                    href=""
                  >
                    FAQS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-fit inline-block md:py-7">
            <div className="pl-16">
              <div className="justify-items-start bg-gray-200 rounded-lg lg:w-max p-6 font-bold">
                <p
                  placeholder=""
                  className="antialiased font-primary text-base leading-tighter tracking-tight text-inherit font-semibold"
                >
                  Become a ETOILISTE
                </p>
                <p
                  placeholder=""
                  className="block antialiased text-base md:text-base leading-relaxed text-inherit py-2 pb-4 font-semibold font-primary"
                >
                  Sign up and receive 5% off your first purchase
                </p>
                <a href="">
                  <button
                    className=" w-full h-auto rounded-3xl bg-white text-red-600"
                    type="button"
                  >
                    Sign up now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:px-14 px-4">
        <div className="hidden md:flex flex-col justify-start md:pb-6 sm:pb-0 pt-4 sm:pt-0">
          <div className="grid w-full">
            <p className="antialiased font-primary leading-tighter tracking-tight text-inherit text-base justify-start text-center sm:text-start sm:text-lg font-bold pl-1 py-2 sm:pb-0">
              Payments Accepted
            </p>
            <PaymentIcons/> 
            <Smicons/> 
            <div class="flex py-8 justify-center">
              <a class="text-xs flex-1 text-black font-primary" href="">
                ESS STORE © 2024 All Rights Reserved
              </a>
            </div>
          </div>
        </div>
      </div>  
      </div>
    </footer>
  );
};
export default Footer;
