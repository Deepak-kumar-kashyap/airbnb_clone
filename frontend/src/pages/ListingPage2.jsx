import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { GiFamilyHouse } from "react-icons/gi";

function ListingPage2() {

    let navigate = useNavigate()


    return (
        <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto'>

            <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/listingpage1")}>
                < FaArrowLeftLong className='w-[30px] h-[250px] text-[white]' />
            </div>
            <div className='w-[200px] h-[50px] text[20px] bg-[red] text-white flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>
                Set Your Category
            </div>

            <div className='max-w-[900px] w-[100%] h-[550px] flex flex-col overflow-auto bg-white items-center justify-start  gap-[40px] mt-[30px] '>
                <h1 className='text-[18px] text-black md:text-[30px]'>Which of these best describes your place?</h1>

                <div className='max-w-[900px] w-[100%] h-[100%] flex flex-wrap items-center justify-center  gap-[15px] md:w-[70%] '>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                    <div className='w-[180px] h-[100px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg'>
                        <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
                        <h3>Villa</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListingPage2
