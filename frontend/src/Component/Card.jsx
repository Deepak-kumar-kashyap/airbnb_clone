import React, { useContext } from 'react'
import { userDataContext } from '../Context/UserContext'
import { listingDataContext } from '../Context/ListingContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

function Card({title,landMark, image1, image2, image3, rent, city, id, ratings, isBooked, host}) {

  let navigate = useNavigate()
  let {userData} = useContext(userDataContext)
  let {handleViewCard} = useContext(listingDataContext)
  const handleClick = ()=>{
    if(userData){
      handleViewCard(id)
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div className='w-[330px] max-w-[85%] h-[460px] flx items-start justify-start flex-col rounded-lg cursor-pointer relative z-[10] ' onClick={()=>!isBooked?handleClick():null}>

      {isBooked && <div className='text-[green] bg-white rounded-lg absolute flex items-center justify-center right-1 top-1 gap-[5px] p-[5px]  ' ><GiConfirmed className='w-[20px] h-[20px] text-[green]' />Booked</div>}

      <div className='w-[100%] h-[67%] bg-gray-800 rounded-lg overflow-auto flex'>
          <img src={image1} alt="" className='w-[100%] flex-shrink-0'/>
          <img src={image2} alt="" className='w-[100%] flex-shrink-0'/>
          <img src={image3} alt="" className='w-[100%] flex-shrink-0'/>
      </div>

      <div className='w-[100%] h-[33%] py-[20px] flex flex-col gap-[2px] '>
          <div className='flex items-center justify-between text-[18px]'>
              <span className='w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] '>In {landMark.toUpperCase()}, {city.toUpperCase()} </span>
              <span className='flex items-center justify-center gap-[5px]'><FaStar className='text-red-600'/>{ratings}</span>
          </div>
          <span className='text-[15px] w-[80%] text-ellipsis overflow-hidden text-nowrap'>{title.toUpperCase()} </span>
          <span className='text-[16px] font-semibold text-[#986b6b]'>₹{rent}/day</span>
      </div>
    </div>
  )
}

export default Card
