import styled from "styled-components";
import SocialMediaList from "./shared/SocialMediaList";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <div className="footer-inner-container">
        <SocialMediaList isLight={true} />
        <p className="footer-message">
          Made with ❤️ by Lennon Perez - {currentYear}
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #fcfcfc;
  height: 4rem;
  color: #000;

  .footer-inner-container {
    height: 100%;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
      width: 80vw;
    }

    @media (min-width: 1366px) {
      width: 70vw;
    }

    @media (min-width: 1920px) {
      width: 60vw;
    }

    .footer-message {
      font-size: 0.9rem;
    }
  }
`;
