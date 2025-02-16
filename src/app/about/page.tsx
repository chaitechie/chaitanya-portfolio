"use client";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Animedev from "../../../public/img/Animedev.png";
import Image from "next/image";
import vectorset from "../../../public/svg/vectorset.svg";
import TechSkills from "@/components/TechSkills";
function AboutPage() {
  return (
    <>
      <Header />
      <div className="w-screen">
        <h1 className="text-white font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-(--primary)">/</strong>about
        </h1>
        <p className="font-(--font-regular)  text-[#abb2bf] text-[1.4rem] ml-[5%]">
          who am i?
        </p>

        <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 sm:gap-4 gap-6 m-[2%] place-items-center">
          <div className="flex flex-col justify-center item-center gap-[20px] cols-span-6 w-[90%] h-[400px] ml-[5%]  xl:ml-[20%] 2xl:ml-[30%] ">
            <p className="font-(--font-regular)  text-[#abb2bf] text-[14px]  xl:text-[1.4rem] 2xl:text-[1.8rem] ">
              hello,i&apos;m chaitanya!
            </p>
            <p className="font-(--font-regular)  text-[#abb2bf]  text-[14px] xl:text-[1.4rem] 2xl:text-[1.8rem]">
              I&apos;m a self-taught frontend-developer based India.I can
              develop responsive websites from scratch and raise them into
              modern user-firendly web experiences.
            </p>
            <p className="font-(--font-regular)  text-[#abb2bf] text-[14px] xl:text-[1.4rem] 2xl:text-[1.8rem]">
              Transfroming my creativity and knowledge into a websites has been
              my passion over a year. I always strive to learn about the newest
              technologies and frameworks.
            </p>
          </div>

          <Image
            src={Animedev}
            alt="animedev"
            priority
            className="w-[257] h-[286px] xl:w-[457px] xl:h-[386px]"
          />
        </div>
      </div>

      <div className="w-screen">
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>skills
        </h3>
        <TechSkills />
      </div>

      <div>
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>my-fun-facts
        </h3>

        <div className="grid grid-cols-1 w-screen xl:grid-cols-2 2xl:grid-cols-2 sm:p-2 gap-2 p-4 place-items-center xl:ml-[5%] 2xl:ml-[5%]">
          <div className="cols-span-8 flex flex-row jusity-center items-center gap-[10px] flex-wrap">
            <p className="text-[14px] font-(--regular) text-white border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
              I like summer more than winter
            </p>
            <p className="text-[14px] font-(--regular) text-white border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
              I like <strong className="text-(--primary)">briyani</strong> and{" "}
              <strong className="text-(--primary)">chinese food</strong>
            </p>
            <p className="text-[14px] font-(--regular) text-white border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
              My favorite super hero is{" "}
              <strong className="text-(--primary)">Invincible</strong>
            </p>
            <p className="text-[14px] font-(--regular) text-white border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
              I like read if i am not coding
            </p>
            <p className="text-[14px] font-(--regular) text-white border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
              I love to write
            </p>
          </div>

          <Image
            src={vectorset}
            alt="vectorset"
            className="w-[300px] h-[300px] cols-span-6 
              2xl:w-[400px] 2xl:h-[400px] xl:w-[300px] xl:h-[300px] 
             place-items-center"
            priority
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
