import React from 'react';
import bg from '../../Assets/Nouveau dossier/background_page.jpg';

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="h-[550px] md:h-auto">
        {/* Desktop Hero Image */}
        <img
          alt="Desktop Hero Header Image"
          loading="lazy"
          decoding="async"
          className="w-auto min-h-[820px] hidden md:block absolute inset-0 object-cover shadow-md"
          src={bg}
          sizes="100vw"
        />
        {/* Mobile Hero Image */}
        <img
          alt="Mobile Hero Header Image"
          loading="lazy"
          decoding="async"
          className="w-auto max-h-[550px] block md:hidden absolute inset-0 object-cover shadow-md"
          src={bg}
          sizes="100vw"
        />
      </div>
      <div className="absolute top-12 w-max h-max mx-auto flex flex-col justify-end md:justify-center items-center md:items-start p-4 md:p-12">
        <a href="">
          <div className=" p-6 rounded-lg w-full md:w-[400px] min-w-min grid justify-items-start  items-center md:items-start relative text-start backdrop-blur bg-white bg-opacity-30">
            <h1 className="text-3xl md:text-7xl font-bold text-red-800 mb-2">
                99 ANS
            </h1>
            <p className="text-lg md:text-xl text-black">
              Limited Edition
            </p>
            <div className="mt-28 flex w-full justify-start">
              <button className="w-25 h-12 text-black bg-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-400 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Shop now
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
