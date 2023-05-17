import Link from "next/link"
import {useSearchParams} from "next/navigation";
import { useState } from "react";

interface Props {
  param:string;
  title:string;
  Active:string;
  setActive:React.Dispatch<React.SetStateAction<string>>

}


export default function NavMenu({param,title,Active,setActive}:Props) {
 
  return (
    <div onClick={(e)=>setActive(title)} className="">
      <Link href={`#${param}`} data-to-scrollspy-id={param}>{title}</Link>
    </div>

  )
}

// onClick={(e)=>setActive(!Active)}
// className={`${title===Active && "NavHover"}`} 