"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type BoxLinkProps = {
  link: string;
  title: string;
  text: string;
};

export default function BoxLink({ link, title, text }: BoxLinkProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={`/${link}`} className="block">
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className="transition duration-200 hover:-translate-y-1 border rounded-md mt-10 px-10 py-8  h-[11rem]  "
      >
        <h2 className="flex items-center justify-between font-semibold text-lg">
          {title}

          <div
            className={`transition duration-200 ${
              isHover ? "translate-x-1" : ""
            }`}
          >
            <FaArrowRight size={14} />
          </div>
        </h2>
        <p className=" w-[19rem] text-[15px] mt-2">{text}</p>
      </div>
    </Link>
  );
}
