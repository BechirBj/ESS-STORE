import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import Card from '../../Components/Home-Sections/Card';
import bg from '../../Assets/Nouveau dossier/background_page.jpg';
import jerseys from '../../Assets/Data/Jerseys/Jerseys'; // Import the jerseys data

const Section = () => {
  return (
    <div>
      <header className="relative w-full">
        <div className="h-[550px] md:h-auto relative">
          {/* Desktop Hero Image */}
          <img
            alt="Desktop Hero Header Image"
            loading="lazy"
            decoding="async"
            className="w-full h-full hidden md:block object-cover shadow-md"
            src={bg}
            sizes="100vw"
          />
          {/* Mobile Hero Image */}
          <img
            alt="Mobile Hero Header Image"
            loading="lazy"
            decoding="async"
            className="w-full h-full block md:hidden object-cover shadow-md"
            src={bg}
            sizes="100vw"
          />
          <div className="absolute top-12 w-max h-max mx-auto flex flex-col justify-end md:justify-center items-center md:items-start p-4 md:p-12">
            <a href="">
              <div className="p-6 rounded-lg w-full md:w-[400px] min-w-min grid justify-items-start items-center md:items-start relative text-start backdrop-blur bg-white bg-opacity-30">
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
      </header>
      <article>
        <section className="py-12 px-4 md:px-12 bg-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">TRENDING NOW</h1>
          <div className="text-3xl flex justify-center  mb-8 gap-4">        
              <button type="button" className="text-gray-700 py-2.5 px-5 me-2 mb-2 text-xl font-medium bg-white rounded-full border border-gray-200 focus:z-10 dark:focus:ring-0-red-700 dark:text-gray-800 dark:focus:text-red-800 dark:border-gray-600 dark:hover:text-gray-700 dark:hover:bg-gray-200 dark:focus:border-red-800">
                  99 ANS
              </button>
              <button type="button" className="text-gray-700 py-2.5 px-5 me-2 mb-2 text-xl font-medium bg-white rounded-full border border-gray-200 focus:z-10 dark:focus:ring-0-red-700 dark:text-gray-800 dark:focus:text-red-800 dark:border-gray-600 dark:hover:text-gray-700 dark:hover:bg-gray-200 dark:focus:border-red-800">
                  Hoodies
              </button>
              <button type="button" className="text-gray-700 py-2.5 px-5 me-2 mb-2 text-xl font-medium bg-white rounded-full border border-gray-200 focus:z-10 dark:focus:ring-0-red-700 dark:text-gray-800 dark:focus:text-red-800 dark:border-gray-600 dark:hover:text-gray-700 dark:hover:bg-gray-200 dark:focus:border-red-800">
                  Casual
              </button>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {jerseys.map((jersey) => (
              <SwiperSlide key={jersey.id}>
                <a href="">
                  <div className="border rounded-lg overflow-hidden shadow-md">
                    <img src={jersey.imgSrc} alt={jersey.name} className="content-center w-80 h-80 rounded-3xl ml-5" />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{jersey.name}</h2>
                      <p className="text-lg font-medium text-gray-700">{jersey.price}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section>
          <div className='m-14'>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'> 
              Top Selling
            </h1>
          </div>
          <div className='flex flex-wrap justify-center'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Section;
