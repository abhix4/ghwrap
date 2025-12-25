import { motion, Variants } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

export default function CommitsPage({ totalCommits }: { totalCommits: string }) {
  const fadeUp: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 20,
        delay: 1.8,
      },
    },
  };
  return (
    <div className="relative min-h-[500px] max-w-[700px] rounded-2xl bg-[#F2F3F2] bg-[url('/commit-union.svg')] bg-contain bg-bottom bg-no-repeat p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
      <TextEffect
        per="word"
        as="h3"
        preset="slide"
        className="z-10 text-center text-4xl font-medium tracking-tight text-[#FF694D] md:text-6xl"
      >
        Some call it grinding.
      </TextEffect>
      <TextEffect
        per="word"
        as="h3"
        preset="slide"
        className="z-10 text-center text-4xl font-medium tracking-tight text-[#FF694D] md:text-6xl"
        delay={0.5}
      >
        You call it fun.
      </TextEffect>

      <TextEffect
        per="word"
        as="h3"
        preset="slide"
        className="z-10 mt-16 text-center text-3xl font-semibold tracking-tight text-[#FF694D] md:text-4xl"
        delay={1}
      >
        You have Contributed
      </TextEffect>

      <motion.p
        className="z-10 mt-8 text-center text-5xl font-bold tracking-tight text-[#FF694D]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {totalCommits} times
      </motion.p>

      <motion.p
        className="z-10 text-center text-3xl tracking-tight text-[#FF694D]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        in 2025
      </motion.p>
    </div>
  );
}
