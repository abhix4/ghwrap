import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function TopLanguages({
  languages,
  totalIssues,
  totalCommits,
}: {
  languages: any[];
  totalIssues: number;
  totalCommits: number;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative min-h-[500px] max-w-[700px] overflow-hidden rounded-2xl bg-[#006EE9] p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
        <Image
          src="/lang.svg"
          alt="git"
          width={350}
          height={350}
          className="absolute top-1/2 -left-43 -translate-y-1/2 opacity-30"
        />
        <Image
          src="/lang.svg"
          alt="git"
          width={350}
          height={350}
          className="absolute top-1/2 -right-43 -translate-y-1/2 opacity-20 md:opacity-90"
        />

        <h1 className="z-10 text-center text-5xl font-medium tracking-tighter text-[#D0FFA4] md:text-7xl">
          Top Languages
        </h1>
        <p className="z-10 text-center text-xl tracking-tight text-[#D0FFA4] md:text-2xl">
          that you whispered to daily
        </p>

        <div className="mt-18 flex flex-col items-center justify-start gap-2">
          {languages.map((lang, index) => (
            <h1 key={index} className="z-10 text-2xl tracking-tight text-[#D0FFA4] md:text-3xl">
              {lang.name}
            </h1>
          ))}
        </div>

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
