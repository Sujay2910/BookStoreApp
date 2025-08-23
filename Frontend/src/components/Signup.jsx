import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    
    <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
    <div  className="">
    <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className=" ml-60 font-bold " >✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-6'>
        <span className='font-semibold'>Name</span><br/>
        <input type="text" className="input outline-none mt-4 ml-2" placeholder="Enter your full name" 
        {...register("Name", { required: true })}
        /><br/>
        {errors.Name && <span className='text-sm text-red-500'>This field is required</span>}<br/>
        
    </div>
    
    <div className='mt-6'>
        <span className='font-semibold'>Email</span><br/>
        <input type="email" className="input outline-none mt-4 ml-2" placeholder="Enter your email" 
         {...register("Email", { required: true })}
        /><br/>
        {errors.Email && <span className='text-sm text-red-500'>This field is required</span>}<br/>
        
    </div>
    <div className='mt-6'>
        <span className='mt-6 font-semibold'>Password</span><br/>
        <input type="password" className="input mt-4 ml-2" placeholder="Enter your password" 
         {...register("Pass", { required: true })}
        /><br/>
        {errors.Pass && <span className='text-sm text-red-500'>This field is required</span>}<br/>
        
    </div>
    <div className='flex justify-around mt-6'>
        <button className="btn  btn-secondary">Signup</button>
        <p className='mt-3 ml-3'>Have Account? 
            <button className='underline text-blue-400 hover:cursor-pointer'
            onClick={()=> document.getElementById("my_modal_3").showModal()}
            > Login </button>
           <Login/>
            </p>
        
         
    </div>
    </form>
  </div>

    </div>
    </div>
    
  )
}

export default Signup