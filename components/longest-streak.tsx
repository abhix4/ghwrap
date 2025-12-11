import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FloatingCard from "./floating-card";

export default function Streak({
  longestStreak,
  bestDay,
  bestMonth,
}: {
  longestStreak: string;
  bestDay: string;
  bestMonth: string;
}) {
  return (
    <div className="relative  flex min-h-[650px] max-w-[700px] flex-col items-center justify-start rounded-2xl bg-[#F2F3F2] p-6 md:min-w-[700px] md:p-12 bg-[url('/bg6.svg')] bg-contain bg-bottom bg-no-repeat">
      <h1 className="tracking-tight z-10 mb-6 text-center text-5xl text-[#FF694D] md:mb-16 md:text-7xl">
        Longest Streak
      </h1>

      <p className="z-10 tracking-tight mb-4 text-center text-5xl font-medium text-[#FF694D] md:mb-8 leading-16 md:text-8xl">
        {longestStreak} <br />
        <span className="text-5xl md:text-6xl">Days</span>
      </p>

      <div className="mb-4 md:mb-8">
        <Image
          src="/fire.gif"
          alt="img"
          width={100}
          height={100}
          className="mx-auto mt-12"
          draggable={false}
        />
      </div>

      <div className="z-10 space-y-2 text-center text-2xl text-[#FF694D] tracking-tight md:text-4xl">
        <p>You didn't just push code.</p>
        <p>You pushed yourself.</p>
      </div>

      <FloatingCard
        className="absolute -right-20 bottom-80 hidden rotate-12 bg-[#F2F3F2] md:block"
        title="Grind day"
        data={bestDay}
      />
      <FloatingCard
        className="absolute bottom-40 -left-20 hidden -rotate-12 bg-[#F2F3F2] md:block"
        title="Best month"
        data={bestMonth}
      />
    </div>
  );
}
