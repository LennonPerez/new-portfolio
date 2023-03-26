import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mySkills from "../../utils/mySkills";

export default function SkillsSection() {
  return (
    <SkillsSectionContainer id="skills-section">
      <h2>My profesional skills</h2>
      <ul className="skills-container">
        {mySkills.map((s, i) => (
          <li key={i} className="skill-container">
            <FontAwesomeIcon className="skill-icon" icon={s.icon} />
            <p>{s.title}</p>
          </li>
        ))}
      </ul>
    </SkillsSectionContainer>
  );
}

const SkillsSectionContainer = styled.div`
  width: 90vw;
  margin: 0 auto 5rem auto;

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
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;

    .skill-container {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      margin-right: 1rem;
      border-radius: 10px;
      background-color: #fcfcfc;
      color: #1f1f24;

      .skill-icon {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
      }
    }
  }
`;
