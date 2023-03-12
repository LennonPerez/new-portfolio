import styled from "styled-components";

export default function MyWorkSection() {
  return (
    <MyWorkContainer id="my-work-section">
      <h2>My Work Section</h2>
    </MyWorkContainer>
  );
}

const MyWorkContainer = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
