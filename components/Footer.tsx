import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-inner-container">
        <p className="footer-message">
          Made with ❤️ by Lennon Perez
        </p>
        <p className="footer-message">
          <span>📍</span> Guanare, Venezuela - {currentYear}
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondaryBgColor};
  color: ${(props) => props.theme.colors.textPrimaryColor};
  height: 7.5rem;

  @media (min-width: 768px) {
    height: 4rem;
  }

  .footer-inner-container {
    height: 100%;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 1.5rem 0;

    @media (min-width: 768px) {
      padding: 0;
      flex-direction: row;
      justify-content: space-between;
    }

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
      font-size: 1rem;

      span {
        font-size: 0.8rem;
      }
    }
  }
`;
