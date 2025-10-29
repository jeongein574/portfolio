import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import FadeLeft from "@/animation/fade-left";
import LinkedInImg from "@/public/images/LinkedIn.jpeg";
import studyImg from "@/public/images/study.jpeg";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-full flex-col items-center gap-6 px-6 pt-20 sm:px-14 md:mt-20 md:px-20">
      <div
        className="relative flex w-full items-end justify-between"
        style={{ minHeight: "700px" }}
      >
        <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96">
          <AnimatePresence>
            <FadeLeft key="duotone-image" duration={0.6} delay={0.2}>
              <DuotoneImage
                src={studyImg}
                width={400}
                height={500}
                className="h-auto w-full"
                alt="duotone portrait"
                lightColor="#E8E3D8"
                darkColor="#2A2A2A"
              />
            </FadeLeft>
          </AnimatePresence>
        </div>

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence>
            <FadeUp key="title-name" duration={0.6}>
              <h1 className="title-font whitespace-nowrap text-lg text-foreground sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                EIN JEONG
              </h1>
            </FadeUp>
          </AnimatePresence>
        </div>

        <div className="absolute right-0 top-0 w-40 sm:w-48 md:w-60 lg:w-80 xl:w-96">
          <AnimatePresence>
            <FadeRight key="normal-image" duration={0.6} delay={0.2}>
              <Image
                src={LinkedInImg}
                width={500}
                height={600}
                className="h-auto w-full"
                alt="profile portrait"
              />
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>

      {/* Bio text below images */}
      <div className="mt-10 w-full max-w-4xl px-4 text-center">
        <AnimatePresence>
          <FadeUp key="description-1" duration={0.6} delay={0.4}>
            <p className="content-font mt-4 text-sm text-foreground sm:text-base md:text-lg lg:text-xl">
              I&apos;m Ein Jeong, an undergraduate at Carnegie Mellon University
              studying Business Administration and Computer Science. I&apos;m
              passionate about combining data-driven thinking with creativity —
              exploring quantitative analysis and AI systems to build scalable,
              impactful solutions. In my free time, I find inspiration in
              photography, jazz music, and travel.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.6}>
            <p className="content-font mt-6 text-sm text-foreground sm:text-base md:text-lg lg:text-xl">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in React.js, JavaScript, and web
              development.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
