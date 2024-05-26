import React from 'react'
import Navbar from '../Components/Header/navbar'
import Footer from '../Components/Footer/Footer'
import Kitshero from '../Components/Kits-Page/Kitshero'

const Kits = () => {
  return (
    <div>
    <Navbar/>
    <div className='relative min-h-fit'>
      <div className='w-full h-96 relative'>
          <div>
            <Kitshero/>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Kits
