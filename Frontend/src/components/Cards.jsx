import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 ml-4 p-2'>
        <div className="card bg-base-90 w-90 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src="../../public/Card.jpg"
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer p-2 border-2px hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
    
  )
}

export default Cards