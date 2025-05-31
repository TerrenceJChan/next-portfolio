"use client";

import navLinks from "@/assets/data/navLinks.json";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeSideNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed top-1/2 left-8 -translate-y-1/2"
    >
      <ul className="flex flex-col gap-4">
        {navLinks.data.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="relative opacity-50 transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:text-green-700 hover:opacity-100 hover:after:w-full"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default HomeSideNav;
