import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-between gap-2 max-xl:flex-col xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="text-center max-xl:order-2 xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              {"Hello I'm"} <br />{" "}
              <span className="text-accent">Abdullah Ayman</span>
            </h1>
            <p className="mb-9 max-w-[600px] text-white/80">
              {`
              I love to help clients build fast and modern web apps. From responsive 
              UI design to API integrations, 
              I make sure every line of code serves your business.
            `}
            </p>

            <div className="flex items-center gap-8 max-lg:flex-col">
              <a href="https://drive.google.com/file/d/11xlcRAabiRwTSKNVgNQVk8gCd5E29CgH/view?usp=share_link">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  className="flex items-center gap-6"
                  iconClassName="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="max-xl:order-1">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}
