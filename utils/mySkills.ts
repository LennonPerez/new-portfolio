import {
  faJsSquare,
  faReact,
  faCss3Alt,
  faSass,
  faNodeJs,
  faPython,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

enum skillType {
  FrontEnd = "Frontend", 
  BackEnd = "Backend", 
  FullStack = "Fullstack", 
  Blockchain = "Blockchain",
}

interface skill {
  title: string,
  type: skillType,
  icon: IconDefinition,
}

const mySkills: skill[] = [
  {
    title: "JavaScript",
    type: skillType.FrontEnd,
    icon: faJsSquare,
  },
  {
    title: "TypeScript",
    type: skillType.FrontEnd,
    icon: faJsSquare,
  },
  {
    title: "React",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "React Native",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "Next.js",
    type: skillType.FullStack,
    icon: faReact,
  },
  {
    title: "Gatsby",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "Flutter",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "Dart",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "Vue.js",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "Nuxt",
    type: skillType.FrontEnd,
    icon: faReact,
  },
  {
    title: "CSS3",
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: "SASS",
    type: skillType.FrontEnd,
    icon: faSass,
  },
  {
    title: "Tailwind CSS",
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: "Bootstrap",
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: "Material UI",
    type: skillType.FrontEnd,
    icon: faCss3Alt,
  },
  {
    title: "Node.js",
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: "Express.js",
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: "Firebase",
    type: skillType.BackEnd,
    icon: faNodeJs,
  },
  {
    title: "Jest",
    type: skillType.FullStack,
    icon: faNodeJs,
  },
  {
    title: "Python",
    type: skillType.BackEnd,
    icon: faPython,
  },
];

export const getSkillByName = (name: string) => mySkills.find(s => s.title === name)

export default mySkills;
