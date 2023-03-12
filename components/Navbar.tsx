import styled from "styled-components";

export default function Navbar({ showShadow }: NavbarProps) {
  return (
    <NavbarStyles showShadow={showShadow}>
      <h3>Lennon.dev</h3>
      <nav className="nav-sections">
        <a href="#home-section">Home</a>
        <a href="#skills-section">Skills</a>
        <a href="#my-work-section">My work</a>
        <a href="#contact-section">Contact</a>
        <a
          href="https://drive.google.com/file/d/1ai6tfMvslOwRY5gmcyttpOGftkw1kHGv/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </NavbarStyles>
  );
}

type NavbarProps = {
  showShadow: boolean;
};

const NavbarStyles = styled.div<NavbarProps>`
  background-color: #1f1f24;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 1.25rem;
  left: 15vw;
  right: 15vw;
  width: 70vw;
  border-radius: 10px;
  padding-top: 1.5rem;
  padding-bottom: calc(1.5rem - 9px);
  padding-left: ${(props) => (props.showShadow ? "1.5rem" : "0")};
  padding-right: ${(props) => (props.showShadow ? "1.5rem" : "0")};
  transition: box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
  transition: padding 0.2s linear, -webkit-box-shadow 0.2s linear;

  ${(props) =>
    props.showShadow &&
    `
        box-shadow: 0 0 2px rgb(0 0 0 / 80%), 0 4px 12px rgb(0 0 0 / 36%), inset 0 0 0 0.5px rgba(237 237 237);
        -webkit-box-shadow: 0 0 2px rgb(0 0 0 / 80%), 0 4px 12px rgb(0 0 0 / 36%), inset 0 0 0 0.5px rgb(237 237 237);
    `}

  h3 {
    margin-bottom: 5px;
  }

  .nav-sections {
    display: flex;

    &:hover {
      a {
        color: #9e9e9e;
      }
    }

    a {
      cursor: pointer;
      padding-right: 2rem;
      font-size: 1.1rem;
      text-decoration: none;
      color: #fff;
      transition: color 0.3s ease-in-out;

      &:last-child {
        padding-right: 0;
      }

      &:after {
        content: "";
        width: 0%;
        display: block;
        height: 2px;
        margin-top: 3px;
        background-color: #7856ff;
        transition: all 0.3s ease-in-out;
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
