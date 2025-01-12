import { Socials } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">

        </div>
        <h1 className="text-white text-[25px] font-semibold">
        Hasan Alhossiny
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social,index) => (
          <>
          <Link href={`${social.src}`} target="_blank">
          <Image
          className="rounded-full"
            key={index}
            src={social.url}
            alt={social.name}
            width={28}
            height={28}
          />
          </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;