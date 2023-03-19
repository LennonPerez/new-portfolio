import styled from "styled-components";
import myProjects from "../../utils/myProjects";

export default function MyWorkSection() {
  return (
    <MyWorkContainer id="my-work-section">
      <h2>My work</h2>
      <ul className="my-work-container">
        {myProjects.map((p, i) => (
          <li key={i} className="project-container">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </MyWorkContainer>
  );
}

const MyWorkContainer = styled.div`
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

  .my-work-container {
    list-style: none;

    .project-container {
      padding: 1rem;
      border-radius: 10px;
      background-color: #fcfcfc;
      margin-bottom: 2rem;

      h3,
      p {
        color: #1f1f24;
      }

      h3 {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
