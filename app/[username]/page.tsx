'use client'
import Button from "@/components/button";
import { Share } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {motion} from 'motion/react'
import IntroPage from "@/components/intro-page";
import CommitsPage from "@/components/commits-page";
import TopLanguages from "@/components/top-languages";
import TopRepositories from "@/components/top-repositories";
import Streak from "@/components/longest-streak";
import StarsRecieved from "@/components/stars-page";
import ShareCard from "@/components/share-card";

export default function UserPage(){
    const [index, setIndex] = useState<number>(0)
    const tabs = [
        <IntroPage/>,
        <CommitsPage/>,
        <TopLanguages/>,
        <TopRepositories/>,
        <Streak/>,
        <StarsRecieved/>,
        <ShareCard/>
    ]
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