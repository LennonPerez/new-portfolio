import styled from "styled-components";
import Image from "next/image";
import myProjects from "../../utils/myProjects";
import Button from "../shared/Button";
import { getSkillByName } from "../../utils/mySkills";

export default function MyWorkSection() {
  return (
    <MyWorkContainer id="my-work-section">
      <h2>My work</h2>
      <ul className="my-work-container">
        {myProjects.map((p, i) => (
          <li key={i} className="project-container">
            <div className="thumbnail-container">
              <Image className="image" src={p.thumbnail} alt={p.title} fill />
            </div>
            <div className="content-container">
              <div className="content-text">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
              </div>
              <div className="project-buttons">
                <Button
                  isDisabled={!p.repoLink}
                  onClick={() => window.open(p.repoLink, "_blank")}
                >
                  Repository
                </Button>
                <Button
                  isDisabled={!p.webLink}
                  onClick={() => window.open(p.webLink, "_blank")}
                >
                  {p.isAppInProd ? "Go to app" : "Live demo"}
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </MyWorkContainer>
  );
}

const MyWorkContainer = styled.div`
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

  .my-work-container {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    /* @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    } */

    @media (min-width: 1366px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .project-container {
      border-radius: 10px;
      background-color: #303036;
      /* background-color: #fcfcfc; */

      @media (min-width: 768px) {
        display: flex;
        min-height: 15rem;
      }

      .thumbnail-container {
        position: relative;
        height: 15rem;

        @media (min-width: 768px) {
          height: 100%;
          width: 40%;
        }

        .image {
          object-fit: cover;
          border-radius: 10px 10px 0 0;
          z-index: 0;

          @media (min-width: 768px) {
            border-radius: 10px 0 0 10px;
          }
        }
      }

      .content-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;

        @media (min-width: 768px) {
          width: 60%;
        }

        .content-text {
          .project-title {
            /* color: #1f1f24; */
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .project-description {
            color: #dfdfdf;
            margin-bottom: 1.5rem;
          }
        }

        .project-buttons {
          display: flex;

          button:first-child {
            margin-right: 1rem;
          }
          button:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
