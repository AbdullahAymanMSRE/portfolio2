import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

const socilas = [
  { icon: <FaGithub />, path: "https://github.com/AbdullahAymanMSRE" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/abdullah-ayman-2798a91ab/",
  },
  {
    icon: <SiUpwork />,
    path: "https://www.upwork.com/freelancers/~016104954171b1b55c",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/22522913/abdullah-ayman",
  },
];

export default function Socials({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={className}>
      {socilas.map((social, index) => (
        <a
          target="_blank"
          rel="noreferrer"
          key={index}
          href={social.path}
          className={iconClassName}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
