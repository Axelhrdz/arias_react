import React from 'react'

const Navbar = () => {
  return (
    <div className='navBar flex justify-between gap-4 bg-stone-900 text-white text-xl p-4'>
      <div className='child1 flex'>
        <div className='logo'>logo here</div>
        <div className='textLogo'>logo here</div>
      </div>
      <div className='child2 flex gap-4'>
        <div>options</div>
        <div>options</div>
        <div>options</div>
      </div>
      <div className='child3'>
        <div>hamburger menu</div>
      </div>
    </div>
  )
}

export default Navbar
