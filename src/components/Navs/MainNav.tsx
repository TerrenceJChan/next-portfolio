"use client";

import navLinks from "@/assets/data/navLinks.json";
import getScreenSize from "@/helpers/useScreenSize";
import clsx from "clsx";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const cinzel = Cinzel({ subsets: ["latin"], weight: "700" });

const MainNav = () => {
  const screenSize = getScreenSize();
  const pathName = usePathname();

  return (
    <nav className="mb-8 flex items-baseline justify-between py-8">
      <Link
        href="/"
        className={clsx(
          "bg-gray-50/80 text-base font-bold tracking-[0.3rem] whitespace-nowrap transition-all hover:text-green-700 lg:text-2xl lg:tracking-wider",
          cinzel.className,
        )}
      >
        Terrence J Chan
      </Link>
      {screenSize === "mobile" && <MobileNav />}
      {screenSize !== "mobile" && (
        <ul className="flex items-baseline gap-4">
          {navLinks.data.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "relative transition-all after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:text-green-700 hover:after:w-full",
                  pathName === link.href && "text-green-800 after:w-full",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MainNav;
