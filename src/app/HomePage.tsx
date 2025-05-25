"use client";

import swordyTerrenceImage from "@/assets/images/swordy-terrence.png";
import github from "@/assets/svgs/GitHub.svg";
import linkedin from "@/assets/svgs/LinkedIn.svg";
import HomePageSection from "@/components/HomePageSection";
import TypographicLogo from "@/components/TypographicLogo";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-2xl flex-col gap-32 lg:max-w-7xl">
        {/* Hero */}
        <div className="relative grid max-h-screen grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8">
          <div className="relative flex min-h-screen flex-col items-center justify-around gap-4">
            <TypographicLogo />
            <div className="flex flex-col items-center gap-2">
              <motion.p
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, bounce: 0 }}
                className="w-fit rounded-sm bg-white/80 px-2 font-light tracking-widest sm:bg-transparent sm:text-xl"
              >
                Web Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.75, bounce: 0 }}
                className="w-fit rounded-sm bg-white/80 px-2 font-light tracking-widest sm:bg-transparent sm:text-xl"
              >
                Web Designer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1, bounce: 0 }}
                className="w-fit rounded-sm bg-white/80 px-2 font-light tracking-widest sm:bg-transparent sm:text-xl"
              >
                Sword Enthusiast
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5, bounce: 0 }}
              onClick={() => {
                document.getElementById("intro")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex w-fit animate-bounce cursor-pointer flex-col items-center rounded-sm bg-white/80 px-2 font-light tracking-widest sm:bg-transparent"
            >
              Allow me to introduce myself ↓
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, bounce: 0 }}
            className="-z-20 flex min-h-0 justify-center sm:relative sm:min-h-screen"
          >
            <Image
              src={swordyTerrenceImage}
              alt="Terrence examining his Chinese Jian shortsword."
              fill
              objectFit="contain"
              className="bottom-0 pt-28 opacity-80 sm:pt-8 sm:opacity-100"
            />
          </motion.div>
        </div>
        {/* End Hero */}

        {/* Intro */}
        <HomePageSection id="intro">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_3fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, bounce: 0 }}
              className="flex h-full w-full flex-col gap-4 rounded-md bg-slate-50 p-8 shadow-2xl"
            >
              <p className="text-xl font-light md:text-2xl">
                Web development is the intersection of art and utility.
              </p>
              <p className="text-xl font-light md:text-2xl">
                The screen is my palette and code is my brush.
              </p>
            </motion.div>
            <div className="flex flex-col gap-4 p-8">
              <div className="flex flex-col gap-2">
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.25, bounce: 0 }}
                >
                  I studied political science, business, and economics.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, bounce: 0 }}
                >
                  I work as a web developer professionally.
                </motion.p>
              </div>
              <div className="flex flex-col gap-2">
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.75, bounce: 0 }}
                >
                  Find me online on these platforms:
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1, bounce: 0 }}
                >
                  <div className="flex gap-8">
                    <Link
                      href="https://github.com/terrencejchan"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image src={github} alt="Github" />
                      <span className="underline transition-all hover:text-red-500">
                        Github
                      </span>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/terrencejchan"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image src={linkedin} alt="LinkedIn" />
                      <span className="underline transition-all hover:text-red-500">
                        LinkedIn
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.25, bounce: 0 }}
                >
                  Email me directly:
                  <div className="flex flex-col gap-2">
                    <Link
                      href="mailto:contact@terrencejchan.com"
                      className="flex gap-2"
                    >
                      <Mail />{" "}
                      <span className="underline transition-all hover:text-red-500">
                        contact@terrencejchan.com
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </HomePageSection>
        {/* End Intro */}
      </div>
    </div>
  );
};

export default HomePage;
