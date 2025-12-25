import Image from "next/image";
import { Tilt } from "./motion-primitives/tilt";

export default function ShareCard({
  name,
  username,
  totalContributions,
  totalPrs,
  topLanguage,
  longestStreak,
  avatarUrl,
  averageCommitsPerDay,
}: {
  name: string;
  username: string;
  totalContributions: string;
  totalPrs: string;
  topLanguage: string;
  longestStreak: string;
  avatarUrl: string;
  averageCommitsPerDay: string;
}) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="relative max-h-[560px] max-w-[450px] rounded-2xl bg-[#F2F3F2] p-6 md:h-[610px] md:p-10">
        {/* <Share size={28} className="absolute  text-[#FF694D] cursor-pointer font-light top-10 right-10"/> */}
        <div className="relative min-h-28 w-fit min-w-28">
          <div className="absolute -right-1 -bottom-1 z-0 min-h-28 min-w-28 rounded-lg bg-[#FF694D]"></div>
          <div className="relative z-10 min-h-28 w-fit min-w-28 overflow-hidden rounded-lg border border-[#1A1A1A]">
            <Image
              src={avatarUrl}
              alt="git"
              width={112}
              height={112}
              className=""
              draggable={false}
            />
          </div>
        </div>

        <h1 className="z-10 mt-8 text-4xl font-bold text-[#FF694D]">{name}</h1>
        {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">200</h1> */}

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="">
            <p className="z-10 text-xl font-medium text-[#FF694D]">Contributions</p>
            <p className="z-10 text-xl text-[#FF694D]">{totalContributions}</p>
          </div>
          <div className="">
            <p className="z-10 text-xl font-medium text-[#FF694D]">Top Language</p>
            <p className="z-10 text-xl text-[#FF694D]">{topLanguage}</p>
          </div>
          <div className="">
            <p className="z-10 text-xl font-medium text-[#FF694D]">Total PRs</p>
            <p className="z-10 text-xl text-[#FF694D]">{totalPrs}</p>
          </div>
          <div className="">
            <p className="z-10 text-xl font-medium text-[#FF694D]">Longest Streak</p>
            <p className="z-10 text-xl text-[#FF694D]">{longestStreak}</p>
          </div>
        </div>

        <h2 className="z-10 mt-24 text-2xl font-medium text-[#FF694D]"> #{username}</h2>
        <p className="text-md z-10 leading-4 text-[#FF694D]">2025</p>
        <p className="text-md z-10 leading-4 text-[#FF694D]">ghwrap.vercel.app</p>
        {/* <Image
        src="warrior.svg"
        alt="git"
        width={300}
        height={400}
        className="absolute right-0 bottom-0"
      /> */}
        <p className="absolute top-6 right-6 z-10 text-right text-lg leading-5 text-[#FF694D] md:top-10 md:right-10">
          {" "}
          Average commits <br /> per day <br />
          {averageCommitsPerDay}
        </p>
      </div>
    </Tilt>
  );
}
