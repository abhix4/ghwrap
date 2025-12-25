import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

export default function TopLanguages({
  languages,
  totalIssues,
  totalCommits,
}: {
  languages: any[];
  totalIssues: number;
  totalCommits: number;
}) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 24, opacity: 0 },
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

  const rotatingImage = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="flex justify-center">
      <div className="relative min-h-[500px] max-w-[700px] overflow-hidden rounded-2xl bg-[#006EE9] p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
        <motion.div
          className="absolute top-1/2 -left-43 -translate-y-1/2"
          variants={rotatingImage}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 60, // slow = premium
              ease: "linear",
            }}
          >
            <Image src="/lang.svg" alt="git" width={350} height={350} className="opacity-30" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-43 -translate-y-1/2"
          variants={rotatingImage}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 80, // slightly different speed
              ease: "linear",
            }}
          >
            <Image
              src="/lang.svg"
              alt="git"
              width={350}
              height={350}
              className="opacity-20 md:opacity-90"
            />
          </motion.div>
        </motion.div>

        <TextEffect
          per="word"
          as="p"
          preset="slide"
          className="z-10 text-center text-5xl font-medium tracking-tighter text-[#D0FFA4] md:text-7xl"
        >
          Top Languages
        </TextEffect>

        <TextEffect
          per="word"
          as="p"
          preset="slide"
          className="z-10 text-center text-xl tracking-tight text-[#D0FFA4] md:text-2xl"
          delay={0.3}
        >
          that you whispered to daily
        </TextEffect>

        <motion.div
          className="mt-18 flex flex-col items-center justify-start gap-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {languages.map((lang, index) => (
            <motion.h1
              key={index}
              className="z-10 text-2xl tracking-tight text-[#D0FFA4] md:text-3xl"
              variants={item}
            >
              {lang.name}
            </motion.h1>
          ))}
        </motion.div>

        <p className="text-md absolute right-6 bottom-6 z-10 text-center text-[#D0FFA4] md:right-12 md:bottom-12">
          {totalIssues} Issues ?
        </p>

        <p className="text-md absolute bottom-6 left-6 z-10 text-center text-[#D0FFA4] md:bottom-12 md:left-12">
          {totalCommits} Commits, No Regrets
        </p>
      </div>
    </div>
  );
}
