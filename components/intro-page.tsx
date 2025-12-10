import { motion } from "motion/react";
import Image from "next/image";

type IntroPageProp = {
  name: string;
  image: string;
  avgCommits: string;
};

export default function IntroPage({ name, image, avgCommits }: IntroPageProp) {
  return (
    <div className="relative flex h-[80%] max-w-3xl flex-col justify-between overflow-hidden rounded-2xl bg-[#F2F3F2] p-12 shadow-xl">
      {/* <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            /> */}
      <div>
        <h1 className="z-10 text-3xl font-medium text-[#FF694D] md:text-7xl">
          2025<span className="text-lg font-normal">Year in review</span>
        </h1>
        <h1 className="z-20 mt-1 text-5xl font-medium text-[#FF694D]">{name}</h1>
        {/* <Image
            src='/spiral.svg'
            alt="git"
            width={1500}
            height={1500}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />  */}
        <Image
          src={image}
          alt="git"
          width={200}
          height={200}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full"
        />
      </div>
      <p className="z-10 text-7xl font-medium text-[#FF694D]">
        Let's <br /> unwrap your year.
      </p>
      <p className="absolute top-12 right-12 z-10 text-right text-lg leading-7 text-[#FF694D]">
        {" "}
        Average commits per day <br /> {avgCommits}
      </p>
    </div>
  );
}
