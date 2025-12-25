import { motion, type Variants } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";
import { TextEffect } from "./motion-primitives/text-effect";

type Language = {
  name: string;
};

export default function TopLanguages({
  languages,
  totalIssues,
  totalCommits,
}: {
  languages: Language[];
  totalIssues: number;
  totalCommits: number;
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

  const rotatingImage: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOut (type-safe)
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="relative min-h-[500px] max-w-[700px] overflow-hidden rounded-2xl bg-[#006EE9] p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
        {/* Left rotating image */}
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
              duration: 60,
              ease: "linear",
            }}
          >
            <Image
              src="/lang.svg"
              alt="languages"
              width={350}
              height={350}
              className="opacity-30"
            />
          </motion.div>
        </motion.div>

        {/* Right rotating image */}
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
              duration: 80,
              ease: "linear",
            }}
          >
            <Image
              src="/lang.svg"
              alt="languages"
              width={350}
              height={350}
              className="opacity-20 md:opacity-90"
            />
          </motion.div>
        </motion.div>

        {/* Headings */}
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
          delay={0.3}
          className="z-10 text-center text-xl tracking-tight text-[#D0FFA4] md:text-2xl"
        >
          that you whispered to daily
        </TextEffect>

        {/* Language list */}
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

        {/* Footer stats */}
        <p className="text-md absolute right-6 bottom-6 z-10 text-[#D0FFA4] md:right-12 md:bottom-12">
          {totalIssues} Issues ?
        </p>

        <p className="text-md absolute bottom-6 left-6 z-10 text-[#D0FFA4] md:bottom-12 md:left-12">
          {totalCommits} Commits, No Regrets
        </p>
      </div>
    </div>
  );
}
