import React from "react";
import { data } from "@/data/data";
function TechSkills() {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 grid-cols-1 gap-4  place-items-center p-4">
      {data.skills.map((props) => (
        <div
          key={props.name}
          className="flex flex-col justify-start items-center border-white rounded border-[2px] p-2 w-[178px] h-[103px]"
        >
          <h4 className="font-(--font-bold) font-bold text-white text-[22px]">
            {props.name}
          </h4>
          <hr className="w-[178px] h-1 text-white " />
          <p className="font-(--font-regular)  text-[#abb2bf] text-[14px]">
            {props.lang}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TechSkills;
