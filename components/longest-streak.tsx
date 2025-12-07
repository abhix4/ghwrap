import Image from "next/image";

export default function Streak(){
    return (
         <div className="w-3xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative bg-[url('/v3.svg')] bg-no-repeat bg-bottom ">
            {/* <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            /> */}
            <h1 className="text-7xl text-[#FF694D] text-center z-10">Longest Streak</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold text-center z-10">56 Days</h1>
            <Image src="/fire.gif" alt='img' width={100} height={100} className='mx-auto mt-12' draggable={false}/>
            <p className="text-4xl text-[#FF694D] text-center z-10 mt-18">
                You didn’t just push code.

            </p>
            <p className="text-4xl text-[#FF694D]  text-center z-10">
                You pushed yourself.
            </p>
            
        </div>
    )
}