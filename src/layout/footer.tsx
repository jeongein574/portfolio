"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MailIcon } from "lucide-react";
import ContactButton from "@/components/contact-form/contact-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
        <div className="mx-auto flex min-h-[480px] w-full max-w-7xl flex-col justify-between bg-accent p-8 text-background sm:min-h-[540px] sm:p-12 md:min-h-[660px] lg:min-h-[840px] lg:p-20 xl:min-h-[900px]">
          <div className="flex w-full justify-between text-xs font-medium uppercase sm:text-sm">
            <span>EIN JEONG</span>
            <span>PITTSBURGH, PA</span>
          </div>

          <div className="flex w-full justify-between text-xs font-medium uppercase sm:text-sm">
            <a href="mailto:jeongein574@gmail.com" className="hover:underline">
              EMAIL
            </a>
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GITHUB
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LINKEDIN
            </a>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Image
                src="/EinJeong.ico"
                alt="EinJeong Logo"
                width={457}
                height={152}
                className="h-auto w-96 opacity-90 sm:h-auto sm:w-[32rem] md:h-auto md:w-[40rem] lg:h-auto lg:w-[52rem] xl:h-auto xl:w-[64rem]"
                style={{
                  filter:
                    theme === "dark"
                      ? "brightness(0) saturate(100%) invert(10%)"
                      : "brightness(0) saturate(100%) invert(92%) sepia(8%) saturate(200%) hue-rotate(330deg) brightness(102%) contrast(92%)",
                }}
              />
            </div>
            <div className="mt-20 flex justify-center">
              <ContactButton />
            </div>
          </div>
        </div>
      </footer>

      <button
        aria-label="open send mail modal"
        type="button"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2 text-background transition-colors duration-150 hover:bg-accent/80 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16"
        onClick={() => setShowModal(true)}
      >
        <MailIcon className="h-full w-full" />
      </button>

      <ContactFormModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
