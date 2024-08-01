"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, and PHP.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdullah Ayman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 115 350 9018",
    },
    {
      fieldName: "Experience",
      fieldValue: "+3 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "abdullahaymanmsre@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on a variety of projects, including educational websites, blogs, and personal portfolios. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.",
  items: [
    {
      company: "Wearby",
      position: "Front-End Developer",
      duration: "2024 - Present",
    },
    {
      company: "Upwork",
      position: "Professional Freelancer",
      duration: "2024 - Present",
    },
    {
      company: "Polywin Egypt",
      position: "Full-Stack Developer",
      duration: "2022 - 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    " I am currently pursuing a degree in Computer Engineering at Egypt University of Informatics (EUI). I have also completed a number of online courses to further develop my skills.",
  items: [
    {
      institution: "Egypt University of Informatics (EUI)",
      degree: "Computer Engineering",
      duration: "2021 - 2026",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I have experience with a variety of technologies, including:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
  ],
};

export default function Resume() {
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
        <Tabs
          className="flex flex-col gap-[60px] xl:flex-row"
          defaultValue="experience"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7 max-xl:text-center">
                <TitleAndDescription
                  title={experience.title}
                  description={experience.description}
                />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {experience.items.map((item) => (
                      <li
                        key={item.company}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-7 max-xl:text-center">
                <TitleAndDescription
                  title={education.title}
                  description={education.description}
                />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {education.items.map((item) => (
                      <li
                        key={item.institution}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] text-center text-xl lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 max-xl:text-center">
                  <TitleAndDescription
                    title={skills.title}
                    description={skills.description}
                  />
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-7">
                  {skills.skillList.map((skill) => (
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-7 max-xl:text-center">
                <TitleAndDescription
                  title={about.title}
                  description={about.description}
                />
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item) => (
                    <li
                      key={item.fieldName}
                      className="flex items-center justify-center gap-4 xl:justify-start"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

function TitleAndDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {description}
      </p>
    </>
  );
}
