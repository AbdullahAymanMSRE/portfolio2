"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Custom-built websites tailored to your needs, from sleek landing pages to complex e-commerce platforms.",
    href: "",
  },
  {
    num: "02",
    title: "Figma to React",
    description:
      "Pixel-perfect React websites that bring your Figma designs to life, with smooth animations and responsive layouts.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Robust APIs, database architectures, and server-side logic using PHP, Laravel, and MySQL to power your web applications.",
    href: "",
  },
  {
    num: "04",
    title: "SaaS Development",
    description:
      "Full-stack SaaS solutions including user authentication, payment integration, and scalable cloud infrastructure.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-1 flex-col justify-between gap-6"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                  {service.num}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="w-full border-b border-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
