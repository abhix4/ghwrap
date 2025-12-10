import { motion } from "motion/react";
import Image from "next/image";

type IntroPageProp = {
  name: string;
  image: string;
  avgCommits: string;
};

export default function IntroPage({ name, image, avgCommits }: IntroPageProp) {
  return (
    <div className="relative flex h-[80%] max-w-3xl md:min-w-3xl flex-col justify-between overflow-hidden rounded-2xl bg-[#F2F3F2] p-6 md:p-12 shadow-xl">
      <div>
        <h1 className="z-10 text-5xl font-medium text-[#FF694D] md:text-7xl mt-12 md:mt-0">
          2025<span className="text-lg font-normal ml-2">Year in review</span>
        </h1>
        <h1 className="z-20 mt-1 text-5xl font-medium text-[#FF694D]">{name}</h1>
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform  rounded-full">
              <div className="relative min-h-52  w-fit min-w-52">
                   <div className="min-w-52 min-h-52 bg-[#FF694D] rounded-full absolute -right-1 -bottom-1 border border-[#1A1A1A] z-10"></div>
                    <div className="relative min-h-52  w-fit min-w-52 overflow-hidden rounded-full border border-[#1A1A1A] z-30">
                      <Image src={image} alt="git" width={208} height={208} className="" draggable={false}/>
                    </div>
        
              </div>
        </div>
      </div>
      <p className="z-10 text-5xl md:text-7xl font-medium text-[#FF694D]">
        Let's <br /> unwrap your year.
      </p>
      <p className="absolute top-6 right-6 md:top-12 md:right-12 z-10 text-right text-lg leading-6 text-[#FF694D]">
        {" "}
        Average commits per day <br /> {avgCommits}
      </p>
    </div>
  );
}
