import Image from "next/image";

export default function ShareCard(){
    return (
         <div className="w-[450px]  min-h-[70%] bg-[#F2F3F2] rounded-2xl p-12 relative ">
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
    )
}