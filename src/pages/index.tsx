import Navbar from "@/components/Navbar"
import Home from "./Home"
import Services from "./Services"
import { GetServerSideProps } from 'next';
import Skill from "./Skill"
import Latest from "./Latest"


import fsPromises from 'fs/promises';
import path from 'path'
import Contact from "./Contact";
import Footer from "@/components/Footer";



export default function LandingPage({data,objectData}:IndexProps) {
  const experiences = objectData.experince;
  const skill = objectData.Skills;
  return (
    <main className="scroll-smooth">
     <Home/>
     <Services data={data}/>
     <Skill experiences={experiences} skill={skill}/>
     <Latest skill={skill}/>
     <Contact/>
     <Footer/>
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
    objectData:any
  }


export const getServerSideProps:GetServerSideProps=async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const datas = await res.json();
    const data=datas.slice(0,6);
    console.log(res,"dataaaaaaaaaaa")
    
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return { 
        props: {data,objectData},
         };
  }
   
