import { motion } from "motion/react";
import Image from "next/image";

type IntroPageProp = {
  name: string;
  image: string;
  avgCommits: string;
};

export default function IntroPage({ name, image, avgCommits }: IntroPageProp) {
  return (
    <div className="relative flex min-h-[500px] max-w-[700px] flex-col justify-between overflow-hidden rounded-2xl bg-[#F2F3F2] p-6 shadow-xl md:min-h-[650px] md:min-w-[700px] md:p-12">
      <div>
        <h1 className="z-10 mt-12 text-5xl font-medium text-[#FF694D] md:mt-0 md:text-7xl">
          2025<span className="ml-2 text-lg font-normal">Year in review</span>
        </h1>
        <h1 className="z-20 mt-1 text-5xl font-medium text-[#FF694D]">{name}</h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mt-3 md:mt-0">
          <div className="relative h-[140px] w-[140px] md:h-[208px] md:w-[208px]">
            {/* Shadow circle */}
            <div className="absolute -right-1 -bottom-1 z-10 h-[140px] w-[140px] rounded-full border border-[#1A1A1A] bg-[#FF694D] md:h-[208px] md:w-[208px]"></div>

            {/* Image wrapper */}
            <div className="relative z-30 h-[140px] w-[140px] overflow-hidden rounded-full border border-[#1A1A1A] md:h-[208px] md:w-[208px]">
              <Image
                src={image}
                alt="git"
                width={208} // Next.js requires a fixed intrinsic size
                height={208}
                className="h-full w-full object-cover"
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
