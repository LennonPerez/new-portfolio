import { RxEnvelopeClosed } from 'react-icons/rx'
import { BsWhatsapp, BsGithub } from 'react-icons/bs'
import { BiEnvelope } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiLinkedinFill } from 'react-icons/ri'

const contactOptions = [
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
]

export default contactOptions;