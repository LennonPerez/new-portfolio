import styled from "styled-components";

export default function SkillsSection() {
  return (
    <SkillsSectionContainer id="skills-section">
      <h2>My Skills Section</h2>
    </SkillsSectionContainer>
  );
}

const SkillsSectionContainer = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
