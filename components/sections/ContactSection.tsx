import styled from "styled-components";

export default function ContactSection() {
  return (
    <ContactSectionContainer id="contact-section">
      <h2>Contact Section</h2>
    </ContactSectionContainer>
  );
}

const ContactSectionContainer = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
