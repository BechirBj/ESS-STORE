import React from "react";
import bg from '../../Assets/kits/Sedonc-bg.jpg'
import ez from '../../Assets/Nouveau dossier/background_store.png'
import p1 from '../../Assets/Nouveau dossier/99/1.jpg'
import h1 from '../../Assets/kits/homekit.jpg'
const Kitshero = () => {
  return (

  <div>
    <div className="">
      <div className="relative py-32 px-6 flex justify-center items-center sm:p-16" style={{ backgroundImage: `url(${ez})`, padding:100 ,backgroundSize: 'cover', backgroundPosition: 'top' }}>
        <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto relative z-10">
          <div className="w-full sm:px-0 sm:pb-0 max-w-3xl px-6">
            <div className="shadow-lg rounded-lg">
              <div className="md:p-8 p-6 rounded-lg grid justify-items-start items-center md:items-start relative text-start backdrop-blur bg-white/40">
                <div className="md:text-4xl text-3xl font-bold pb-4 text-center sm:text-start w-full mb-2 z-10 name hexCode">
                  <h1 className="block antialiased tracking-tight font-sans text-3xl lg:text-4xl leading-tight font-bold">
                    Etoile Sportive du Sahel Jerseys 23/24
                  </h1>
                </div>
                <div className="mx-auto lg:mx-0 mt-0 md:text-xl text-lg z-10 text-start w-full name hexCode">
                  <div className="text-sm pt-0 sm:text-start text-center line-clamp-3">
                    <p className="font-primary font-normal leading-tighter tracking-tight text-inherit text-base md:text-base !leading-6 [&>p]:font-semibold">
                      Introducing the official kits worn by ESS players. For men, women, and youth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <div className="p-12 flex gap-5">
      <div className="flex-1 flex justify-center items-center">
        <a href="">
          <img src={h1} alt="" className="w-[1000px] h-[1250px] rounded-lg" />
        </a>
      </div>

      <div className="flex gap-4 flex-wrap">
        <a href="" className="p-2 w-[301px] h-[415px] bg-white grid rounded-lg relative shadow-md">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-3xl flex flex-col items-center justify-between relative overflow-hidden transition-all duration-300">
              <img src={bg} alt="" />
            </div>
          </div>
          <div className="flex items-end justify-center">
            <div className="text-gray-950 px-1 py-1 flex flex-col justify-end gap-3 w-full">
              <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter text-lg">
                  Mens Home Jersey 23/24 White
                </span>
              </div>
              <div className="inline-flex items-center h-[65px] border-t border-gray-200 font-bold w-full pt-3">
                <p className="text-sm py-1 tracking-normal text-center text-gray-700"></p>
                <span className="flex flex-wrap items-center tracking-normal">
                  <span>70 DT</span>
                </span>
              </div>
            </div>
          </div>
        </a>
        <a href="" className="p-2 w-[301px] h-[415px] bg-white grid rounded-lg relative shadow-md">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-3xl flex flex-col items-center justify-between relative overflow-hidden transition-all duration-300">
              <img src={bg} alt="" />
            </div>
          </div>
          <div className="flex items-end justify-center">
            <div className="text-gray-950 px-1 py-1 flex flex-col justify-end gap-3 w-full">
              <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter text-lg">
                  Mens Home Jersey 23/24 White
                </span>
              </div>
              <div className="inline-flex items-center h-[65px] border-t border-gray-200 font-bold w-full pt-3">
                <p className="text-sm py-1 tracking-normal text-center text-gray-700"></p>
                <span className="flex flex-wrap items-center tracking-normal">
                  <span>70 DT</span>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
      
    </div>
  </div>  
  );
};

export default Kitshero;