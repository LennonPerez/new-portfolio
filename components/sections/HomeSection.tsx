import styled from "styled-components";
import Image from "next/image";
import SocialMediaList from "../shared/SocialMediaList";
import profilePicture from "../../public/assets/images/me.jpeg";

export default function HomeSection() {
  return (
    <HeroSectionContainer id="home-section">
      <div className="info-container">
        <h1>Front-end Developer 👋</h1>
        <p>
          Hi, I&apos;m Lennon Perez, A pasionated web | mobile developer with
          more than 2 years of profesional experience based in Venezuela 📍
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
  margin: 0 auto 10rem auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: 80vw;
  }

  @media (min-width: 1366px) {
    width: 50vw;
    margin-top: 10rem;
  }

  @media (min-width: 1920px) {
    width: 40vw;
  }

  .info-container {
    margin-bottom: 3rem;

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
      color: #dfdfdf;
    }
  }

  .image-container {
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
