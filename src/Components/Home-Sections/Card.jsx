import React from 'react'
import Stars from '../../Assets/Home-Section/Stars.png'
import pic1 from '../../Assets/Home-Section/Top-Sellers/1.jpg'

const Card = () => {
  return (
    <div className='m-5 flex flex-col bg-gray-100 w-max h-max rounded-3xl '>
      <div className='p-6 '>
        <img src={pic1} alt="" className='w-72 h-72 rounded-3xl '/>
            <h2 className='text-2xl m-2'>
            SWEAT A CAPUCHE ZIPPE
            </h2>
        <div className='flex flex-col m-1'>      

            <div className=' flex content-start gap-2 items-center'>
                <img src={Stars} alt="" className='w-24 h-8'/>
                    <p> 5.0 / <span className=' text-gray-400'> 5 </span>
                </p>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='font-bold '>
                    150 DT
                </p>
                <p className='line-through'>
                    189 DT   
                </p>
                <p className='w-14 h-8 bg-red-100 flex text-red-600 rounded-3xl content-center justify-center items-center '>
                    -20%
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
