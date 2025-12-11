import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function CommitsPage({ totalCommits }: { totalCommits: string }) {
  return (
    <div className="relative min-h-[650px] max-w-[700px] rounded-2xl bg-[#F2F3F2] p-6 md:min-w-[700px] md:p-12 bg-[url('/commit-union.svg')] bg-contain bg-bottom bg-no-repeat">
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
      <p className="z-10 text-center tracking-tight text-4xl font-medium text-[#FF694D] md:text-6xl">
        Some call it grinding. <br />
        You call it fun.
      </p>
      <p className="z-10 mt-16 text-center tracking-tight text-3xl font-semibold text-[#FF694D] md:text-4xl">
        You have Contributed{" "}
      </p>
      <p className="z-10 mt-8 tracking-tight text-center text-5xl font-bold text-[#FF694D]">
        {" "}
        {totalCommits} times
      </p>

        {/* <Image src="/commit-union.svg" alt="git" width={700} height={150} /> */}

      <p className="z-10 tracking-tight text-center text-3xl text-[#FF694D]"> in 2025</p>
    </div>  
  );
}
