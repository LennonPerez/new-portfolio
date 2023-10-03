import styled from "styled-components";
import Image from "next/image";
import SocialMediaList from "../shared/SocialMediaList";
import profilePicture from "../../public/assets/images/me.jpeg";
// import profilePicture from "../../public/assets/images/me.png";

export default function HomeSection() {
  const currentYear = new Date().getFullYear();
  const myDebutYear = new Date("01-09-2021").getFullYear();
  const myYearsOfExperience = currentYear - myDebutYear;

  return (
    <HeroSectionContainer id="home-section">
      <div className="info-container">
        <h1>Front-end Developer 👋</h1>
        <p>
          Hi, I&apos;m Lennon Perez, a passionate web | mobile developer with
          more than {myYearsOfExperience} years of professional experience,
          currently based in Venezuela <span>📍</span>
        </p>
        <SocialMediaList isLight={false} />
      </div>
      <div className="image-container">
        <Image className="image" src={profilePicture} alt="Lennon" fill />
      </div>
    </HeroSectionContainer>
  );
}

const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  padding-top: 7rem;
  margin: 0 auto 4rem auto;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 10rem;
  }

  @media (min-width: 1024px) {
    width: 80vw;
  }

  @media (min-width: 1366px) {
    width: 50vw;
  }

  @media (min-width: 1920px) {
    width: 40vw;
  }

  .info-container {
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      width: 50%;
      margin-right: 3rem;
      margin-bottom: 0;
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.textFourthColor};

      span {
        font-size: 0.8rem;
      }
    }
  }

  .image-container {
    background-color: ${(props) => props.theme.colors.secondaryBgColor};
    position: relative;
    border-radius: 9999px;
    width: 80vw;
    height: 80vw;
    max-width: 20rem;
    max-height: 20rem;

    @media (min-width: 768px) {
      width: 50%;
    }

    .image {
      border-radius: 9999px;
      z-index: 0;
    }
  }
`;
