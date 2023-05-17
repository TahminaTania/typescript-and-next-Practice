import { FC, useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import NavMenu from './NavMenu';



export default function Navbar() {

  const [MenuBar, setMenuBar] = useState<boolean>(false)
  const [Active, setActive] = useState<string>("")

  

  return (
    <section className='sticky top-0 z-50'>
    <div className='bg-white border-b-2 border-[#18171c] py-6'>
      <div className="md:grid md:grid-cols-4 hidden">
        <div className="mx-auto my-auto text-2xl">BOSTON</div>
        <div className=" col-span-2 flex items-center justify-between left-0 uppercase text-md" >
                <NavMenu title="Home" param="Home"  Active={Active} setActive={setActive}/>
                <NavMenu title="Services" param="Services"  Active={Active} setActive={setActive}/>
                <NavMenu title="SKill" param="SKill"  Active={Active} setActive={setActive}/>
                <NavMenu title="Protfolio" param="Protfolio"  Active={Active} setActive={setActive} />
                <NavMenu title="Contact" param="Contact"  Active={Active} setActive={setActive}/>
        </div>
        <div className="flex justify-center">
          <button className="text-[#18171c] bg-[#f7af24] py-[12px] px-[28px] text-[16px] border-2 border-[#18171c] font-bold">Contact Now</button>
        </div>
      </div>


    <div>
      <div className="md:hidden flex items-center justify-between mx-5 py-5 sticky z-50">
        <div className=" text-2xl">BOSTON</div>
        <div className='flex float-right' onClick={(e)=>setMenuBar(!MenuBar)}>{MenuBar?  ( <AiOutlineClose size={30}/>) : (<AiOutlineMenu size={30}/>)}</div>
      </div>

          <div className= { MenuBar ? 'top-[100px] fixed w-full h-fit bg-gray-200 ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed top-[-100%]  opacity-0'}>
            <div className="flex flex-col gap-5 uppercase text-md border-y-2 border-[#18171c] py-6">
                    <div className="ml-4 w-fit"><NavMenu title="Home" param="Home"  Active={Active} setActive={setActive}/></div>
                    <div className="ml-4 w-fit"><NavMenu title="Services" param="Services"  Active={Active} setActive={setActive}/></div>
                    <div className="ml-4 w-fit"> <NavMenu title="SKill" param="SKill"  Active={Active} setActive={setActive}/></div>
                    <div className="ml-4 w-fit"><NavMenu title="Protfolio" param="Protfolio"  Active={Active} setActive={setActive} /></div>
                    <div className="ml-4 w-fit"><NavMenu title="Contact" param="Contact"  Active={Active} setActive={setActive}/></div>
            </div>
          </div>

      </div>
    </div>
    </section>
  )
}
