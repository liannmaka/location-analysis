"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLink {
  linkName: string;
  to: string;
}

const navLinks: NavLink[] = [
  {
    linkName: "Deal Overview",
    to: "#",
  },
  {
    linkName: "Workshop",
    to: "#",
  },
  {
    linkName: "Pipeline",
    to: "#",
  },
  {
    linkName: "Settings",
    to: "#",
  },
  {
    linkName: "Location",
    to: "/location",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="mt-4">
      <div className="relative cursor-pointer animate-pulse w-11 h-6">
        <Image
          src="/back-arrow.svg"
          alt="Go back Arrow"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-wrap-reverse justify-between items-center mb-8 mt-5 md:mt-2">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-36">
          <nav>
            <ul className="flex flex-wrap space-x-3 md:space-x-6 font-normal text-xs md:text-sm text-[#71717A]">
              {navLinks.map(({ linkName, to }, index) => (
                <li key={index}>
                  <Link
                    href={to}
                    aria-label={`Navigate to ${linkName}`}
                    className={`${
                      pathname === to
                        ? "text-black font-bold"
                        : "hover:text-black"
                    }`}
                  >
                    {linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex mb-5 lg:mb-0">
            <div className="relative w-[35px] h-[38px]">
              <Image
                src="/search-avatar.svg"
                alt="Search Icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full">
              <input
                type="search"
                name="search"
                placeholder="Ask me anything!"
                className="border-[1.5px] border-[#ccc] outline-none rounded-tl-xl rounded-tr-xl rounded-br-xl font-normal text-xs md:text-sm text-[#71717A] ml-3 w-[200px] sm:w-[250px] lg:w-[320px] py-2 pl-2"
              />
            </div>
          </div>
        </div>
        <div className="relative mr-3 hidden lg:block w-[74px] h-[45px]">
          <Image
            src="/starboard-logo.svg"
            alt="StarBoard Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center">
        <h1 className="font-bold text-xl md:text-2xl my-2 sm:my-0">
          Location Analysis
        </h1>
        <div>
          <h2 className="font-medium text-sm md:text-lg sm:text-center">
            Underwriting Model
          </h2>
          <p className="flex bg-[#F4F4F5] font-medium text-xs md:text-sm py-2 px-4 mt-1">
            Industrial.Template.v2.4.xlsx
            <span className="relative size-3 self-center ml-1">
              <Image
                src="/down-arrow.svg"
                alt="Dropdown Arrow"
                fill
                className="object-contain"
              />
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
