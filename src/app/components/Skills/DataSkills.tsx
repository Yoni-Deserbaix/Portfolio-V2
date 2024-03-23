import JSLogo from "../../assets/languages/javascript-original.svg";
import TSLogo from "../../assets/languages/typescript-original.svg";
import ReactLogo from "../../assets/languages/react-original.svg";
import NextLogo from "../../assets/languages/nextjs-original.svg";
import TailwindLogo from "../../assets/languages/tailwindcss-color.svg";
import SassLogo from "../../assets/languages/sass-original.svg";
import NodeLogo from "../../assets/languages/node-original.svg";
import EXLogo from "../../assets/languages/express-original.svg";
import CPPLogo from "../../assets/languages/cplusplus-original.svg";
import GitLogo from "../../assets/languages/git-original.svg";
import LinuxLogo from "../../assets/languages/linux-original.svg";

type languagesType = {
  id: number;
  name: string;
  image: any;
  category: string;
};

export const skillsData: languagesType[] = [
  {
    id: 1,
    name: "JavaScript",
    image: JSLogo,
    category: "Frontend",
  },
  {
    id: 2,
    name: "TypeScript",
    image: TSLogo,
    category: "Frontend",
  },
  {
    id: 3,
    name: "React",
    image: ReactLogo,
    category: "Frontend",
  },
  {
    id: 4,
    name: "Next.JS",
    image: NextLogo,
    category: "Frontend",
  },
  {
    id: 5,
    name: "Tailwind",
    image: TailwindLogo,
    category: "Frontend",
  },
  {
    id: 6,
    name: "Sass",
    image: SassLogo,
    category: "Frontend",
  },
  {
    id: 7,
    name: "Node.js",
    image: NodeLogo,
    category: "Backend",
  },
  {
    id: 8,
    name: "Express",
    image: EXLogo,
    category: "Backend",
  },
  {
    id: 9,
    name: "C++",
    image: CPPLogo,
    category: "Backend",
  },
  {
    id: 10,
    name: "Git",
    image: GitLogo,
    category: "Tools",
  },
  {
    id: 11,
    name: "Linux",
    image: LinuxLogo,
    category: "Tools",
  },
];
