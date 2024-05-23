import React from "react";
import bg from '../../Assets/kits/Sedonc-bg.jpg'
import ez from '../../Assets/Nouveau dossier/background_store.png'
const Kitshero = () => {
  return (
    <div className="relative min-h-fit">
      <img src={ez} alt=""  className="w-full min-h-full h-full object-top block !absolute object-cover z-0"/>
      <div className="py-8 px-6 flex justify-center items-center sm:p-16">
        <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto">
          <div className="w-full sm:px-0 sm:pb-0 max-w-3xl px-6">
            <div className="shadow-lg rounded-lg">
              <div className="md:p-8 p-6 rounded-lg grid justify-items-start items-center md:items-start relative text-start backdrop-blur">
                <div className="rounded-lg absolute top-0 left-0 w-full h-full z-0 name hexCode"></div>
                <div className="md:text-4xl text-3xl font-bold pb-4 text-center sm:text-start w-full mb-2 z-10 name hexCode">
                  <h1 className="block antialiased tracking-tight font-sans text-3xl lg:text-4xl xl:text-5xl leading-tight text-inherit font-bold">
                    Etoile Sportive du Sahel Jerseys 23/20
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
    </div>
  );
};

export default Kitshero;