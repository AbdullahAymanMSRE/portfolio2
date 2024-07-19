"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 19,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 730,
    text: "Code contributions",
  },
];

export default function Stats() {
  return (
    <section className="max-xl:pb-12 max-xl:pt-4">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item) => (
            <div
              key={item.text}
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={cn("max-w-[158px] leading-snug text-white/80", {
                  "max-w-[100px]": item.text.length < 15,
                })}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
