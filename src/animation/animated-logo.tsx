import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AnimatedLogo() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      className="h-full w-full"
      style={{
        filter:
          theme === "dark"
            ? "brightness(0) saturate(100%) invert(95%) sepia(12%) saturate(285%) hue-rotate(347deg) brightness(98%) contrast(94%)" // Light beige #EBE7DD
            : "brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(831%) hue-rotate(4deg) brightness(93%) contrast(88%)", // Dark beige for light mode
      }}
    >
      <Image
        src="/EJ.ico"
        alt="Logo"
        width={56}
        height={56}
        className="h-full w-full object-contain"
        priority
      />
    </motion.div>
  );
}
