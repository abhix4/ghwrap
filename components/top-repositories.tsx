import { motion } from "motion/react";
import Image from "next/image";
import FloatingCard from "./floating-card";

export default function TopRepositories({
  repositories,
  totalPrs,
  activeDays,
}: {
  repositories: any[];
  totalPrs: string;
  activeDays: string;
}) {
  return (
    <div className="relative min-h-[500px] max-w-[700px] rounded-2xl bg-[#F2F3F2] bg-[url('/bg4.svg')] bg-contain bg-bottom bg-no-repeat p-6 md:min-h-[650px] md:min-w-[700px] md:p-12">
      <h1 className="z-10 text-center text-5xl font-medium tracking-tight text-[#FF694D] md:text-7xl">
        Top Repositories
      </h1>
      <h1 className="z-10 text-center text-xl tracking-tight text-[#FF694D] md:text-2xl">
        Your Favorite Battlefields
      </h1>

      <div className="mt-8 flex flex-col items-center gap-2 tracking-tight md:mt-18">
        {repositories.map((repo, index) => (
          <h1 key={index} className="z-10 text-2xl text-[#FF694D] md:text-3xl">
            {repo.name}
          </h1>
        ))}
      </div>
      <Image src="/512.gif" alt="img" width={100} height={100} className="mx-auto mt-12" />

      <FloatingCard
        className="absolute -right-20 bottom-40 hidden rotate-12 bg-[#F2F3F2] md:block"
        title="Active days"
        data={activeDays}
      />
      <FloatingCard
        className="absolute bottom-80 -left-20 hidden -rotate-12 bg-[#F2F3F2] md:block"
        title="Total PRs"
        data={totalPrs}
      />

      <p className="text-md absolute right-6 bottom-6 z-10 text-center text-[#FF694D] md:right-12 md:bottom-12 md:hidden">
        {" "}
        {totalPrs} PRs raised
      </p>

      <p className="text-md absolute bottom-6 left-6 z-10 text-center text-[#FF694D] md:bottom-12 md:left-12 md:hidden">
        {activeDays} Active Days
      </p>
    </div>
  );
}
