import {motion} from 'motion/react'
import Image from 'next/image'


type IntroPageProp = {
    name: string;
    image: string;
}

export default function IntroPage({
    name,
    image
}: IntroPageProp){
    return (
<div className="w-3xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative flex flex-col justify-between overflow-hidden shadow-xl">
            {/* <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            /> */}
           <div>
             <h1 className="text-7xl text-[#FF694D] font-medium z-10">2025<span className="text-lg font-normal">Year in review</span></h1>
            <h1 className="text-5xl text-[#FF694D] font-medium z-20">{name}</h1>
            {/* <Image
            src='/spiral.svg'
            alt="git"
            width={1500}
            height={1500}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />  */}
            <Image
            src={image}
            alt="git"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
            /> 

           </div>
            <p className="text-7xl text-[#FF694D] font-medium z-10 ">Let's <br /> unwrap your year.</p>
            <p className="text-lg text-[#FF694D] z-10 absolute top-12 right-12 text-right leading-5">New commits. <br /> New energy. <br/> Same developer.</p>
            
        </div>
    )
}