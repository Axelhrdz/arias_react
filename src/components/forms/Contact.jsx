import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center gap-5 my-10'>
        <div>
            <h3 className='text-2xl'>Ask for our products</h3>
        </div>
      <form action="" id='contactForm' className='border flex flex-col gap-3 p-5'>
        <div className='flex flex-col gap-1'>
            <label htmlFor="name">Nombre</label>
            <input className='border' type="text" name="name" id="name" />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Correo electornico</label>
            <input className='border' type="email" name="email" id="email" />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="message">Mensaje</label>
            <input className='border' type="text" name="message" id="message" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
