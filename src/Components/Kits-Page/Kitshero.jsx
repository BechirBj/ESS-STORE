import React from "react";
import ez from '../../Assets/Nouveau dossier/background_store.png'
import h1 from '../../Assets/kits/home3.jpg'
import KitsCard from "./KitsCard";
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

      <div className="flex gap-4 flex-wrap w-[850px]">
        <KitsCard className=""/>
      </div>
    </div>
      
    </div>
  </div>  
  );
};

export default Kitshero;