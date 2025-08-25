import React,{useState,useEffect} from 'react'
import List from "../../public/List.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


import Slider from "react-slick";
import Cards from './Cards';
//import { useState } from "react"
//import { useEffect } from "react"
function Freebook() {

   const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res = await axios.get('http://localhost:4001/book')
                const data = res.data.filter((data)=> data.catagory==="free")
                setBook(data)
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getBook()
    },[])
    
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2*1 container mx-auto md:px-20 px-4'>
       <div>
         <h1 className='font-semibold text-xl pd-2'>Free Offered Course</h1>
        <p>
            Explore our exclusive free courses on literature, creative writing, and book analysis. Join now to enhance your reading skills, discover new authors, and dive deeper into the world of books—completely free!
        </p>
       </div>
    
    <div className='py-4'>
         <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook