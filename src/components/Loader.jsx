import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      setTimeout(() => onFinish(), 2500); // Change this to match your animation duration
    };
    sequence();
  }, [controls, onFinish]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-zinc-900 flex items-center justify-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-violet-500 tracking-widest"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        Ace Developer
      </motion.h2>
    </div>
  );
};

export default LoadingScreen;
