import { FormEvent } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";

export default function ContactSection() {
  const onSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Submit contact form");
  };

  return (
    <ContactSectionContainer id="contact-section">
      <h2>Get in touch!</h2>
      <form className="form-container" onSubmit={onSubmitForm}>
        <Input
          label="Name"
          placeholder="Enter your name"
          linesNum={1}
          textType="text"
          isRequired
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          linesNum={1}
          textType="email"
          isRequired
        />
        <Input
          label="Message"
          placeholder="Enter your message"
          linesNum={5}
          textType="text"
          isRequired
        />
        <Button />
      </form>
    </ContactSectionContainer>
  );
}

const ContactSectionContainer = styled.div`
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

  .form-container {
    display: flex;
    flex-direction: column;
  }
`;
