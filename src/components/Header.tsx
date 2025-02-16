"use client";
import React from "react";
import logo from "../../public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  return (
    <div className="w-screen flex flex-row justify-evenly items-center gap-[20px]">
      <div className="flex flex-row justify-center items-center gap-[10px] ">
        <Image src={logo} alt="logoicon" className="w-[100px] h-[100px]" />
        <h1 className="font-(--font-bold) text-[16px] text-white">Chaitanya</h1>
      </div>
      <div className=" flex flex-row justify-center items-center gap-[20px] hidden xl:flex xl:flex-row 2xl:flex 2xl:flex-row">
        <Link
          href="/"
          className={`font-(--font-regular) text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            pathname === "/" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>home{" "}
        </Link>
        <Link
          href="/about"
          className={`font-(--font-regular) text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            pathname === "/about" ? "active" : ""
          } `}
        >
          {" "}
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          about{" "}
        </Link>
        <Link
          href="/project"
          className={`font-(--font-regular) text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            pathname === "/project" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          project{" "}
        </Link>
        <Link
          href="/contact"
          className={`font-(--font-regular) text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            pathname === "/contact" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          contact{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
