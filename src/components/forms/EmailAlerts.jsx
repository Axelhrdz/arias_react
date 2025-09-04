import React from 'react'

const EmailAlerts = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-5 my-10'>
        <div>
            <h2 className='text-2xl'>Stay tunned to our news!</h2>
        </div>
        <form action="" className='border'>
            <div className='flex flex-col gap-1 p-5'>
                <label htmlFor="emailAlert">Register your email to get news</label>
                <input className='border' type="email" name='emailAlert' id='emailAlert'/>
                <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default EmailAlerts
