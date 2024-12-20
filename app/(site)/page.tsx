import React from "react";
import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../public/appBanner.png";
const Homepage = () => {
  return (
    <>
      <section className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className=" rounded-xl  sm:w-[300px] bg-white p-[2px]  mt-6 bg-gradient-to-r from-primary to-brand/brand-primaryBlue">
          <Button
            variant={"secondary"}
            className=" w-full rounded-[10px] text-2xl p-0 bg-background"
          >
            Get cypress free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
          <Image src={Banner} alt="Application Banner" />
          <div className=" bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        ></div>
      </section>
    </>
  );
};

export default Homepage;
