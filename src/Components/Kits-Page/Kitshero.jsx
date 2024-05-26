import React from "react";
import bg from '../../Assets/kits/Sedonc-bg.jpg'
import ez from '../../Assets/Nouveau dossier/background_store.png'
import p1 from '../../Assets/Nouveau dossier/99/1.jpg'
import h1 from '../../Assets/kits/homekit.jpg'
const Kitshero = () => {
  return (
    <div className="relative min-h-fit">
      <img src={ez} alt=""  className="w-full h-full object-top block !absolute object-cover z-0"/>
      <div className="py-8 px-6 flex justify-center items-center sm:p-16">
        <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto">
          <div className="w-full sm:px-0 sm:pb-0 max-w-3xl px-6">
            <div className="shadow-lg rounded-lg">
              <div className="md:p-8 p-6 rounded-lg grid justify-items-start items-center md:items-start relative text-start backdrop-blur">
                <div className="rounded-lg absolute top-0 left-0 w-full h-full z-0 name hexCode"></div>
                <div className="md:text-4xl text-3xl font-bold pb-4 text-center sm:text-start w-full mb-2 z-10 name hexCode">
                  <h1 className="block antialiased tracking-tight font-sans text-3xl lg:text-4xl  leading-tight  font-bold">
                    Etoile Sportive du Sahel Jerseys 23/24
                  </h1>
                </div>
                <div className="mx-auto lg:mx-0 mt-0 md:text-xl text-lg z-10 text-start w-full name hexCode">
                  <div className="text-sm pt-0 sm:text-start text-center line-clamp-3">
                    <p className="antialiased font-primary font-normal leading-tighter tracking-tight text-inherit text-base md:text-base !leading-6 [&>p]:font-semibold">
                      Introducing the official kits worn by ESS players. For men, women, and youth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden sm:mb-0 -mb-10 order-first w-60 h-60  sm:-me-16">
            <img
              alt="Etoile Sportive Du Sahel Jerseys 23/24"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={bg}
              className="rounded sm:block hidden"
            />
            <img
              alt="Etoile Sportive Du Sahel Jerseys 23/24"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="rounded sm:hidden block"
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:space-x-8 md:space-y-0 space-y-4 lg:p-16 px-4 py-8">
        <div className="md:w-1/2 rounded-md relative">
          <a href="">
            <img src={h1} alt="" />
          </a>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 md:gap-6 gap-4">
        <a href="">
          <div className="p-[10px] shadow-productCard bg-white group  grid rounded-lg relative">
            <div className="grid content-center">
              <div className="aspect-square flex flex-col items-center justify-between relative transition-all duration-300  overflow-hidden">
                  <img src={p1} alt="" />
              </div>
            </div>
            <div class="grid content-end"><div class="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full"><div class="flex flex-wrap justify-start h-[50px] w-[90%]"><span class="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 font-primary group-hover:underline leading-6 tracking-tighter sm:text-lg">Mens Home Jersey 23/24 White</span></div><div class="items-center h-[65px] border-t border-gray-200 text-gray-950 font-primary font-bold w-full inline-flex pt-3 "><p class="text-sm py-1 tracking-normal text-gray-700 text-center"></p><span class="flex flex-wrap items-center tracking-normal"><span>€100.00</span></span></div></div></div>
          </div>
          <div className="p-[10px] shadow-productCard bg-white group  grid rounded-lg relative">
            <div className="grid content-center">
              <div className="aspect-square flex flex-col items-center justify-between relative transition-all duration-300  overflow-hidden">
                  <img src={p1} alt="" />
              </div>
            </div>
            <div class="grid content-end"><div class="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full"><div class="flex flex-wrap justify-start h-[50px] w-[90%]"><span class="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 font-primary group-hover:underline leading-6 tracking-tighter sm:text-lg">Mens Home Jersey 23/24 White</span></div><div class="items-center h-[65px] border-t border-gray-200 text-gray-950 font-primary font-bold w-full inline-flex pt-3 "><p class="text-sm py-1 tracking-normal text-gray-700 text-center"></p><span class="flex flex-wrap items-center tracking-normal"><span>€100.00</span></span></div></div></div>
          </div>
          <div className="p-[10px] shadow-productCard bg-white group  grid rounded-lg relative">
            <div className="grid content-center">
              <div className="aspect-square flex flex-col items-center justify-between relative transition-all duration-300  overflow-hidden">
                  <img src={p1} alt="" />
              </div>
            </div>
            <div class="grid content-end"><div class="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full"><div class="flex flex-wrap justify-start h-[50px] w-[90%]"><span class="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 font-primary group-hover:underline leading-6 tracking-tighter sm:text-lg">Mens Home Jersey 23/24 White</span></div><div class="items-center h-[65px] border-t border-gray-200 text-gray-950 font-primary font-bold w-full inline-flex pt-3 "><p class="text-sm py-1 tracking-normal text-gray-700 text-center"></p><span class="flex flex-wrap items-center tracking-normal"><span>€100.00</span></span></div></div></div>
          </div>
        </a>

      </div>
      </div>
      
    </div>
  );
};

export default Kitshero;