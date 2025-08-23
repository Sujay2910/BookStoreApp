import React from 'react'
import banner from "../../public/banner.jpg";
function Banner() {
  return (
    <>
    <div className="max-w-screen-2*1 container mx-auto md:px-20 px-4 flex my-10">
        <div className="w-full md:w-1/2 mt-32">
       <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
        <p className='text-xl'>Book Haven is more than an online bookstore; it’s a community for book lovers. Browse thousands of titles across fiction, non-fiction, academic, and children’s genres.</p>
        <label className="input validator">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
            >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
        </svg>
        <input type="email" placeholder="mail@site.com" required />
       </label>
       <div className="validator-hint hidden">Enter valid email address</div>
        </div> 
        <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2">
        <img src={banner} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner