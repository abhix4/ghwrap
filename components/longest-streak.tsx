import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Streak() {
    const [count, setCount] = useState(0);
    
    // Countdown animation for the number
    useEffect(() => {
        const controls = animate(0, 56, {
            duration: 2,
            delay: 0.5,
            onUpdate(value) {
                setCount(Math.floor(value));
            }
        });
        
        return controls.stop;
    }, []);

    // Split text animation helper
    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: index * 0.03,
                    type: 'spring',
                    stiffness: 100
                }}
                style={{ display: 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ));
    };

    return (
        <div className="w-full max-w-3xl min-h-[80vh] bg-[#F2F3F2] rounded-2xl p-12 relative overflow-hidden flex flex-col items-center justify-center">
          

            <h1 className="text-7xl text-[#FF694D] text-center z-10 mb-4">
                {splitText('Longest Streak')}
            </h1>
            
            <motion.p 
                className="text-8xl text-[#FF694D] font-medium text-center z-10 mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
            >
                {count} <br /><span className='text-6xl'>Days</span>
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, scale: 0, }}
                animate={{ opacity: 1, scale: 1, }}
                transition={{ duration: 0.6, delay: 1.5, type: 'spring' }}
                className="mb-8"
            >
                <Image src="/fire.gif" alt='img' width={100} height={100} className='mx-auto mt-12' draggable={false}/>
            </motion.div>
            
            <div className="text-4xl text-[#FF694D] text-center z-10 space-y-2">
                <p>
                    {splitText('You didn\'t just push code.').map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 2 + i * 0.02
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </p>
                <p>
                    {splitText('You pushed yourself.').map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 2.5 + i * 0.02
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </p>
            </div>
        </div>
    );
}