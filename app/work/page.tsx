"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Image from "next/image";
import TooltipLink from "@/components/TooltipLink";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { cn } from "@/lib/utils";

const projects = [
  {
    num: "01",
    title: "Wearby",
    description:
      "I have built this project from scratch using React, Remix.js and Tailwind CSS for Wearby company. The project is fully responsive and has two languages English and Arabic.",
    stack: [{ name: "React" }, { name: "TailwindCSS" }, { name: "Remix.js" }],
    image: "/assets/wearby.png",
    live: "https://wearby.app",
  },
  {
    num: "02",
    title: "SaaS Landing Page",
    description:
      "In this project I have turned a Figma template into a live Next.js page. The page is fully responsive.",
    stack: [
      { name: "Javascript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Sass" },
    ],
    image: "/assets/saas.png",
    live: "https://retail-template.vercel.app/",
    github: "https://github.com/AbdullahAymanMSRE/retail-template",
  },
  {
    num: "03",
    title: "Polywin",
    description:
      "I worked as a frontend developer to create a new website for Polywin company. The website is built using React and SASS.",
    stack: [{ name: "Javascript" }, { name: "React" }, { name: "Sass" }],
    image: "/assets/polywin.png",
    live: "https://polywinegypt.com/",
  },
  {
    num: "04",
    title: "Algorithms Visualizer",
    description:
      "AlgoV is a web application that visualizes different algorithms. It is built using React and Tailwind CSS.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/assets/algov.png",
    live: "https://algov-visualizer.vercel.app/",
    github: "https://github.com/Abdelrahman-Abdelmoaty/AlgoV",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[440px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-7">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={item.name} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <TooltipLink
                  href={project.live}
                  icon={<BsArrowUpRight className="group-hover:text-accent" />}
                >
                  Live project
                </TooltipLink>
                {project.github && (
                  <TooltipLink
                    href={project.github}
                    icon={<BsGithub className="group-hover:text-accent" />}
                  >
                    Github repository
                  </TooltipLink>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
              className="mb-12 xl:h-[520px]"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="group relative flex aspect-square max-h-[460px] w-full items-center justify-center bg-pink-50/20">
                    <div className="absolute bottom-0 top-0 z-10 size-full bg-black/10"></div>
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        fill
                        className="aspect-square object-cover object-right"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerClassName="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnClassName={cn(
                  "bg-accent hover:bg-accent-hover text-primary text[22px] size-[44px] flex justify-center transition-all items-center",
                )}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
