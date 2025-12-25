import { motion, type Variants } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

export default function TopRepositories({
  repositories,
  totalPrs,
  activeDays,
}: {
  repositories: any[];
  totalPrs: string;
  activeDays: string;
}) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      y: 24,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative min-h-[500px] max-w-[700px] rounded-2xl bg-[#F2F3F2] bg-[url('/bg4.svg')] bg-contain bg-bottom bg-no-repeat p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 text-center text-5xl font-medium tracking-tight text-[#FF694D] md:text-7xl"
      >
        Top Repositories
      </TextEffect>

      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 text-center text-xl tracking-tight text-[#FF694D] md:text-2xl"
        delay={0.3}
      >
        Your Favorite Battlefields
      </TextEffect>

      <motion.div
        className="mt-8 flex flex-col items-center gap-2 tracking-tight md:mt-18"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {repositories.map((repo, index) => (
          <motion.h1
            key={index}
            className="z-10 text-2xl text-[#FF694D] md:text-3xl"
            variants={item}
          >
            {repo.name}
          </motion.h1>
        ))}
      </motion.div>

      <Image src="/512.gif" alt="img" width={100} height={100} className="mx-auto mt-12" />

      <motion.div
        className="absolute -right-20 bottom-40 hidden rotate-12 md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 1200, damping: 40, duration: 0.3, delay: 0.5 }}
      >
        <FloatingCard className="bg-[#F2F3F2]" title="Active days" data={activeDays} />
      </motion.div>

      <motion.div
        className="absolute bottom-80 -left-20 hidden -rotate-12 md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 1200, damping: 40, duration: 0.3, delay: 0.8 }}
      >
        <FloatingCard className="bg-[#F2F3F2]" title="Total PRs" data={totalPrs} />
      </motion.div>

      <p className="text-md absolute right-6 bottom-6 z-10 text-center text-[#FF694D] md:right-12 md:bottom-12 md:hidden">
        {" "}
        {totalPrs} PRs raised
      </p>

      <p className="text-md absolute bottom-6 left-6 z-10 text-center text-[#FF694D] md:bottom-12 md:left-12 md:hidden">
        {activeDays} Active Days
      </p>
    </div>
  );
}
