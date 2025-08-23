import React from 'react'
import Cards from './Cards'
import List from '../../public/List.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-self-center text-center'>
            <h1 className='text-4xl font-semibold md:text:4xl'> We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12 md:text:4xl'>Our courses are designed to help learners gain practical knowledge and improve their skills in a simple and effective way. From beginner-friendly introductions to advanced topics, we provide a wide range of learning materials that complement our book collection.Each course is carefully curated to ensure quality content, making learning more engaging and accessible.</p>
            <Link to='/'>
            
            <button className="btn mt-6 btn-secondary hover:bg-pink-700 duration-300">Back</button>

            </Link>

        </div>
        <div className='mt-12 md:grid grid-cols-4'>
            {
                List.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course