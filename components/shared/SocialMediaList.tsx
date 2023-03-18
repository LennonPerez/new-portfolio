import { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

interface SocialMediaListProps {
  isLight: boolean;
}

const SocialMediaList: FunctionComponent<SocialMediaListProps> = (props) => {
  return (
    <SocialMediaListContainer {...props}>
      {socialMedia.map((s, i) => (
        <a
          key={i}
          className="social-icon-container"
          href={s.url}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={s.icon} />
        </a>
      ))}
    </SocialMediaListContainer>
  );
};

const SocialMediaListContainer = styled.div<SocialMediaListProps>`
  .social-icon-container {
    margin-right: 1rem;
    margin-bottom: 0;
    padding: 0.4rem;
    border-radius: 999px;
    border: 2px solid ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};
    transition: background-color 0.3s ease-in-out;

    .icon {
      color: ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};
      transition: color 0.3s ease-in-out;
      vertical-align: -0.29rem;
      height: 1.2rem;
      width: 1.2rem;
    }

    &:hover {
      background-color: ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};

      .icon {
        color: ${(props) => (props.isLight ? "#fcfcfc" : "#1f1f24")};
      }
    }
  }
`;

const socialMedia = [
  {
    name: "Email",
    url: "mailto:lenonart14@gmail.com",
    icon: faEnvelope,
  },
  // {
  //   name: "Whatsapp",
  //   url: "https://wa.me/584126736618",
  //   icon: faWhatsapp,
  // },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lennonperez/",
    icon: faLinkedinIn,
  },
  {
    name: "Github",
    url: "https://github.com/LennonPerez",
    icon: faGithub,
  },
];

export default SocialMediaList;
