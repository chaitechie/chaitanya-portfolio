import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import Desidev from "../../public/img/Desidev.png";
import vectorset from "../../public/svg/vectorset.svg";
import Animedev from "../../public/img/Animedev.png";
import Email from "../../public/svg/Email.svg";
import Project from "@/components/Project";
import TechSkill from "@/components/TechSkills";

export default function Home() {
  return (
    <>
      <Header />

        {/*Hero Section */}
        <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 sm:gap-4 gap-5 m-[2%] place-items-center">
          <div className="flex flex-col justify-center items-start gap-[10px] h-[20vh] cols-span-6">
            <h1 className="font-(--font-bold) text-[18px] text-white xl:text-[2rem] 2xl:text-[2.5rem] md:text-[32px] text-center">
              chaitanya is 
              <strong className="text-[#c778dd]">  frontend developer </strong>
              and
              <strong className="text-[#c778dd]"> web designer  </strong>
            </h1>
            <p
              className="font-(--font-regular) text-[16px] text-[#abb2bf] text-center
          xl:text-[22px] 2xl:[text-26px]"
            >
              He crafts responsive website where technologies meet creativity
            </p>
          </div>
          <Image
            src={Desidev}
            alt="desidev"
            priority
            className="w-[257] h-[286px]
            cols-span-6
            xl:w-[457px] xl:h-[386px] "
          />
        </div>
        {/* Quote */}
        <div className="flex justify-center items-center m-0">
          <div className="w-[90%] max-w-[600px] text-center p-[40px]  bg-background  ">
            <p className=" rounded-lg border-white border-[1px] text-[#c778dd] font-(--font-regular) text-[1.8rem] 2xl:text-[2.5rem]">
              <strong>&rdquo;</strong> With great bugs come great Stack Overflow
              vists <strong>&ldquo;</strong>
            </p>
            <p className="text-[#abb2bf] text-end font-(--font-bold) spacing-2  text-[16px] ">
              - Dr.Who
            </p>
          </div>
        </div>
        {/* Project */}
        <div className="w-screen xl:h-[75vh] 2xl:h-[75vh]">
          <div className="flex justify-center items-between gap-[20px]">
            <div className="flex flex-[2] items-center ml-[5%]">
              <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                <strong className="text-[#c778dd]">#</strong>project
              </h3>
              <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
            </div>
         
          </div>

          <Project />
        </div>
        {/* Skills */}
        <div>
          <div className="flex justify-center items-between gap-[20px]">
            <div className="flex flex-[2] items-center ml-[5%]">
              <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                <strong className="text-[#c778dd]">#</strong>skills
              </h3>
              <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 m-[5%] gap-2">
            <div className="hidden md:hidden xl:block xl:ml-[5%] 2xl:block 2xl:ml-[10%] cols-span-3">
              <Image src={vectorset} alt="vectors" />
            </div>
           <div>
           <TechSkill />
           </div>
          </div>
        </div>
        {/* about me */}

        <div>
          <div className="flex items-center ml-[5%] ">
            <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
              <strong className="text-[#c778dd]">#</strong>about-me
            </h3>
            <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
          </div>

          <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 sm:gap-4 gap-6 m-[2%] place-items-center sm:m-[2%]">
            <div className="flex flex-col justify-center item-center gap-[20px] cols-span-6 w-[90%] h-[400px] m-10 md:m-[1%] xl:m-4 2xl:m-4">
              <p className="font-(--font-regular)  text-[#abb2bf] text-[20px] place-items-center">
                Hello,i&apos;m Chaitanya!
              </p>
              <p className="font-(--font-regular)  text-[#abb2bf] text-[20px]">
                I&apos;m a self-taught frontend-developer based India.I can
                develop responsive websites from scratch and raise them into
                modern user-firendly web experiences.
              </p>
              <p className="font-(--font-regular)  text-[#abb2bf] text-[20px]">
                Transfroming my creativity and knowledge into a websites has
                been my passion over a year. I always strive to learn about the
                newest technologies and frameworks.
              </p>
              <Link href="/about">
                <button className="w-[220px] h-[50px]  border-[#c778dd] border-[1px] p-[2%] text-white font-(--font-regular) text-[14px] ">
                  Read more &rarr;
                </button>
              </Link>
            </div>

            <Image
              src={Animedev}
              alt="animedev"
              priority
              className="w-[257] h-[286px] xl:w-[457px] xl:h-[386px] "
            />
          </div>

          {/* contact */}

          <div className="flex justify-center items-between gap-[20px]   ">
            <div className="flex flex-[2]  items-center ml-[5%] ">
              <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                <strong className="text-[#c778dd]">#</strong>contact
              </h3>
              <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 justify-center items-center xl:grid-cols-2 2xl:grid-cols-2 m-[2%] place-items-center">
            <div className="w-h-screen xl:w-h-screen ml-[20%]  cols-span-6">
              <p className="font-(--font-regular)  text-[#abb2bf] text-[14px] xl:text-[1rem]">
                I&apos;m interesed in freelance opportunities. However if you
                have other request or question, don&apos;t hestitate to contact
                me.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border-white rounded border-[2px] p-2 w-[300px] h-[103px] cols-span-6 xl:mr-[-30%]">
              <h4 className="font-(--font-bold) font-bold text-white text-[22px] ">
                Contact
              </h4>
              <hr className=" w-[300px] h-1 text-white " />
              <a
                href="vankar.chaitanya@outlook.com"
                target="_blank"
                rel="noopener"
                className="font-(--font-regular)  text-[#abb2bf] text-[14px] flex items-center"
              >
                <Image src={Email} alt="emailicon" />
                vankar.chaitanya@outlook.com
              </a>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
}
