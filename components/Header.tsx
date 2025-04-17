"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="mt-4">
      <div className="cursor-pointer animate-pulse">
        <Image src="/back-arrow.svg" alt="Back Arrow" width={44} height={24} />
      </div>
  
      <div className="flex flex-wrap-reverse justify-between items-center mb-8 mt-5 md:mt-2">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-36">
          <nav>
            <ul className="flex flex-wrap space-x-3 md:space-x-6 font-normal text-xs md:text-sm text-[#71717A]">
              <li className="hover:text-black">
                <Link href="#">Deal Overview</Link>
              </li>
              <li className="hover:text-black">
                <Link href="#">Workshop</Link>
              </li>
              <li className="hover:text-black">
                <Link href="#">Pipeline</Link>
              </li>
              <li className="hover:text-black">
                <Link href="#">Settings</Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className={clsx({
                    "text-black font-bold": pathname === "/location",
                  })}
                >
                  Location
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex mb-5 lg:mb-0">
            <Image
              src="/search-avatar.svg"
              alt="Search Avatar"
              width={32}
              height={32}
            />
            <div className="w-full">
              <input
                type="search"
                placeholder="Ask me anything!"
                className="border-[1.5px] border-[#ccc] outline-none rounded-tl-xl rounded-tr-xl rounded-br-xl font-normal text-xs md:text-sm text-[#71717A] ml-3 w-[200px] sm:w-[250px] lg:w-[320px] py-2 pl-2"
              />
            </div>
          </div>
        </div>

        <div className="mr-3 hidden lg:block">
          <Image
            src="/starboard-logo.svg"
            alt="StarBoard Logo"
            width={74}
            height={46}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center">
        <h1 className="font-bold text-xl md:text-2xl my-2 sm:my-0">Location Analysis</h1>
        <div>
          <h2 className="font-medium text-sm md:text-lg sm:text-center">
            Underwriting Model
          </h2>
          <p className="flex bg-[#F4F4F5] font-medium text-xs md:text-sm py-2 px-4 mt-1">
            Industrial.Template.v2.4.xlsx
            <span className="self-center ml-1">
              <Image
                src="/down-arrow.svg"
                alt="Down Arrow"
                width={12}
                height={12}
              />
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
