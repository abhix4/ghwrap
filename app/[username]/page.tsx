'use client'
import Button from "@/components/button";

import { useEffect, useState } from "react";
import {motion} from 'motion/react'
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

export default function UserPage(
){
    const [index, setIndex] = useState<number>(0)

    const [userData, setUserData] = useState<any>()
    const params = useParams<{ username: string }>();
    const username = params.username; 
    const tabs = [
        <IntroPage name={userData?.wrapped.profile.name} image={userData?.wrapped.profile.avatarUrl}/>,
        <CommitsPage totalCommits={userData?.wrapped.stats.totalContributions}/>,
        <TopLanguages languages={userData?.wrapped?.topLanguages}/>,
        <TopRepositories/>,
        <Streak/>,
        <StarsRecieved/>,
        <ShareCard/>
    ]

    const fetchData = async () => {
      
        const data = await fetch(`/api/profile/${username}`,{
            method:"GET"
        }).then(res => res.json())
   
        setUserData(data)
        console.log(data)
        return data;
    }

    useEffect(() => {
        fetchData()
    },[username])

    if(!userData)
    return (
        <div className="w-full h-screen bg-[#222222] flex justify-center items-center px-40 overflow-hidden">
           <h1 className="text-4xl text-[#F2F3F2]">Loading...</h1>
        </div>
    )
    else
    return (
        <div className="w-full h-screen bg-[#222222] flex justify-between items-center px-40 overflow-hidden">
            {
                <Button variant="left" handleClick={() => setIndex(prev => prev-1)} disable={index === 0}/>
            }
            {
              tabs[index]
            }
            {
                 <Button variant="right" handleClick={() => setIndex(prev => prev+1)} disable={index === 6}/>
            }

        </div>
    )
}