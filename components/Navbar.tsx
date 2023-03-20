import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import SocialMediaList from "./shared/SocialMediaList";

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  if (document) {
    document.body.style.overflow = showMobileNav ? "hidden" : " auto";
  }

  return (
    <NavbarStyles {...props}>
      <h3>Lennon.dev</h3>
      <FontAwesomeIcon
        className="bars-icon "
        icon={showMobileNav ? faX : faBars}
        onClick={() => setShowMobileNav((curr) => !curr)}
      />
      {showMobileNav ? (
        <div className="nav-container mobile">
          <div className="sections">
            {navbarSections.map((s, i) => (
              <a
                key={i}
                className="section-link"
                href={s.link}
                target={s.openInOtherPage ? "_blank" : ""}
                rel="noreferrer"
                onClick={() => setShowMobileNav(false)}
              >
                {s.title}
              </a>
            ))}
          </div>
          <SocialMediaList isLight={false} />
        </div>
      ) : null}
      <nav className="nav-container desktop">
        {navbarSections.map((s, i) => (
          <a
            key={i}
            className="section-link"
            href={s.link}
            target={s.openInOtherPage ? "_blank" : ""}
            rel="noreferrer"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </NavbarStyles>
  );
};

type NavbarProps = {
  showShadow: boolean;
};

const NavbarStyles = styled.div<NavbarProps>`
  background-color: #1f1f24;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 1.5rem 5vw 1.5rem 5vw;
  transition: border-bottom 0.2s ease-in-out;
  ${(props) =>
    props.showShadow && `border-bottom: solid 1px rgba(237 237 237);`}

  h3 {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    top: 1.25rem;
    left: 5vw;
    right: 5vw;
    width: 90vw;
    padding-left: ${(props) => (props.showShadow ? "1.5rem" : "0")};
    padding-right: ${(props) => (props.showShadow ? "1.5rem" : "0")};
    padding-bottom: calc(1.5rem - 5px);
    transition: box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
    transition: padding 0.2s linear, -webkit-box-shadow 0.2s linear;
    border-radius: 10px;

    ${(props) =>
      props.showShadow &&
      `
        box-shadow: 0 0 2px rgb(0 0 0 / 80%), 0 4px 12px rgb(0 0 0 / 36%), inset 0 0 0 0.5px rgba(237 237 237);
        -webkit-box-shadow: 0 0 2px rgb(0 0 0 / 80%), 0 4px 12px rgb(0 0 0 / 36%), inset 0 0 0 0.5px rgb(237 237 237);
    `}

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    left: 10vw;
    right: 10vw;
    width: 80vw;
  }

  @media (min-width: 1366px) {
    left: 15vw;
    right: 15vw;
    width: 70vw;
  }

  @media (min-width: 1920px) {
    left: 20vw;
    right: 20vw;
    width: 60vw;
  }

  .bars-icon {
    width: 1.5rem;
    height: 1.7rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    /* &:hover {
      color: #7856ff;
    } */

    @media (min-width: 768px) {
      display: none;
    }
  }

  .section-link {
    color: #fff;
    cursor: pointer;
    font-size: 1.1rem;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:after {
      content: "";
      width: 0%;
      display: block;
      height: 2px;
      margin-top: 3px;
      background-color: #7856ff;
      transition: all 0.3s ease-in-out;
    }
  }

  .mobile {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #303035;

    @media (min-width: 768px) {
      display: none;
    }

    .section-link {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  }

  .desktop {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      .section-link {
        color: #9e9e9e;
      }
    }

    .section-link {
      padding-right: 2rem;

      &:last-child {
        padding-right: 0;
      }

      &:hover {
        color: #fff;

        &:after {
          width: 100%;
        }
      }
    }
  }
`;

const navbarSections = [
  {
    title: "Home",
    link: "#home-section",
    openInOtherPage: false,
  },
  {
    title: "Skills",
    link: "#skills-section",
    openInOtherPage: false,
  },
  {
    title: "My work",
    link: "#my-work-section",
    openInOtherPage: false,
  },
  {
    title: "Contact",
    link: "#contact-section",
    openInOtherPage: false,
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1ai6tfMvslOwRY5gmcyttpOGftkw1kHGv/view?usp=sharing",
    openInOtherPage: true,
  },
];

export default Navbar;
