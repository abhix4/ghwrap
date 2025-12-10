import Image from "next/image";
import { motion } from "motion/react";

export default function StarsRecieved({ stars }: { stars: string }) {
  return (
    <div className="relative flex h-[80%] w-3xl flex-col items-center rounded-2xl bg-[#564DF8] p-12">
      {/* <motion.div className="absolute right-40 bottom-0"
                             initial={{translateY:-500}}
                             animate={{translateY: 0}}
                             transition={{type: 'spring', duration: 1.8}}
                             >
                               <Image
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
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
                              src='/g3.svg'
                              alt="git"
                               width={150}
                              height={150}
                              />
                             </motion.div>
                   */}

      <h1 className="z-10 text-center text-7xl text-[#FFFFFF]">Stars Recieved</h1>
      <h1 className="z-10 mt-12 text-center text-7xl font-medium text-[#BFF840]">{stars}</h1>
      <motion.div
        className="relative mt-16 inline-flex items-center justify-center"
        style={{ perspective: 1000 }} // 👈 important for 3D
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl"
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* 3D spinning badge */}
        <motion.div
          className="relative rounded-full bg-black/60 p-3 shadow-[0_0_28px_rgba(16,185,129,0.35)]"
          style={{
            transformStyle: "preserve-3d", // 👈 keeps it 3D
          }}
          animate={{
            rotateY: 360, // 👈 3D spin
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/g3.svg"
            alt="Git Achievement"
            width={130}
            height={130}
            className="drop-shadow-md"
          />
        </motion.div>
      </motion.div>
      <p className="z-10 mt-8 text-center text-4xl text-[#FFFFFF]">
        That’s {stars} developers saying:
      </p>
      <p className="z-10 text-center text-4xl text-[#FFFFFF]">“This helped me build.”</p>
    </div>
  );
}
