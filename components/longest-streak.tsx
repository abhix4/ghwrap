import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import FloatingCard from "./floating-card";

export default function Streak({ longestStreak }: { longestStreak: string }) {
  const [count, setCount] = useState(0);

  // Countdown animation for the number
  useEffect(() => {
    const controls = animate(0, 56, {
      duration: 2,
      delay: 0.5,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return controls.stop;
  }, []);

  // Split text animation helper
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: index * 0.03,
          type: "spring",
          stiffness: 100,
        }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="relative flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center rounded-2xl bg-[#F2F3F2] p-12">
      <h1 className="z-10 mb-4 text-center text-7xl text-[#FF694D]">
        {splitText("Longest Streak")}
      </h1>

      <motion.p
        className="z-10 mb-8 text-center text-8xl font-medium text-[#FF694D]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 100 }}
      >
        {longestStreak} <br />
        <span className="text-6xl">Days</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
        className="mb-8"
      >
        <Image
          src="/fire.gif"
          alt="img"
          width={100}
          height={100}
          className="mx-auto mt-12"
          draggable={false}
        />
      </motion.div>

      <div className="z-10 space-y-2 text-center text-4xl text-[#FF694D]">
        <p>
          {splitText("You didn't just push code.").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 2 + i * 0.02,
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </p>
        <p>
          {splitText("You pushed yourself.").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 2.5 + i * 0.02,
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>

      <FloatingCard
        className="absolute -right-20 bottom-80 rotate-12 bg-[#F2F3F2]"
        title="busiest day"
        data="Tuesday"
      />
      <FloatingCard
        className="absolute bottom-40 -left-20 -rotate-12 bg-[#F2F3F2]"
        title="busiest month"
        data="July"
      />
    </div>
  );
}
