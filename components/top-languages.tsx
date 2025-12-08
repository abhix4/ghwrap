import {motion} from 'motion/react'
import Image from 'next/image'

export default function TopLanguages({languages}: {languages: any[]}){
    return (
          <div className="w-3xl h-[80%] bg-[#006EE9] rounded-2xl p-12 relative bg-[url('/v3.svg')] bg-no-repeat bg-bottom">
            {/* <Image
            src='/Vector.svg'
            alt="git"
            width={300}
            height={500}
            className="absolute right-0 bottom-0"
            /> */}
            <h1 className="text-7xl text-[#D0FFA4] font-medium z-10 text-center">Top Languages</h1>
            <p className="text-2xl text-[#D0FFA4]  z-10 text-center">that you whispered to daily</p>


                
    <motion.div className="absolute -left-20 bottom-60 -rotate-12"
           initial={{translateX:-200}}
           animate={{translateX: 0}}
           transition={{type: 'spring', duration: 1.2}}
           >
             <Image
            src='/l2.svg'
            alt="git"
             width={150}
            height={150}
            />
           </motion.div>

    <motion.div className="absolute -right-20 bottom-70 rotate-12"
           initial={{translateX:300}}
           animate={{translateX: 0}}
           transition={{type: 'spring', duration: 1.2}}
           >
             <Image
            src='/l1.svg'
            alt="git"
             width={150}
            height={150}
            className='rounded-lg overflow-hidden'
            />

            
           </motion.div>


    <motion.div className="absolute right-20 bottom-0 -rotate-12"
           initial={{translateY:300}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 0.8}}
           >
             <Image
            src='/l3.svg'
            alt="git"
             width={150}
            height={150}
            className='rounded-lg overflow-hidden'
            />

            
           </motion.div>

    <motion.div className="absolute left-20 bottom-0 "
           initial={{translateY:300}}
           animate={{translateY: 0}}
           transition={{type: 'spring', duration: 1.2}}
           >
             <Image
            src='/l6.svg'
            alt="git"
             width={150}
            height={150}
            className='rounded-lg overflow-hidden'
            />

            
           </motion.div>



            <div className="gap-2 flex flex-col items-center justify-start mt-18">
                {/* <h1 className="text-3xl text-[#D0FFA4] z-10">#1 Typescript</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#2 Javascript</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#3 Golang</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#4 Python</h1>
                <h1 className="text-3xl text-[#D0FFA4] z-10">#5 Docker</h1> */}
                {
                  languages.map((lang,index) => <h1 key={index} className="text-3xl text-[#D0FFA4] z-10">{lang.name}</h1>)
                }
            </div>
            
        </div>
    )
}