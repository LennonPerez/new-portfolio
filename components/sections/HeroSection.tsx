import styled from "styled-components";

export default function HeroSection() {
  return (
    <HeroSectionContainer id="home-section">
      <h1>Front-end Developer</h1>
    </HeroSectionContainer>
  );
}

const HeroSectionContainer = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;
