import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="title-font bg-accent bg-clip-text py-2 text-4xl text-transparent sm:text-5xl md:text-6xl xl:text-7xl">
                Ein Jeong
              </h1>
              <span className="content-font text-xl text-zinc-900 dark:text-zinc-100 md:text-2xl">
                📍 PITTSBURGH, PA
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="content-font mt-8 max-w-3xl text-base text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I&apos;m a student at carnegie mellon university studying{" "}
                <span className="font-semibold text-accent">CS + Business</span>
                .<br />I recently worked as a quantitative researcher at{" "}
                <span className="font-semibold text-accent">
                  Korea Investment and Securities
                </span>
                .{" "}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
