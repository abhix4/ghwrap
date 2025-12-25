"use client";
import Button from "@/components/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextRoll } from "@/components/motion-primitives/text-roll";
import { motion } from "motion/react";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  return (
    <div className="flex h-screen w-full items-start justify-center bg-[#222222] pt-12 md:items-center md:pt-0">
      <div className="relative flex h-[80%] w-[90%] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F2F3F2] bg-[url('/bg12.svg')] bg-cover bg-top bg-no-repeat md:h-[90%] md:w-[80%]">
        <div className="z-20 flex" draggable={false}>
          {/* <Image src="/g1.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g2.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g3.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g4.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g5.svg" alt="git" width={140} height={140} draggable={false} />
          <Image src="/g6.svg" alt="git" width={140} height={140} draggable={false} />

          <Image src="/g8.svg" alt="git" width={140} height={140} draggable={false} /> */}
        </div>
        <h1 className="z-10 mt-8 text-xl text-[#FF694D] md:text-2xl">
          <span className="text-lg md:text-xl">In, </span>2025
        </h1>

        <TextRoll
          className="z-10 overflow-clip text-3xl font-bold tracking-tight text-[#FF694D] md:text-7xl"
          variants={{
            enter: {
              initial: { y: 0 },
              animate: { y: 100 },
            },
            exit: {
              initial: { y: -100 },
              animate: { y: 0 },
            },
          }}
          duration={0.3}
          getEnterDelay={(i) => i * 0.05}
          getExitDelay={(i) => i * 0.05 + 0.05}
          transition={{
            ease: [0.175, 0.885, 0.32, 1.1],
          }}
        >
          You committed. A lot
        </TextRoll>

        <motion.h2
          className="z-10 mt-6 text-center text-xl text-[#FF694D] md:mt-12 md:text-3xl"
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
        >
          Your development journey,
        </motion.h2>

        <motion.h2
          className="z-10 text-center text-xl text-[#FF694D] md:text-3xl"
          initial={{ translateY: 60, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
        >
          deserves recognition.
        </motion.h2>

        <motion.div
          className="z-10 flex flex-col items-center gap-2 md:flex-row md:items-end"
          initial={{ translateY: 80, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Username"
            className="text-md mt-18 rounded-md border border-[#2222224b] bg-[#FEFEFF] p-[9px] underline-offset-4 placeholder-[#D9D9D9] shadow-sm outline-none md:w-42 md:text-xl"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && router.push(`/${userName}`)}
          />

          <Button variant="right" handleClick={() => router.push(`/${userName}`)} />
        </motion.div>
      </div>
    </div>
  );
}
