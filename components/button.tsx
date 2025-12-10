import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "motion/react";

type ButtonProps = {
  variant: string;
  handleClick?: () => void;
  disable?: boolean;
};

export default function Button({ variant, handleClick, disable }: ButtonProps) {
  return (
    <div
      className={`relative min-h-12 min-w-14 rounded-md bg-[#FF694D] shadow-sm ${disable ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"} `}
    >
      <motion.div
        className={`absolute top-0 right-0 h-12 w-14 cursor-pointer rounded-md border border-[#2222224b] bg-[#FEFEFF]`}
        whileHover={{ translateX: 5, translateY: 5 }}
        whileTap={{ translateX: 0, translateY: 0 }}
      >
        {variant === "right" ? (
          <button
            type="button"
            className="flex h-full w-full cursor-pointer items-center justify-center"
            aria-label="Move right"
            onClick={handleClick}
          >
            <MoveRight />
          </button>
        ) : (
          <button
            type="button"
            className="flex h-full w-full cursor-pointer items-center justify-center"
            aria-label="Move left"
            onClick={handleClick}
          >
            <MoveLeft />
          </button>
        )}
      </motion.div>
    </div>
  );
}
