"use client";
import Button from "@/components/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#222222]">
      <div className="relative flex h-[90%] w-[80%] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F2F3F2]">
        <div className="absolute top-0 -left-28 h-64 w-64 rounded-full bg-[#FEFEFF]"></div>
        <div className="absolute top-20 right-28 h-64 w-64 rounded-full bg-[#FEFEFF]"></div>
        <div className="absolute bottom-0 left-28 h-64 w-64 rounded-full bg-[#FEFEFF]"></div>
        <div className="z-20 flex" draggable={false}>
          <Image src="/g1.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g2.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g3.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g4.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g5.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g6.svg" alt="git" width={140} height={140} draggable={false} />

          <Image src="/g8.svg" alt="git" width={140} height={140} draggable={false} />
        </div>
        <h1 className="z-10 mt-8 text-2xl text-[#FF694D]">2025</h1>
        <h1 className="z-10 text-7xl font-bold text-[#FF694D]">You committed. A lot</h1>

        <h2 className="z-10 mt-12 text-center text-3xl text-[#FF694D]">
          Your development journey,<br></br>deserves recognition.
        </h2>

        <div className="z-10 flex items-end gap-6">
          <input
            type="text"
            placeholder="Github Username"
            className="mt-18 w-42 border-b border-[#FF694D] p-1 text-xl underline-offset-4 placeholder-[#D9D9D9] outline-none focus:border-b-2"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && router.push(`/${userName}`)}
          />

          <Button variant="right" handleClick={() => router.push(`/${userName}`)} />
        </div>
      </div>
    </div>
  );
}
