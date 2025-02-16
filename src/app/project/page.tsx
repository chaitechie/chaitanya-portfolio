import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import SmallProject from "@/components/SmallProject";
function ProjectPage() {
  return (
    <>
      <Header />
      <div className="w-screen">
        <h1 className="text-white font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-(--primary)">/</strong>projects
        </h1>
        <p className="font-(--font-regular)  text-[#abb2bf] text-[1.4rem] ml-[5%]">
          list of projects
        </p>
        <Project />
      </div>
      {/* Short Projects */}
      <div className="w-screen">
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>small projects
        </h3>
       <SmallProject />
      </div>

      <Footer />
    </>
  );
}

export default ProjectPage;
