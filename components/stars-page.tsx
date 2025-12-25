import Image from "next/image";
import { motion } from "motion/react";
import { TextEffect } from "./motion-primitives/text-effect";

export default function StarsRecieved({ stars }: { stars: string }) {
  return (
    <div className="relative flex min-h-[500px] max-w-[700px] flex-col items-center rounded-2xl bg-[#648493] bg-[url('/bg10.svg')] bg-cover bg-no-repeat p-6 md:min-h-[650px] md:min-w-[700px] md:bg-contain md:p-12">
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
                             </motion.div>min-h-[500px] md:
                   */}

      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 mt-22 text-center text-5xl tracking-tight text-[#F4F5C8] md:text-7xl"
      >
        Stars Recieved
      </TextEffect>
      <motion.h1
        className="z-10 mt-12 text-center text-5xl leading-8 font-medium tracking-tight text-[#F4F5C8] md:text-8xl"
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
      >
        {stars}
      </motion.h1>

      <p></p>
      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 mt-8 text-center text-2xl tracking-tight text-[#F4F5C8] md:mt-16 md:text-4xl"
        delay={0.4}
      >
        {`That’s ${stars} developers saying:`}
      </TextEffect>
      <p></p>
      <TextEffect
        per="word"
        as="p"
        preset="slide"
        className="z-10 text-center text-2xl tracking-tight text-[#F4F5C8] md:text-4xl"
        delay={0.8}
      >
        “This helped me build.”
      </TextEffect>
    </div>
  );
}
