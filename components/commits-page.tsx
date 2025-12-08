import {motion} from 'motion/react'
import Image from 'next/image'


export default function CommitsPage({totalCommits}: {totalCommits: string}){
    return (
        <div className="w-3xl h-[80%] bg-[#F2F3F2] rounded-2xl p-12 relative bg-[url('/v3.svg')] bg-no-repeat bg-bottom">
           <motion.div className="absolute right-40 bottom-0"
           initial={{translateY:-500}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 1.8}}
           >
             <Image
            src='/g2.svg'
            alt="git"
            width={150}
            height={150}
            />
           </motion.div>

             <motion.div className="absolute left-40 bottom-0"
           initial={{translateY:-500}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.0}}
           >
             <Image
            src='/g2.svg'
            alt="git"
           width={150}
            height={150}
            />
           </motion.div>

    <motion.div className="absolute left-60 bottom-0"
           initial={{translateY:-600}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 1.2}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>

    <motion.div className="absolute left-80 bottom-0"
           initial={{translateY:-500}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 1.4}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>
{/* here it is */}
               <motion.div className="absolute left-0 bottom-30"
           initial={{translateY:-600}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 4}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>



             <motion.div className="absolute left-0 bottom-0"
           initial={{translateY:-500}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.6}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>


             <motion.div className="absolute right-0 bottom-0"
           initial={{translateY:-700}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 1.8}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>


             <motion.div className="absolute right-60 bottom-0"
           initial={{translateY:-800}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.0}}
           >
             <Image
            src='/g2.svg'
            alt="git"
            width={150}
            height={150}
            />
           </motion.div>


             <motion.div className="absolute right-40 bottom-0"
           initial={{translateY:-500}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.2}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>


             <motion.div className="absolute left-20 bottom-0"
           initial={{translateY:-600}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.4}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>


             <motion.div className="absolute right-20 bottom-0"
           initial={{translateY:-600}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 2.8}}
           >
             <Image
            src='/g2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>



            {/* <h1 className="text-7xl text-[#FF694D] font-bold z-10">Total Contributions</h1>
            <h1 className="text-7xl text-[#FF694D] font-bold z-10">500</h1> */}
            <p className="text-6xl text-[#FF694D] font-medium z-10 text-center">Some call it grinding. <br />
                You call it fun.</p>
            <p className="text-4xl text-[#FF694D] text-center font-semibold z-10 mt-16">You have Contributed </p>
            <p className="text-5xl text-[#FF694D] font-bold  z-10 text-center mt-8"> {totalCommits} times</p>
            <p className="text-3xl text-[#FF694D] z-10 text-center"> in 2025</p>
            
        </div>
    )
}