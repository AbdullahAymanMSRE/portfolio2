"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

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
    "I have worked on a variety of projects, including e-commerce websites, blogs, and personal portfolios. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.",
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
  return <div>Hi</div>;
}
