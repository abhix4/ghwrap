import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

export default function Streak({
  longestStreak,
  bestDay,
  bestMonth,
}: {
  longestStreak: string;
  bestDay: string;
  bestMonth: string;
}) {
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 20,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="relative flex min-h-[500px] max-w-[700px] flex-col items-center justify-start rounded-2xl bg-[#F2F3F2] bg-[url('/bg6.svg')] bg-contain bg-no-repeat p-6 md:min-h-[650px] md:min-w-[700px] md:bg-bottom md:p-12">
      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 mb-6 text-center text-5xl tracking-tight text-[#FF694D] md:mb-16 md:text-7xl"
      >
        Longest Streak
      </TextEffect>

      <motion.p
        className="z-10 mb-4 text-center text-5xl leading-16 font-medium tracking-tight text-[#FF694D] md:mb-8 md:text-8xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {longestStreak} <br />
        <span className="text-5xl md:text-6xl">Days</span>
      </motion.p>

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

      <div className="z-10 space-y-2 text-center text-2xl tracking-tight text-[#FF694D] md:text-4xl">
        <TextEffect
          per="word"
          as="p"
          preset="slide"
          className="z-10 text-center text-xl tracking-tight text-[#FF694D] md:text-2xl"
          delay={0.5}
        >
          You didn't just push code.
        </TextEffect>
        <TextEffect
          per="word"
          as="p"
          preset="slide"
          className="z-10 text-center text-xl tracking-tight text-[#FF694D] md:text-2xl"
          delay={1}
        >
          You pushed yourself.
        </TextEffect>
      </div>

      <motion.div
        className="absolute -right-20 bottom-80 hidden rotate-12 md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 1200, damping: 40, duration: 0.3, delay: 1.2 }}
      >
        <FloatingCard className="bg-[#F2F3F2] md:block" title="Grind day" data={bestDay} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 -left-20 hidden -rotate-12 md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 1200, damping: 40, duration: 0.3, delay: 1.7 }}
      >
        <FloatingCard className="bg-[#F2F3F2] md:block" title="Best month" data={bestMonth} />
      </motion.div>
    </div>
  );
}
