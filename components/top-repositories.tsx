import {motion} from 'motion/react'
import Image from 'next/image'

export default function TopRepositories(){
    return (
             <div className="w-3xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative bg-[url('/v3.svg')] bg-no-repeat bg-bottom">
          
             <h1 className="text-7xl text-[#FF694D] font-medium z-10 text-center">Top Repositories</h1>
             <h1 className="text-2xl text-[#FF694D]  z-10 text-center">Your Favorite Battlefields</h1>

             <div className="flex flex-col gap-2 items-center mt-18">
                  <h1 className="text-3xl text-[#FF694D] z-10">MailZero</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Cal</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Morphik</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Gumroad</h1>
            <h1 className="text-3xl text-[#FF694D] z-10">Flexile</h1>
     </div>
    <Image src="/512.gif" alt='img' width={100} height={100} className='mx-auto mt-12'/>
</div>
    )
}