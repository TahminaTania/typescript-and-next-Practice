
import React, { ChangeEvent, useEffect } from 'react'
import Link from 'next/link';
import { useState,FormEvent,FormEventHandler } from 'react'


export default function Form() {

    const [inputs, setInputs] = useState(
        { username: '', email: '', subject:'' ,message: ''});

    const handleChange = (event:any) => {
        const name = event.target.name;
        const value=event.target.value
        setInputs({...inputs,[name]:value})
    }
        
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputs({username: '', email: '', subject:'' ,message: ''})
    console.log(inputs);
    
}
// console.log(inputs,'inputs Now')


        return (
            <div>
               <div className=' bg-white  border-black border-2 py-10 lg:px-[50px] px-3'>
                    <form className="" onSubmit={handleSubmit}>
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Get in touch</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Our friendly team would love to hear from you.</p>
                        {/* starting input values */}

                        <div>
                            <div className='grid md:grid-cols-2 md:gap-3'>
                                <section className='pb-3'>
                                    <label className=' text-gray-600'>First Name</label>
                                    <div className="flex items-center border border-gray-900 py-2 px-3 my-2">
                                        <input className="pl-2 outline-none border-none w-full" 
                                        type="text" 
                                        name="username"
                                        placeholder="Name*" 
                                        value={inputs.username || ""} 
                                        onChange={handleChange}
                                        />
                                    </div>
                                </section>
                                <section className='pb-3'>
                                    <label className=' text-gray-600'>Your Email</label>
                                    <div className="flex items-center border border-gray-900 py-2 px-3 my-2">
                                        <input className="pl-2 outline-none border-none w-full" 
                                        type="email" 
                                        name="email"
                                        placeholder="Email*" 
                                        value={inputs.email || ""} 
                                        onChange={handleChange}
                                        />
                                    </div>
                                </section>
                            </div>
                            <section className='pb-3'>
                                    <label className=' text-gray-600'>Subject</label>
                                    <div className="flex items-center border border-gray-900 py-2 px-3 my-2">
                                        <input className="pl-2 outline-none border-none" 
                                        type="text" 
                                        name="subject"
                                        placeholder="Email*" 
                                        value={inputs.subject || ""} 
                                        onChange={handleChange}
                                        />
                                    </div>
                            </section>
                            <section>
                                    <label className=' text-gray-600'>Your Message</label>
                                    <div className="flex items-center border border-gray-900 py-2 px-3 my-2">
                                        <textarea className="pl-2 outline-none border-none h-[100px]" 
                                            rows={4} 
                                            name="message"
                                            placeholder="Email*" 
                                            value={inputs.message || ""} 
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                            </section>

                        </div>



                        <div className="pt-8">
                           <button type="submit" className="text-[#18171c] bg-[#f7af24] py-[12px] px-[28px] text-[16px] border-2 border-[#18171c] font-bold">Send Message</button>
                        </div>
                        
                    </form>

            </div>
            </div>
        )
}