import {
  faJsSquare,
  faReact,
  faCss3Alt,
  faSass,
  faNodeJs,
  faPython,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export enum skillType {
  FrontEnd = "Frontend", 
  BackEnd = "Backend", 
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
  VueJS = "Vue.js",
  Nuxt = "Nuxt",
  CSS3 = "CSS3",
  SASS = "SASS",
  TailwindCSS = "Tailwind CSS",
  Bootstrap = "Bootstrap",
  MaterialUI = "Material UI",
  NodeJS = "Node.js",
  ExpressJS = "Express.js",
  Firebase = "Firebase",
  Jest = "Jest",
  Python = "Python",
}

export interface skill {
  title: string,
  type: skillType,
  icon: IconDefinition,
}

const mySkills: skill[] = [
  {
    title: skillName.JavaScript,
    type: skillType.FrontEnd,
    icon: faJsSquare,
  },
  {
    title: skillName.TypeScript,
    type: skillType.FrontEnd,
    icon: faJsSquare,
  },
  {
    title: skillName.React,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.ReactNative,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.NextJS,
    type: skillType.FullStack,
    icon: faReact,
  },
  {
    title: skillName.Gatsby,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.Flutter,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.Dart,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.VueJS,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.Nuxt,
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: skillName.CSS3,
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title:  skillName.SASS,
    type: skillType.FrontEnd,
    icon: faSass,
  },
  {
    title: skillName.TailwindCSS,
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: skillName.Bootstrap,
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: skillName.MaterialUI,
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: skillName.NodeJS,
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: skillName.ExpressJS,
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: skillName.Firebase,
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: skillName.Jest,
    type: skillType.FullStack,
    icon: faNodeJs,
  },
  {
    title: skillName.Python,
    type: skillType.BackEnd,
    icon: faPython,
  },
];

export const getSkillByName = (name: skillName): skill | undefined  => mySkills.find(s => s.title === name)

export default mySkills;
