import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import ProductCard from '../components/ProductCard'
import Contact from '../components/forms/Contact'
import EmailAlerts from '../components/forms/EmailAlerts'

const Home = () => {
  //testing api
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  console.log(message);
  //end testing api

  return (
    <div>
      {/* navbar ssection */}
      <Navbar></Navbar>  
      {/* home banner section */}
      <div id='homeBanner' className='bg-[url(https://placehold.co/600x400)] h-[300px] flex flex-col justify-between items-center py-10'>
        <div>
          {message}
        </div>
        <div>
          <span className='text-3xl bold'>Working on USERS_TEST branch!!</span>
        </div>
        <a href='/' className='p-4 bg-stone-500 text-white font-thin cursor-pointer'>action button</a>
      </div>
      <hr />

      {/* Home products intro section */}
      <div className='flex flex-col py-10 items-center'>
        <div id='prodHomeTitle' className='flex flex-col gap-5 items-center'>
          <div>content</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis optio itaque eius!</div>
          <a href="#" id='actionButton' className='bg-stone-900 text-white p-2'>Secondary button</a>
        </div>
      </div>
      <hr />

      {/* home products showcase */}
      <div id='productsSlider' className='w-full flex justify-between items-center gap-3 my-5 p-4'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <hr />


      {/* summary of page section */}
      <div className='my-7 flex justify-center items-center gap-10'>
        <div className='w-[300px] h-[500px] bg-red-200'>
          <img src="#" alt="home_image" /> 
        </div>
        <div className='flex flex-col justify-between gap-5 w-[500px] h-full'>
          <h2>Summary</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur officiis dolore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur officiis dolore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur officiis dolore.</p>
          <button></button>
        </div>
      </div>
      <hr />


      {/* make order section */}
        <div className='py-10 flex flex-col items-center gap-5'>
          <div id='orderHeading'>
            <h2 className='text-2xl'>Make order</h2>
          </div>
          <div className='flex flex-col gap-5 flex-wrap justify-center'>
            <div id='orderCard' className='border w-[200px] h-[200px] border p-5 flex flex-col gap-3'>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, nobis unde. Aut.</span>
            </div>
            <div id='orderCard' className='border w-[200px] h-[200px] border p-5 flex flex-col gap-3'>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, nobis unde. Aut.</span>
            </div>
            <div id='orderCard' className='border w-[200px] h-[200px] border p-5 flex flex-col gap-3'>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, nobis unde. Aut.</span>
            </div>
            <div id='orderCard' className='border w-[200px] h-[200px] border p-5 flex flex-col gap-3'>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, nobis unde. Aut.</span>
            </div>
          </div>
        </div>
        <hr />


        {/* Contact section */}
        <div className='py-10'>
          <Contact></Contact>
        </div>
        <hr />

        {/* emai alert section */}
        <div className='py-10'>
          <EmailAlerts></EmailAlerts>
        </div>

      
    </div>
  )
}

export default Home
