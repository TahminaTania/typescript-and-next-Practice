
import {AiFillHtml5} from "react-icons/ai";

interface IndexProps{
    experiences:{
        id:number;
        title:string;
        company:string;
        icon:string
    }[];
    skill:{
        id:number;
        title:string;
        icon:string
    }[];
  }

function Skill({experiences,skill}:IndexProps) {
    
  return (
    <section id="Skill">
        <div className='container mx-auto py-[100px] md:px-[50px]'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div>
                      <div className='grid md:grid-cols-2'>
                            <div>
                                <h6 className=' mb-[30px] ml-[-10px]'><span className='inline-block border-[1px] border-[#5c64cf] px-[20px] py-[8px] text-[#5c64cf] md:rotate-[-35deg]'>Experience.</span></h6>
                                <h1 className='md:text-[60px] text-[40px] mb-[25px] leading-tight font-semibold text-[#18171c]'>Skill And <br/> Experinces</h1>
                                <p className=' md:text-[20px] text-[18px] my-[1rem] text-[#2a292d]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                            </div>
                      </div>
                    <div>
                            <h5 className='font-[800] py-5 text-[32px] md:text-[30px] '>My Skills</h5>
                            <div className="container mx-auto py-5">
                                <div className="grid grid-cols-2">
                                {skill?.map(skill =>
                                                <div key={skill.id} className="m-3">
                                                        <div className='border-2 border-black flex items-center gap-7 p-3'><span className="w-[50px] h-[50px] bg-[#5c64cf] rounded-full flex items-center justify-center"><AiFillHtml5 size={32} className="text-white "/></span><p className="whitespace-nowrap font-[500] py-3 text-[15px] md:text-[20px]">{skill.title}</p></div>
                                                </div>
                                    )} 
                                    </div>
                                    </div>
                    </div>
                </div>

 {/* second Coloum from here */}

                <div className="my-auto">
                    <h5 className='font-[800] py-5 text-[32px] md:text-[30px]'>Experiences</h5>
                    <div className="container mx-auto py-5">
                         {experiences?.map(post =>
                                <div key={post.id}>
                                    <div className="border-t-2 border-black grid grid-cols-2 py-3">
                                       <h6 className="text-[15px] font-bold">Jan 2021 - Present</h6>
                                       <div><h5 className="text-[18px] font-bold">Creative Director</h5><span className="text-[14px] text-[#555555] font-[400]">pxdraft Ltd, UK</span></div>
                                    </div>
                                </div>
                                )}
                    </div>
                    <div className="w-[200px] h-[200px] mx-auto rounded-full bg-orange-50 flex items-center justify-center"><img src="./Images/avatar.png" height={200} width={200} className="rounded-full"/></div>
                    <div className="flex justify-center py-4"><button className="text-[#18171c] bg-[#f7af24] py-[12px] px-[28px] text-[16px] border-2 border-[#18171c] font-bold ">Hire Me</button></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill