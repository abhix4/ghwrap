import { MoveLeft, MoveRight } from "lucide-react"
import {motion} from 'motion/react'

type ButtonProps = {
    variant : string,
    handleClick?: () => void
    disable?: boolean
}

export default function Button({
    variant,
    handleClick,
    disable
}: ButtonProps){
    return (
        <div  className={`
            relative bg-[#FF694D] min-h-12 min-w-14 rounded-md shadow-sm
            ${disable ? "opacity-50 cursor-not-allowed pointer-events-none" : "opacity-100 cursor-pointer"}
        `} >
            <motion.div className={`absolute top-0 right-0 border border-[#2222224b]  bg-[#FEFEFF] h-12 w-14 rounded-md cursor-pointer `}
            whileHover={{ translateX: 5, translateY: 5 }}
            whileTap={{ translateX: 0, translateY: 0}}
            >
                {
                    variant === "right" ? (
                        <button 
                            type="button"
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                            aria-label="Move right"
                            onClick={handleClick}
                        >
                            <MoveRight />
                        </button>
                    ) : (
                        <button 
                            type="button"
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                            aria-label="Move left"
                            onClick={handleClick}
                        >
                            <MoveLeft />
                        </button>
                    )
                }
            </motion.div>
        </div>
    )
}