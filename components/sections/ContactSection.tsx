import styled from "styled-components";

export default function ContactSection() {
  return (
    <ContactSectionContainer id="contact-section">
      <h2>Contact Section</h2>
    </ContactSectionContainer>
  );
}

const ContactSectionContainer = styled.div`
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
