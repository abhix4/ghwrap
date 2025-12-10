import Image from "next/image";

export default function ShareCard({
  name,
  username,
  totalContributions,
  totalPrs,
  topLanguage,
  longestStreak,
  avatarUrl,
}: {
  name: string;
  username: string;
  totalContributions: string;
  totalPrs: string;
  topLanguage: string;
  longestStreak: string;
  avatarUrl: string;
}) {
  return (
    <div className="relative h-[70%] w-[450px] rounded-2xl bg-[#F2F3F2] p-12">
      {/* <Share size={28} className="absolute  text-[#FF694D] cursor-pointer font-light top-10 right-10"/> */}
      <div className="min-h-28 w-fit min-w-28 overflow-hidden rounded-lg border border-[#FF694D]">
        <Image src={avatarUrl} alt="git" width={112} height={112} className="" />
      </div>

      <h1 className="z-10 mt-12 text-4xl font-bold text-[#FF694D]">{name}</h1>
      {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">200</h1> */}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="">
          <p className="z-10 text-2xl font-medium text-[#FF694D]">Contributions</p>
          <p className="z-10 text-xl text-[#FF694D]">{totalContributions}</p>
        </div>
        <div className="">
          <p className="z-10 text-2xl font-medium text-[#FF694D]">Top Language</p>
          <p className="z-10 text-xl text-[#FF694D]">{topLanguage}</p>
        </div>
        <div className="">
          <p className="z-10 text-2xl font-medium text-[#FF694D]">Total PRs</p>
          <p className="z-10 text-xl text-[#FF694D]">{totalPrs}</p>
        </div>
        <div className="">
          <p className="z-10 text-2xl font-medium text-[#FF694D]">Longest Streak</p>
          <p className="z-10 text-xl text-[#FF694D]">{longestStreak}</p>
        </div>
      </div>

      <h2 className="z-10 mt-16 text-2xl font-medium text-[#FF694D]"> @{username}</h2>
      <p className="z-10 text-lg text-[#FF694D]">2025</p>
      <p className="z-10 text-lg text-[#FF694D]">ghwrap.com</p>
      <Image
        src="Vector.svg"
        alt="git"
        width={160}
        height={160}
        className="absolute right-0 bottom-0"
      />
      <p className="absolute top-12 right-12 z-10 text-right text-lg leading-7 text-[#FF694D]">
        {" "}
        Average commits per day <br /> 0.2
      </p>
    </div>
  );
}
