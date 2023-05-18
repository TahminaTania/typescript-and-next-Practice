import React from 'react'




export default function Home() {
  return (
   <section id="Home">
    <div className='container mx-auto pb-10  md:py-[105px] '>
      <div className='grid  grid-cols-1 md:grid-cols-2 font-sarif bg-gray-50 '>
            <div className='col-span-1 py-[100px] md:py-10 pr-10 md:text-start text-center'>
                <h6 className=' mb-[30px] ml-[-10px]'><span className='inline-block border-[1px] border-[#5c64cf] px-[20px] py-[8px] text-[#5c64cf] md:rotate-[-35deg]'>Hello.</span></h6>
                <h1 className='md:text-[70px] text-[50px] mb-[25px] leading-tight font-semibold text-[#18171c]'>We Have <br/>Design <br/>Experience</h1>
                <p className=' md:text-[20px] text-[18px] my-[1rem] text-[#2a292d]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                <div className='pt-[20px] text-white text-[16px]  leading-tight'><button className='py-[15px] px-[28px]  bg-[#5c64cf] border-[#5c64cf] font-bold'>Let's Talk</button></div>
            </div>

            <div className='col-span-1 my-auto'>
                <img src='./Images/home-banner.png'></img>
            </div>
      </div>
    </div>
   </section>
  )
}
