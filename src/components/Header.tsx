"use client";
import React from "react";
import logo from "../../public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useState} from 'react'
import Menu from "../../public/svg/Menu.svg"

import Close from "../../public/svg/Close.svg"
import Linkedin from "../../public/svg/Linkedin.svg";
import Github from "../../public/svg/Github.svg";
import Figma from "../../public/svg/Figma.svg";
function Header() {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const pathname = usePathname();
  return (
    <nav className="p-4  w-full top-0 z-50 h-[10vh]">
    <div className="w-screen flex flex-row justify-evenly items-center gap-[20px]">
      <div className="flex flex-row justify-center items-center gap-[10px] ">
        <Image src={logo} alt="logoicon" className="w-[50px] h-[50px]" />
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

      <Image src={Menu} alt="menuicon" className="w-[30px] h-[30px]
          block xl:hidden 2xl:hidden
      " onClick={() => setIsOpen(true)}/>
     

    </div>
    {
        isOpen === true && (<div className="fixed inset-0 bg-(--background) text-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold z-50 transition-opacity duration-300 ">
          <Image src={Close} alt="closeicon" className="w-[30px] h-[30px]
          block xl:hidden 2xl:hidden
      " onClick={() => setIsOpen(false)}/>
     
                <div className=" flex flex-col justify-center items-center gap-[20px] mt-[-10px]">
        <Link
          href="/"
          className={`font-(--font-regular) text-[2rem] text-white [&.active]:text-(--gray) hover:text-(--primary)  ${
            pathname === "/" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>home
        </Link>
        <Link
          href="/about"
          className={`font-(--font-regular) text-[2rem] text-white [&.active]:text-(--gray) hover:text-(--primary)  ${
            pathname === "/about" ? "active" : ""
          } `}
        >
          
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          about
        </Link>
        <Link
          href="/project"
          className={`font-(--font-regular) text-[2rem] text-white [&.active]:text-(--gray) hover:text-(--primary)  ${
            pathname === "/project" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          project
        </Link>
        <Link
          href="/contact"
          className={`font-(--font-regular) text-[2rem] text-white [&.active]:text-(--gray) hover:text-(--primary)  ${
            pathname === "/contact" ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>
          contact
        </Link>
        </div> 
        <h2 className="font-(--font-bold) text-[2rem] text-white">Media</h2>
        <div className="flex flex-row justify-center items-center gap-[20px] flex-wrap">
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/chaitechie"
          >
            <Image
              src={Github}
              alt="Github"
              className="w-[100px] h-[100px ]  fill-black-600"
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
              className="w-[100px] h-[100px ]  fill-black-600"
            />
          </Link>

          <Link
            target="_blank"
            rel="noopener"
            href="https://www.figma.com/in/chaitechie/"
          >
            <Image
              src={Figma}
              alt="Linkedin"
              className="w-[100px] h-[100px ]  fill-black-600"
            />
          </Link>
        </div>
        </div>) 
      }
     
      
    </nav>
  );
}

export default Header;
