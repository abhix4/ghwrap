import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

export default function CommitsPage({ totalCommits }: { totalCommits: string }) {
  const fadeUp = {
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
      {/* <motion.div
        className="hidden md:absolute right-40 bottom-0 "
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 1.8 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-0 left-40"
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.0 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-0 left-60"
        initial={{ translateY: -600 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className=" hidden md:block absolute bottom-0 left-80"
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 1.4 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div> */}
      {/* here it is */}
      {/* <motion.div
        className="hidden md:block absolute bottom-30 left-0"
        initial={{ translateY: -600 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 4 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-0 left-0"
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.6 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0"
        initial={{ translateY: -700 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 1.8 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="absolute right-60 bottom-0"
        initial={{ translateY: -800 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.0 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="absolute right-40 bottom-0"
        initial={{ translateY: -500 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.2 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-0 left-20"
        initial={{ translateY: -600 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.4 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div>

      <motion.div
        className="absolute right-20 bottom-0"
        initial={{ translateY: -600 }}
        animate={{ translateY: 0 }}
        transition={{ type: "spring", duration: 2.8 }}
      >
        <Image src="/g2.svg" alt="git" width={150} height={150} />
      </motion.div> */}

      {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">Total Contributions</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">500</h1> */}

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
