import styled from "styled-components";

const socialMedia = [
  {
    name: "Whatsapp",
    url: "https://wa.me/584126736618",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lennonperez/",
  },
  {
    name: "Github",
    url: "https://github.com/LennonPerez",
  },
];

export default function Footer() {
  return (
    <FooterContainer>
      <div className="row">
        <div>
          {socialMedia.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer">
              {s.name}
            </a>
          ))}
        </div>
        <p className="footerMessage">
          Made with ❤️ by Lennon Perez - {new Date().getFullYear()}
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #fcfcfc;
  height: 4rem;
  color: #000;

  .row {
    height: 100%;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin-right: 1rem;
    }
  }
`;
