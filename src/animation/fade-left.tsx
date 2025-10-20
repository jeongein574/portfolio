import { ReactNode } from "react";

import { motion } from "framer-motion";

export interface FadeLeftProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
}

export default function FadeLeft({
  children,
  duration,
  delay,
  className,
  whileInView = false,
}: FadeLeftProps) {
  const animation = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
