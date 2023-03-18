import styled from "styled-components";

export default function SkillsSection() {
  return (
    <SkillsSectionContainer id="skills-section">
      <h2>My Skills Section</h2>
    </SkillsSectionContainer>
  );
}

const SkillsSectionContainer = styled.div`
  width: 90vw;
  height: 50vh;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 80vw;
  }

  @media (min-width: 1366px) {
    width: 70vw;
  }

  @media (min-width: 1920px) {
    width: 60vw;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
