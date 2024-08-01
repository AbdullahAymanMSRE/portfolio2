import Link from "next/link";
import { PropsWithChildren } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function TooltipLink({
  href,
  children,
  icon,
}: PropsWithChildren<{ href: string; icon: React.ReactNode }>) {
  return (
    <Link href={href} target="_blank">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="group flex size-[70px] items-center justify-center rounded-full bg-white/5 text-3xl text-white">
            {icon}
          </TooltipTrigger>
          <TooltipContent>{children}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
}
