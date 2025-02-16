import React from "react";
import Link from "next/link";
import { data } from "@/data/data";
function SmallProject() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-4 m-[2%] place-items-center md:grid-cols-2 md:w-screen">
      {data.smallProject.map((item) => (
        <div
          key={item.name}
          className="w-[300px] h-[25vh] border-white border-[1px] rounded-[10px]"
        >
          <p className="text-[#abb2bf] font-(--font-regular) text-start ml-[1%] text-[14px] text-center">
            {item.techstack}
          </p>
          <hr className="w-[100%] h-[2px] mt-[4px] text-[#abb2bf]" />
          <div className="flex flex-col justify-center items-start gap-[0px] ml-[5%]">
            <h2 className="text-white font-(--font-bold) text-[22px] ">
              {item.name}
            </h2>
            <p className="text-[#abb2bf] font-(--font-regular)  text-[14px]">
              {item.describe}
            </p>
            <Link
              href={item.link}
              className="text-[#abb2bf] w-[100px] h-[4vh] text-center font-(--font-regular)  text-[12px]  border-[#c778dd] mt-[2%] border-[1px] rounded "
            >
              {item.button}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallProject;
