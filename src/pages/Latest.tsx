import React from 'react'

export default function Latest() {
  return (
    <section className='py-[80px] bg-orange-50'>
        <div className='container  mx-auto md:px-[150px]'>
            <div className='font-[Rubik] tracking-widest md:text-start text-center'>
                <h6 className=' mb-[30px] ml-[-10px]'><span className='inline-block border-[1px] border-[#5c64cf] px-[20px] py-[8px] text-[#5c64cf] md:rotate-[-35deg]'>Portfolio.</span></h6>
                <h1 className='md:text-[70px] text-[50px] mb-[25px] leading-tight font-semibold text-[#18171c]'>Latest Project</h1>
            </div>
            
            {/* <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 gap-7 my-4 '>
                {data?.map((item,index)=>{
                    return(
                        <div key={index} className=''>
                            <div className='bg-white border-2 border-black'>
                                <div className='p-7'>
                                    <h1 className='md:text-[70px] text-[50px] font-semibold text-[#18171c]'>0{item.id}</h1>
                                    <h5 className='font-[500] py-3 text-[22px] md:text-[20px]'>Web Design</h5>
                                    <p className='text-[555555] font-[400] text-[18px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className='mt-4 bg-[#f7af24] rounded-full w-[70px] h-[70px] flex items-center justify-center'><AiOutlineMobile size={30} className=''/></div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div> */}

        </div>
    </section>
  )
}


