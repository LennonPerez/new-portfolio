import styled from "styled-components";
import mySkills, { skillType } from "../../utils/mySkills";

export default function SkillsSection() {
  const frontEndSkills = mySkills.filter((s) => s.type == skillType.FrontEnd);
  const backEndSkills = mySkills.filter((s) => s.type == skillType.BackEnd);

  return (
    <SkillsSectionContainer id="skills-section">
      <h2>My professional skills</h2>
      <h3>Front-end</h3>
      <ul className="skills-container">
        {frontEndSkills.map((s, i) => (
          <li key={i} className="skill-container">
            <s.icon className="skill-icon" />
            <p>{s.title}</p>
          </li>
        ))}
      </ul>
      <h3>Back-end</h3>
      <ul className="skills-container">
        {backEndSkills.map((s, i) => (
          <li key={i} className="skill-container">
            <s.icon className="skill-icon" />
            <p>{s.title}</p>
          </li>
        ))}
      </ul>
    </SkillsSectionContainer>
  );
}

const SkillsSectionContainer = styled.div`
  width: 90vw;
  padding-top: 6.5rem;
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

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    .skill-container {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.fourthBgColor};
      color: ${(props) => props.theme.colors.textTertiaryColor};

      .skill-icon {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 0.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
