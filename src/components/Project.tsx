import React from "react";
import Image from "next/image";
import { data } from "@/data/data";
import Link from "next/link";
const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-3 m-[2%] place-items-center md:grid-cols-2">
      {data.bigger.map((item) => (
        <div
          key={item.title}
          className="w-[300px] h-[40vh]  border-white border-[1px] rounded-[10px] cols-span-3 xl:h-[46vh] 2xl:h-[46vh] md:h-[44vh]"
        >
          <Image
            src={item.image}
            alt={item.title}
            className=" m-[0px] rounded-t-[10px]"
            width={item.width}
            height={item.height}
            priority
          />
          <hr className="w-[100%] h-[2px]  text-[#abb2bf]" />
          <p className="text-[#abb2bf] font-(--font-regular) text-start ml-[1%] text-[14px]">
            {item.techstack}
          </p>
          <hr className="w-[100%] h-[2px] mt-[4px] text-[#abb2bf]" />
          <div className="flex flex-col justify-center items-start gap-[0px] ml-[5%]">
            <h2 className="text-white font-(--font-bold) text-[22px] ">
              {item.title}
            </h2>
            <p className="text-[#abb2bf] font-(--font-regular)  text-[14px]">
              {item.describe}
            </p>
            <Link
              href={item.link}
              className="text-[#abb2bf] w-[100px] h-[4vh] text-center font-(--font-regular)  text-[12px]  border-[#c778dd] mt-[2%] border-[1px] rounded "
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
