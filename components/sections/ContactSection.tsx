import { ChangeEvent, FormEvent, useState } from "react";
import { EmailToSend, sendContactInfo } from "../../services/contactService";
import styled from "styled-components";
import Button from "../shared/Button";
import Input, { InputEvent } from "../shared/Input";
import Modal from "../shared/Modal";
import SocialMediaList from "../shared/SocialMediaList";

const baseEmailToSend: EmailToSend = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [emailToSend, setEmailToSend] = useState<EmailToSend>(baseEmailToSend);
  const [isSending, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalError, setIsModalError] = useState<boolean>(false);

  const onChangeInput = (e: InputEvent) => {
    setEmailToSend({
      ...emailToSend,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setIsLoading(true);
    const res: boolean = await sendContactInfo(emailToSend);
    setIsModalOpen(true);
    setIsLoading(false);

    if (res) setEmailToSend(baseEmailToSend);
    setIsModalError(!res);
  };

  return (
    <ContactSectionContainer id="contact-section">
      <h2>Get in touch!</h2>
      <form className="form-container" onSubmit={onSubmitForm}>
        <div className="responsive-inputs">
          <div className="inputName">
            <Input
              label="Name"
              name="name"
              placeholder="Enter your name"
              isDisabled={isSending}
              isRequired
              onChange={onChangeInput}
            />
          </div>
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            textType="email"
            isDisabled={isSending}
            isRequired
            onChange={onChangeInput}
          />
        </div>
        <Input
          label="Message"
          name="message"
          placeholder="Enter your message"
          linesNum={5}
          isDisabled={isSending}
          isRequired
          onChange={onChangeInput}
        />
        <Button
          text="Submit"
          isLoading={isSending}
          buttonType="submit"
          // onClick={() => setIsModalOpen(true)}
        />
      </form>
      <Modal
        isOpen={isModalOpen}
        isDimisible
        onClose={() => setIsModalOpen(false)}
      >
        <div className="modal">
          <h3 className="modal-title">
            {isModalError
              ? "Oops, an error has ocurred! 🙁"
              : "Message sent sucessfully! 🥳"}
          </h3>
          <p className="modal-description">
            {isModalError
              ? "You still can contact me through my social media links down bellow"
              : "I will contact you as soon as posible, see you soon!"}
          </p>
          {isModalError ? (
            <div className="modal-social-media">
              <SocialMediaList isLight={false} />
            </div>
          ) : null}
          <div className="modal-btn">
            <Button text="Got it" onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      </Modal>
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

    .responsive-inputs {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        width: 100%;
        flex-direction: row;

        .inputName {
          width: 100%;
          margin-right: 1rem;
        }
      }
    }
  }

  .modal {
    width: 85vw;

    @media (min-width: 450px) {
      max-width: 400px;
    }

    .modal-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .modal-description {
      font-size: 1rem;
      color: #dfdfdf;
      margin-bottom: 1.5rem;
    }
    .modal-social-media {
      margin-bottom: 2rem;
    }
    .modal-btn {
      display: flex;
      width: 100%;
    }
  }
`;
