import { IconType } from "react-icons";
import { BiEnvelope } from "react-icons/bi";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

interface ContactOption {
  name: string;
  url: string;
  icon: IconType;
}

const contactOptions: ContactOption[] = [
  {
    name: "Email",
    url: "mailto:lenonart14@gmail.com",
    icon: BiEnvelope,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/584126736618",
    icon: AiOutlineWhatsApp,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lennonperez/",
    icon: AiFillLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/LennonPerez",
    icon: AiFillGithub,
  },
];

export default contactOptions;
