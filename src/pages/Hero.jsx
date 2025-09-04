import React from 'react'
import Navbar from '../components/common/Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='w-64 h-64 bg-red-500 flex justify-center items-center'>
          <h1>Hero Page
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
