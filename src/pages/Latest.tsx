import {AiOutlineArrowRight} from 'react-icons/ai'

interface IndexProps{

    latest:{
        id:number;
        title:string;
        icon:string
    }[];
  }

export default function Latest({latest}:IndexProps) {
  return (
    <section className='py-[80px] bg-orange-50' id="Latest">
        <div className='container  mx-auto lg:px-[150px]'>
            <div className='font-[Rubik] tracking-widest md:text-start text-center'>
                <h6 className=' mb-[30px] ml-[-10px]'><span className='inline-block border-[1px] border-[#5c64cf] px-[20px] py-[8px] text-[#5c64cf] md:rotate-[-35deg]'>Portfolio.</span></h6>
                <h1 className='md:text-[70px] text-[50px] mb-[25px] leading-tight font-semibold text-[#18171c]'>Latest Project</h1>
            </div>
            
            <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 gap-7 my-4 '>
                {latest?.map((item,index)=>{
                    return(
                        <div key={index} className=''>
                            <div className='bg-white border-2 border-black'>
                                <div className='bg-black'>
                                   <img src="./Images/project-1.jpg"/>
                                </div>
                                <div className='py-4 px-3 flex items-center justify-between border-t-2 border-black'>
                                    <div>
                                         <div><h5 className="text-[18px] font-bold">Agency Landing Page</h5><span className="text-[14px] text-[#555555] font-[400]">Web/Word Press</span></div>
                                    </div>
                                    <div> <span className="w-[50px] h-[50px] bg-[#5c64cf] rounded-full flex items-center justify-center"><AiOutlineArrowRight size={32} className="text-white "/></span></div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div>

        </div>
    </section>
  )
}


