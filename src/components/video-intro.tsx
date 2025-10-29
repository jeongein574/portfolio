"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntro() {
  const [showVideo, setShowVideo] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setFadeOut(true);
      setTimeout(() => {
        setShowVideo(false);
      }, 1000);
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, []);

  if (!showVideo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative -mt-20 flex min-h-screen w-full items-center justify-center bg-background"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-auto w-full max-w-4xl px-6"
        >
          <source src="/Ein Jeong animation.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </AnimatePresence>
  );
}
