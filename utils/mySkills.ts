import { IconType } from "react-icons";
import { FaReact, FaVuejs, FaSass, FaNodeJs, FaAngular, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFlutter, SiDart, SiNuxtdotjs, SiCss3, SiTailwindcss, SiExpress, SiFirebase, SiPython, SiJest, SiJavascript, SiPostgresql, SiAwslambda } from 'react-icons/si'
import { GrGatsbyjs } from 'react-icons/gr'
import { BsFillBootstrapFill } from 'react-icons/bs'

export enum skillType {
  FrontEnd = "Front-End", 
  BackEnd = "Back-End", 
  FullStack = "Fullstack", 
  Blockchain = "Blockchain",
}

export enum skillName {
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  React = "React",
  ReactNative = "React Native",
  NextJS = "Next.js",
  Gatsby = "Gatsby",
  Flutter = "Flutter",
  Dart = "Dart",
  Angular = "Angular",
  VueJS = "Vue.js",
  Nuxt = "Nuxt",
  CSS3 = "CSS3",
  SASS = "SASS",
  HTML5 = "HTML5",
  TailwindCSS = "Tailwind CSS",
  Bootstrap = "Bootstrap",
  MaterialUI = "Material UI",
  NodeJS = "Node.js",
  ExpressJS = "Express.js",
  Firebase = "Firebase",
  Lambda = "Lambda",
  Python = "Python",
  PostgreSQL = "PostgreSQL",
  Jest = "Jest",
}

export interface skill {
  title: string,
  type: skillType,
  icon: IconType,
}

const mySkills: skill[] = [
  {
    title: skillName.JavaScript,
    type: skillType.FrontEnd,
    icon: SiJavascript,
  },
  {
    title: skillName.TypeScript,
    type: skillType.FrontEnd,
    icon: SiTypescript,
  },
  {
    title: skillName.React,
    type: skillType.FrontEnd,
    icon: FaReact,
  },
  {
    title: skillName.ReactNative,
    type: skillType.FrontEnd,
    icon: FaReact,
  },
  {
    title: skillName.NextJS,
    type: skillType.FrontEnd,
    icon: SiNextdotjs,
  },
  {
    title: skillName.Gatsby,
    type: skillType.FrontEnd,
    icon: GrGatsbyjs,
  },
  // {
  //   title: skillName.Angular,
  //   type: skillType.FrontEnd,
  //   icon: FaAngular,
  // },
  {
    title: skillName.VueJS,
    type: skillType.FrontEnd,
    icon: FaVuejs,
  },
  {
    title: skillName.Nuxt,
    type: skillType.FrontEnd,
    icon: SiNuxtdotjs,
  },
  {
    title: skillName.Dart,
    type: skillType.FrontEnd,
    icon: SiDart,
  },
  {
    title: skillName.Flutter,
    type: skillType.FrontEnd,
    icon: SiFlutter,
  },
  {
    title: skillName.CSS3,
    type: skillType.FrontEnd,
    icon: SiCss3,
  },
  {
    title:  skillName.SASS,
    type: skillType.FrontEnd,
    icon: FaSass,
  },
  {
    title: skillName.TailwindCSS,
    type: skillType.FrontEnd,
    icon: SiTailwindcss,
  },
  {
    title: skillName.Bootstrap,
    type: skillType.FrontEnd,
    icon: BsFillBootstrapFill,
  },
  {
    title: skillName.HTML5,
    type: skillType.FrontEnd,
    icon: FaHtml5,
  },
  // {
  //   title: skillName.MaterialUI,
  //   type: skillType.FrontEnd,
  //   icon: SiMaterialdesignicons,
  // },
  {
    title: skillName.NodeJS,
    type: skillType.BackEnd,
    icon: FaNodeJs,
  },
  {
    title: skillName.ExpressJS,
    type: skillType.BackEnd,
    icon: SiExpress,
  },
  {
    title: skillName.Firebase,
    type: skillType.BackEnd,
    icon: SiFirebase,
  },
  {
    title: skillName.Jest,
    type: skillType.FullStack,
    icon: SiJest,
  },
  {
    title: skillName.Python,
    type: skillType.BackEnd,
    icon: SiPython,
  },
  {
    title: skillName.Lambda,
    type: skillType.BackEnd,
    icon: SiAwslambda,
  },
  {
    title: skillName.PostgreSQL,
    type: skillType.BackEnd,
    icon: SiPostgresql,
  },
];

export const getSkillByName = (name: skillName): skill | undefined  => mySkills.find(s => s.title === name)

export default mySkills;
