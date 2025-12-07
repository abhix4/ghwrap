"use client"
import Button from "@/components/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("")
  return (
    <div className="bg-[#222222] w-full h-screen flex items-center justify-center ">
       <div className="bg-[#F2F3F2] w-[80%] h-[90%] flex flex-col items-center justify-center relative overflow-hidden rounded-3xl">

      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute top-0 -left-28"></div>
      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute top-20 right-28"></div>
      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute bottom-0 left-28"></div>
      <Image
      src='/frame2.svg'
      alt="git"
      width={200}
      height={200}
      />

      <h1 className="text-2xl text-[#FF694D] z-10">2025</h1>
      <h1 className="text-7xl text-[#FF694D] font-bold z-10">You committed. A lot</h1>
      
      <h2 className="text-3xl text-[#FF694D] mt-12 text-center z-10">Your development journey,<br></br>deserves recognition.</h2>

      <div className="flex items-end gap-6 z-10">
      <input type="text" placeholder="Github Username" className="w-42 placeholder-[#D9D9D9] underline-offset-4  text-xl mt-18  border-b focus:border-b-2 border-[#FF694D] outline-none p-1" onChange={(e) => setUserName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && router.push(`/${userName}`)} />
      {/* <button className="border p-4 rounded-md" onClick={() => router.push(`/${userName}`)}>
        <MoveRight size={20}/>
      </button> */}
      <Button variant="right" handleClick={() => router.push(`/${userName}`)}/>
      </div>
   </div>
    </div>
  );
}
