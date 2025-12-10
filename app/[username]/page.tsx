"use client";
import Button from "@/components/button";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import IntroPage from "@/components/intro-page";
import CommitsPage from "@/components/commits-page";
import TopLanguages from "@/components/top-languages";
import TopRepositories from "@/components/top-repositories";
import Streak from "@/components/longest-streak";
import StarsRecieved from "@/components/stars-page";
import ShareCard from "@/components/share-card";
import { useParams } from "next/navigation";

type UserPageProps = {
  params: {
    username: string;
  };
};

export default function UserPage() {
  const [index, setIndex] = useState<number>(0);

  const [userData, setUserData] = useState<any>();
  const params = useParams<{ username: string }>();
  const username = params.username;
  const tabs = [
    <IntroPage
      name={userData?.wrapped.profile.name}
      image={userData?.wrapped.profile.avatarUrl}
      avgCommits={userData?.wrapped.stats.averageCommitsPerDay}
    />,
    <CommitsPage totalCommits={userData?.wrapped.stats.totalContributions} />,
    <TopLanguages languages={userData?.wrapped?.topLanguages} totalIssues={userData?.wrapped.stats.totalIssues} totalCommits={userData?.wrapped.stats.totalCommits} />,
    <TopRepositories repositories={userData?.wrapped?.topRepos} totalPrs={userData?.wrapped.stats.totalPRs} activeDays={userData?.wrapped.stats.totalActiveDays}/>,
    <Streak longestStreak={userData?.wrapped.stats.longestStreak} bestMonth={userData?.wrapped.stats.mostEfficientMonth.month} bestDay={userData?.wrapped.stats.busiestDayOfWeek.day} />,
    <StarsRecieved stars={userData?.wrapped.stats.totalStars} />,
    <ShareCard
      avatarUrl={userData?.wrapped.profile.avatarUrl}
      name={userData?.wrapped.profile.name}
      username={userData?.wrapped.profile.login}
      totalContributions={userData?.wrapped.stats.totalContributions}
      totalPrs={userData?.wrapped.stats.totalPRs}
      topLanguage={userData?.wrapped?.topLanguages[0].name}
      longestStreak={userData?.wrapped.stats.longestStreak}
    />,
  ];

  const fetchData = async () => {
    const data = await fetch(`/api/profile/${username}`, {
      method: "GET",
    }).then((res) => res.json());

    setUserData(data);
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  if (!userData)
    return (
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-[#222222] px-40">
        <h1 className="text-4xl text-[#F2F3F2]">Loading...</h1>
      </div>
    );
  return (
    <>
      <div
        className="hidden h-screen w-full items-center justify-between overflow-hidden bg-[#222222] px-40 md:flex"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "ArrowRight") setIndex((prev) => prev + 1);
          else if (e.key === "ArrowLeft") setIndex((prev) => prev - 1);
        }}
      >
        {
          <Button
            variant="left"
            handleClick={() => setIndex((prev) => prev - 1)}
            disable={index === 0}
          />
        }
       
            {tabs[index]}
     
      
        {
          <Button
            variant="right"
            handleClick={() => setIndex((prev) => prev + 1)}
            disable={index === 6}
          />
        }
      </div>

      <div
        className="h-screen w-full  overflow-hidden bg-[#222222] p-4  md:hidden"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "ArrowRight") setIndex((prev) => prev + 1);
          else if (e.key === "ArrowLeft") setIndex((prev) => prev - 1);
        }}
      >
       
          {tabs[index]}
        
        <div className="flex gap-4 mt-4 w-fit mx-auto">
          {
            <Button
              variant="left"
              handleClick={() => setIndex((prev) => prev - 1)}
              disable={index === 0}
            />
          }

          {
            <Button
              variant="right"
              handleClick={() => setIndex((prev) => prev + 1)}
              disable={index === 6}
            />
          }
        </div>
      </div>
    </>
  );
}
