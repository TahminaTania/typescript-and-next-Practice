import Form from '@/components/Form';
import {AiFillMail,AiFillPhone} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'

export default function Contact() {
  
    function handleSubmitt(formData: FormData) {
        // console.log(formData); 
    }
        
  return (
    <section className='bg-gray-50' id="fifth">
        <div className='container mx-auto pb-10  md:py-[105px] '>
        <div className='grid  grid-cols-1 md:grid-cols-2 font-sarif items-center'>
                <div className='col-span-1 py-[100px] md:py-10 pr-10 md:text-start text-center'>
                    <h6 className=' mb-[30px] ml-[-10px]'><span className='inline-block border-[1px] border-[#5c64cf] px-[20px] py-[8px] text-[#5c64cf] md:rotate-[-35deg]'>Contact.</span></h6>
                    <h1 className=' inline md:text-[55px] leading-tight text-[43px] pb-[p5px] font-[800] text-[#18171c]'>Let's Discuss Project</h1>
                   <div className='py-10'><Form onSubmit={handleSubmitt}/></div>
                </div>

                <div className='mx-auto'>
                        <div className='px-3 flex items-center justify-start gap-3 '>
                            <div className='py-4'> <span className="w-[50px] h-[50px] bg-[#5c64cf] rounded-full flex items-center justify-center"><AiFillPhone size={32} className="text-white "/></span></div>
                            <div><h5 className="text-[16px] text-[#555555] font-[800] ">Phone</h5><span className="text-[20px] font-[900]">+01 123 654 8096</span></div>
                        </div>
                        <div className=' px-3 flex items-center justify-start gap-3 '>
                            <div> <span className="w-[50px] h-[50px] bg-[#5c64cf] rounded-full flex items-center justify-center"><AiFillMail size={32} className="text-white "/></span></div>
                            <div className='py-4 border-y-2 border-black'><h5 className="text-[16px] text-[#555555] font-[800] ">Email</h5><span className="text-[20px] font-[900]">info@domainname.com</span></div>
                        </div>
                        <div className=' px-3 flex items-center justify-start gap-3 '>
                            <div> <span className="w-[50px] h-[50px] bg-[#5c64cf] rounded-full flex items-center justify-center"><IoLocationSharp size={32} className="text-white "/></span></div>
                            <div  className='py-4'><h5 className="text-[16px] text-[#555555] font-[800] ">Visit My Studio</h5><span className="text-[20px] font-[900]">Warnwe Park Streetperrine,<br/> FL 33157 New York City</span></div>
                        </div>
                </div>
        </div>
        </div>
   </section>
  )
}
