'use client'
import Button from "@/components/button";
import { Share } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function UserPage(){
    const [index, setIndex] = useState<number>(0)
    const tabs = [
        <div className="min-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">2025<span className="text-lg font-normal">Year in review</span></h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">Abhishek Singh</h1>
            
        </div>,
           <div className="max-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
            {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">Total Contributions</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">500</h1> */}
            <p className="text-7xl text-[#FF694D] font-bold z-10">Some call it grinding.
                You call it fun.</p>
            <p className="text-4xl text-[#FF694D] text-center font-semibold z-10 mt-16">You have Contributed </p>
            <p className="text-5xl text-[#FF694D] font-bold  z-10 text-center mt-8"> 500 times</p>
            <p className="text-3xl text-[#FF694D] z-10 text-center"> in 2025</p>
            
        </div>,
           <div className="min-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">Top Languages</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Typescript</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Javascript</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Golang</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Python</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Docker</h1>
            
        </div>,
           <div className="min-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
             <h1 className="text-7xl text-[#FF694D] font-bold z-10">Top Repositories</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">MailZero</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Cal</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Morphik</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Gumroad</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Flexile</h1>
            
        </div>,
           <div className="min-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">Longest Streak</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">56 Days</h1>
            
        </div>,
           <div className="min-w-4xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            />
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">Stars Recieved</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">200</h1>
            
        </div>,
        <div className="min-w-[450px]  min-h-[70%] bg-[#F2F3F2] rounded-2xl p-12 relative">
            <Image
            src='/Vector.svg'
            alt="git"
            width={200}
            height={300}
            className="absolute right-0 bottom-0"
            />
            {/* <Share size={28} className="absolute  text-[#FF694D] cursor-pointer font-light top-10 right-10"/> */}
            <div className="min-w-28 min-h-28 w-fit border-[#FF694D] border rounded-md"></div>

            <h1 className="text-4xl text-[#FF694D] font-bold z-10 mt-12">Abhishek</h1>
            {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">200</h1> */}

            <div className="grid grid-cols-2 mt-6">
                <div className="">
                    <p className="text-2xl text-[#FF694D] z-10">Total Commits</p>
                    <p className="text-xl text-[#FF694D] z-10">512</p>
                </div>
                 <div className="">
                    <p className="text-2xl text-[#FF694D] z-10">Total Commits</p>
                    <p className="text-xl text-[#FF694D] z-10">512</p>
                </div>
                 <div className="">
                    <p className="text-2xl text-[#FF694D] z-10">Total Commits</p>
                    <p className="text-xl text-[#FF694D] z-10">512</p>
                </div>
                 <div className="">
                    <p className="text-2xl text-[#FF694D] z-10">Total Commits</p>
                    <p className="text-xl text-[#FF694D] z-10">512</p>
                </div>
            </div>

            <h2 className="text-3xl text-[#FF694D] font-semibold z-10 mt-22"> @abhix4</h2>
            <p className="text-2xl text-[#FF694D] z-10">2025</p>
            <p className="text-2xl text-[#FF694D] z-10">ghwrap.com</p>
        </div>

    ]
    return (
        <div className="w-full h-screen bg-[#222222] flex justify-between items-center px-40">
            {
                <Button variant="left" handleClick={() => setIndex(prev => prev-1)} disable={index === 0}/>
            }
            {
              tabs[index]
            }
            {
                 <Button variant="right" handleClick={() => setIndex(prev => prev+1)} disable={index === 6}/>
            }

        </div>
    )
}