import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function TopRepositories({ repositories }: { repositories: any[] }) {
  return (
    <div className="relative h-[80%] w-3xl rounded-2xl bg-[#F2F3F2] bg-[url('/v3.svg')] bg-bottom bg-no-repeat p-12">
      <h1 className="z-10 text-center text-7xl font-medium text-[#FF694D]">Top Repositories</h1>
      <h1 className="z-10 text-center text-2xl text-[#FF694D]">Your Favorite Battlefields</h1>

      <div className="mt-18 flex flex-col items-center gap-2">
        {repositories.map((repo, index) => (
          <h1 key={index} className="z-10 text-3xl text-[#FF694D]">
            {repo.name}
          </h1>
        ))}
      </div>
      <Image src="/512.gif" alt="img" width={100} height={100} className="mx-auto mt-12" />

      <FloatingCard
        className="absolute -right-20 bottom-40 rotate-12 bg-[#F2F3F2]"
        title="active days"
        data="35"
      />
      <FloatingCard
        className="absolute bottom-80 -left-20 -rotate-12 bg-[#F2F3F2]"
        title="total PRs"
        data="35"
      />
    </div>
  );
}
