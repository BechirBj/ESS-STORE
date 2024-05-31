import React from 'react'
import Kits from '../../Assets/Data/Jerseys/Kits'


const KitsCard = () => {
  return (
    <div className='flex gap-4 flex-wrap w-[850px] pl-28'>
        {Kits.map((kit) => (
            <a  key={kit.id}  href="" className="p-2 w-[301px] h-[415px] bg-white grid rounded-lg relative shadow-md">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-3xl flex flex-col items-center justify-between relative overflow-hidden transition-all duration-300">
                <img src={kit.img} alt={kit.name}  className='w-[250px]'/>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <div className="text-gray-950 px-1 py-1 flex flex-col justify-end gap-3 w-full">
                <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                  <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter text-lg">
                    {kit.name}
                  </span>
                </div>
                <div className="inline-flex items-center h-[65px] border-t border-gray-200 font-bold w-full pt-3">
                  <p className="text-sm py-1 tracking-normal text-center text-gray-700"></p>
                  <span className="flex flex-wrap items-center tracking-normal">
                     {kit.price}
                  </span>
                </div>
              </div>
            </div>
          </a>
             
        
        ))}    

    </div>
    



    
  )
}

export default KitsCard
