import React from "react";
import logo from "../../public/svg/logo.svg";
import Image from "next/image";
import Github from "../../public/svg/Github.svg";
import Linkedin from "../../public/svg/Linkedin.svg";

import Link from "next/link";
function Footer() {
  return (
    <>
      <div className="w-screen">
        <hr className="w-screen h-[4px] text-(--gray) " />
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-2">
          <div>
            <div className="flex flex-row justify-center items-center gap-[10px] flex-wrap">
              <Image
                src={logo}
                alt="my logo"
                className="w-[50px] h-[50px] mb-[-1%]"
              />
              <h1 className="font-[FiraCode-Bold] text-[16px] text-white">
                Chaitanya
              </h1>
              <p className="font-[FiraCode-Regular] text-[16px] text-(--gray)">
                vankar.chaitanya@outlook.com
              </p>
            </div>
            <p className="font-[FiraCode-Regular] text-[16px] text-(--gray) text-center">
              Front-end Developer
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px] ">
            <h1 className="font-[FiraCode-Bold] text-[24px] text-white">
              Media
            </h1>
            <div className="flex flex-row justify-center  gap-[10px]">
              <Link
                target="_blank"
                rel="noopener"
                href="https://github.com/chaitechie"
              >
                <Image
                  src={Github}
                  alt="Github"
                  className="w-[32px] h-[32px ]  fill-(--gray)"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/chaitechie/"
              >
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  className="w-[32px] h-[32px ]  fill-(--gray)"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="font-[FiraCode-Regular] text-[16px] text-(--gray) text-center">
        @ copyright 2025. Made by Chaitanya
      </p>
    </>
  );
}

export default Footer;
