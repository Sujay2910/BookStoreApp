import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
     <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}
      >✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
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
        {...register("pass", { required: true })}

        /><br/>
        {errors.pass && <span  className='text-sm text-red-500'>This field is required</span>}<br/>
   
    </div>
    <div className='flex justify-around mt-6'>
        <button className="btn  btn-secondary">Login</button>
        <p className='mt-3'>Not Registered? 
            <Link to='/signup' className='underline text-blue-400 hover:cursor-pointer'> Signup </Link>{" "}</p>
        
        
    </div>
   </form> 
  </div>
</dialog>
</div>
  )
}

export default Login