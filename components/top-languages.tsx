import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function TopLanguages({ languages, totalIssues, totalCommits }: { languages: any[]; totalIssues: number; totalCommits: number }) {
  return (
    <div className="relative h-[80%] max-w-3xl md:min-w-3xl rounded-2xl bg-[#006EE9] p-6 md:p-12">
      {/* <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            /> */}
      <h1 className="z-10 text-center text-5xl md:text-7xl font-medium text-[#D0FFA4]">Top Languages</h1>
      <p className="z-10 text-center text-xl md:text-2xl text-[#D0FFA4]">that you whispered to daily</p>

      {/* <FloatingCard className='absolute -bottom-10 left-30 -rotate-2 bg-[#F2F3F2]' title='total commits' data='35'/>

            <FloatingCard className='absolute bottom-40 -right-20 rotate-12 bg-[#F2F3F2]' title='total prs' data='35'/>
            <FloatingCard className='absolute bottom-80 -left-20 -rotate-12 bg-[#F2F3F2]' title='total issues' data='35'/> */}

      <div className="mt-18 flex flex-col items-center justify-start gap-2">
        {/* <h1 className="text-3xl text-[#D0FFA4] z-10">#1 Typescript</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#2 Javascript</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#3 Golang</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#4 Python</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#5 Docker</h1> */}
        {languages.map((lang, index) => (
          <h1 key={index} className="z-10 text-2xl md:text-3xl text-[#D0FFA4]">
            {lang.name}
          </h1>
        ))}
      </div>

      <p className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-10 text-center text-md text-[#D0FFA4]">
        {" "}
       {totalIssues} Issues ?
      </p>

      <p className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 text-center text-md text-[#D0FFA4]">
        {totalCommits} Commits, No Regrets
      </p>
    </div>
  );
}
