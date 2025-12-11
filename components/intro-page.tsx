import { motion } from "motion/react";
import Image from "next/image";

type IntroPageProp = {
  name: string;
  image: string;
  avgCommits: string;
};

export default function IntroPage({ name, image, avgCommits }: IntroPageProp) {
  return (
    <div className="relative flex min-h-[650px] max-w-[700px] flex-col justify-between overflow-hidden rounded-2xl bg-[#F2F3F2] p-6 shadow-xl md:min-w-[700px] md:p-12">
      <div>
        <h1 className="z-10 mt-12 text-5xl font-medium text-[#FF694D] md:mt-0 md:text-7xl">
          2025<span className="ml-2 text-lg font-normal">Year in review</span>
        </h1>
        <h1 className="z-20 mt-1 text-5xl font-medium text-[#FF694D]">{name}</h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full">
          <div className="relative min-h-52 w-fit min-w-52">
            <div className="absolute -right-1 -bottom-1 z-10 min-h-52 min-w-52 rounded-full border border-[#1A1A1A] bg-[#FF694D]"></div>
            <div className="relative z-30 min-h-52 w-fit min-w-52 overflow-hidden rounded-full border border-[#1A1A1A]">
              <Image
                src={image}
                alt="git"
                width={208}
                height={208}
                className=""
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="z-10 text-5xl font-medium text-[#FF694D] md:text-7xl">
        Let's <br /> unwrap your year.
      </p>
      <p className="absolute top-6 right-6 z-10 text-right text-lg leading-6 text-[#FF694D] md:top-12 md:right-12">
        {" "}
        Average commits per day <br /> {avgCommits}
      </p>
    </div>
  );
}
