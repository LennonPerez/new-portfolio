/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import styled from "styled-components";
import SocialMediaList from "./shared/SocialMediaList";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(false);
  const [renderMobileNav, setRenderMobileNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = renderMobileNav ? "hidden" : "auto";
    document.body.style.paddingRight = renderMobileNav ? "5px" : "0";
  }, [renderMobileNav]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > 0;
      if (isShow !== isScrollOnTop) setIsScrollOnTop(isShow);
    },
    [isScrollOnTop],
    100
  );

  const onOpenMobileNav = () => {
    if (renderMobileNav) return;
    setRenderMobileNav(true);
    setShowMobileNav(true);
  };

  const onCloseMobileNav = () => {
    setShowMobileNav(false);
    setTimeout(() => setRenderMobileNav(false), 300);
  };

  return (
    <NavbarStyles showShadow={isScrollOnTop}>
      <h3>Lennonart.dev</h3>
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
      {renderMobileNav ? (
        <AiOutlineClose className="bars-icon" onClick={onCloseMobileNav} />
      ) : (
        <RxHamburgerMenu className="bars-icon" onClick={onOpenMobileNav} />
      )}
      {renderMobileNav ? (
        <>
          <div
            className={`overlay ${showMobileNav ? "overlay-fade-in" : ""}`}
            onClick={onCloseMobileNav}
          />
          <div
            className={`nav-container mobile ${
              showMobileNav ? "mobile-fade-in" : "mobile-fade-out"
            }`}
          >
            <div className="sections">
              {navbarSections.map((s, i) => (
                <a
                  key={i}
                  className="section-link"
                  href={s.link}
                  target={s.openInOtherPage ? "_blank" : ""}
                  rel="noreferrer"
                  onClick={onCloseMobileNav}
                >
                  {s.title}
                </a>
              ))}
            </div>
            <SocialMediaList isLight={false} />
          </div>
        </>
      ) : null}
    </NavbarStyles>
  );
};

type NavbarStyleProps = {
  showShadow: boolean;
};

const NavbarStyles = styled.div<NavbarStyleProps>`
  /* height: 4.75rem; */
  z-index: 10;
  background-color: ${(props) => props.theme.colors.textTertiaryColor};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5vw 1.5rem 5vw;
  border-bottom-color: transparent;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: border-color 0.2s ease-in-out;

  ${(props) => props.showShadow && `border-bottom-color: rgba(237 237 237);`}

  h3 {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    top: 1.25rem;
    left: 4.775vw;
    right: 4.775vw;
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
    left: 9.75vw;
    right: 9.75vw;
  }

  @media (min-width: 1366px) {
    left: 14.75vw;
    right: 14.75vw;
  }

  @media (min-width: 1920px) {
    left: 19.9vw;
    right: 19.85vw;
  }

  .bars-icon {
    width: 1.5rem;
    height: 1.7rem;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .section-link {
    color: ${(props) => props.theme.colors.textPrimaryColor};
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
      background-color: ${(props) => props.theme.colors.tertiaryBgColor};
      transition: all 0.3s ease-in-out;
    }
  }

  .desktop {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }

    &:hover {
      .section-link {
        color: ${(props) => props.theme.colors.textSecondaryColor};
      }
    }

    .section-link {
      padding-right: 2rem;

      &:last-child {
        padding-right: 0;
      }

      &:hover {
        color: ${(props) => props.theme.colors.textPrimaryColor};

        &:after {
          width: 100%;
        }
      }
    }
  }

  .mobile {
    z-index: 10;
    position: fixed;
    top: 4.75rem;
    right: 0;
    bottom: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.secondaryBgColor};

    @media (min-width: 768px) {
      display: none;
    }

    .section-link {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 1.75rem;
    }
  }

  .mobile-fade-in {
    animation: mobile-sections-animation-fowards 0.3s ease-in-out forwards;
  }
  .mobile-fade-out {
    animation: mobile-sections-animation-reversed 0.3s ease-in-out forwards;
  }

  .overlay {
    position: fixed;
    top: 4.75rem;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity ease-in-out 0.3s;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .overlay-fade-in {
    opacity: 1;
  }

  @keyframes mobile-sections-animation-fowards {
    from {
      opacity: 0;
      right: -5rem;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }
  @keyframes mobile-sections-animation-reversed {
    from {
      opacity: 1;
      right: 0;
    }
    to {
      opacity: 0;
      right: -5rem;
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
    link: process.env.MY_RESUME_LINK,
    openInOtherPage: true,
  },
];

export default Navbar;
