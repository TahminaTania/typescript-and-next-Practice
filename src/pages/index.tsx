import Navbar from "@/components/Navbar"
import Home from "./Home"
import Services from "./Services"
import { GetServerSideProps } from 'next';
import Skill from "./Skill"
import Latest from "./Latest"


import fsPromises from 'fs/promises';
import path from 'path'



export default function LandingPage({data,objectData}:IndexProps) {
  const experiences = objectData.experince;
  const skill = objectData.Skills;
  return (
    <main className="">
     <Home/>
     <Services data={data}/>
     <Skill experiences={experiences} skill={skill}/>
     <Latest/>
    </main>
  )
}



interface IndexProps{
    data:{
        userId:number;
        id:number;
        title:string;
        body:string
    }[];
  }


export const getServerSideProps:GetServerSideProps=async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const datas = await res.json();
    const data=datas.slice(0,6);
    console.log(res,"dataaaaaaaaaaa")
    
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return { 
        props: {data},
        props: {objectData}  };
  }
   
