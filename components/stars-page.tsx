import Image from "next/image";
import { motion } from "motion/react";

export default function StarsRecieved({ stars }: { stars: string }) {
  return (
    <div className="relative flex min-h-[650px] max-w-[700px] flex-col items-center rounded-2xl bg-[#648493] p-6 md:min-w-[700px] md:p-12 md:bg-[url('/bg10.svg')] bg-contain bg-bottom bg-no-repeat">
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

      <h1 className="z-10 text-center mt-22 text-5xl text-[#F4F5C8] md:text-7xl tracking-tight">Stars Recieved</h1>
      <h1 className="z-10 mt-12 text-center text-5xl font-medium text-[#F4F5C8] md:text-8xl leading-8 tracking-tight">
        {stars}
      </h1>

      <p className="z-10 mt-8 text-center text-2xl text-[#F4F5C8] md:mt-16 md:text-4xl tracking-tight">
        That’s {stars} developers saying:
      </p>
      <p className="z-10 text-center text-2xl text-[#F4F5C8] md:text-4xl tracking-tight">
        “This helped me build.”
      </p>
    </div>
  );
}
