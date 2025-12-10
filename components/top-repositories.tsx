import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function TopRepositories({ repositories, totalPrs, activeDays }: { repositories: any[]; totalPrs: string; activeDays: string }) {
  return (
    <div className="relative h-[80%] max-w-3xl md:min-w-3xl rounded-2xl bg-[#F2F3F2] p-6 md:p-12">
      <h1 className="z-10 text-center text-5xl md:text-7xl font-medium text-[#FF694D]">Top Repositories</h1>
      <h1 className="z-10 text-center text-xl md:text-2xl text-[#FF694D]">Your Favorite Battlefields</h1>

      <div className="mt-8 md:mt-18 flex flex-col items-center gap-2">
        {repositories.map((repo, index) => (
          <h1 key={index} className="z-10 text-2xl md:text-3xl text-[#FF694D]">
            {repo.name}
          </h1>
        ))}
      </div>
      <Image src="/512.gif" alt="img" width={100} height={100} className="mx-auto mt-12" />

      <FloatingCard
        className="absolute -right-20 bottom-40 rotate-12 bg-[#F2F3F2] md:block hidden"
        title="Active days"
        data={activeDays}
      />
      <FloatingCard
        className="absolute bottom-80 -left-20 -rotate-12 bg-[#F2F3F2] hidden md:block"
        title="Total PRs"
        data={totalPrs}
      />

      <p className="absolute md:hidden right-6 bottom-6 md:right-12 md:bottom-12 z-10 text-center text-md text-[#FF694D]">
        {" "}
       {totalPrs} PRs raised
      </p>

      <p className="absolute md:hidden bottom-6 left-6 md:bottom-12 md:left-12 z-10 text-center text-md text-[#FF694D]">
        {activeDays} Active Days
      </p>
    </div>
  );
}
