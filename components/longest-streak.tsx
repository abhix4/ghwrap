import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FloatingCard from "./floating-card";

export default function Streak({ longestStreak, bestDay, bestMonth }: { longestStreak: string, bestDay: string, bestMonth: string }) {



  return (
    <div className="relative flex h-[80%] max-w-3xl md:min-w-3xl flex-col items-center justify-start rounded-2xl bg-[#F2F3F2] p-6 md:p-12">
      <h1 className="z-10 mb-6 md:mb-16 text-center text-5xl md:text-7xl text-[#FF694D]">
       Longest Streak
      </h1>

      <p
        className="z-10 mb-4 md:mb-8 text-center text-5xl md:text-8xl font-medium text-[#FF694D]"
      >
        {longestStreak} <br />
        <span className="text-5xl md:text-6xl">Days</span>
      </p>

      <div
        
        className="mb-4 md:mb-8"
      >
        <Image
          src="/fire.gif"
          alt="img"
          width={100}
          height={100}
          className="mx-auto mt-12"
          draggable={false}
        />
      </div>

      <div className="z-10 space-y-2 text-center text-2xl md:text-4xl text-[#FF694D]">
        <p>
          You didn't just push code.
        </p>
        <p>
         You pushed yourself.
        </p>
      </div>

      <FloatingCard
        className="absolute -right-20 bottom-80 rotate-12 bg-[#F2F3F2] hidden md:block"
        title="Grind day"
        data={bestDay}
      />
      <FloatingCard
        className="absolute bottom-40 -left-20 -rotate-12 bg-[#F2F3F2] hidden md:block"
        title="Best month"
        data={bestMonth}
      />
    </div>
  );
}
