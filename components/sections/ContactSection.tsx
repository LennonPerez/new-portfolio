import { FormEvent, useState } from "react";
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
      <div className="contact-section-container">
        <div className="contact-description-container">
          <h2>Get in touch!</h2>
          <p>
            Have you got an interesting idea?, you can contact me through this
            form, or through my social networks. Let&apos;s talk!
          </p>
          <SocialMediaList isLight={false} />
        </div>
        <form className="contact-form-container" onSubmit={onSubmitForm}>
          <div className="responsive-inputs">
            <div className="inputName">
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                isRequired
                isDisabled={isSending}
                value={emailToSend.name}
                onChange={onChangeInput}
              />
            </div>
            <Input
              label="Email"
              name="email"
              placeholder="Enter your email"
              textType="email"
              isRequired
              isDisabled={isSending}
              value={emailToSend.email}
              onChange={onChangeInput}
            />
          </div>
          <Input
            label="Message"
            name="message"
            placeholder="Enter your message"
            linesNum={5}
            isRequired
            isDisabled={isSending}
            value={emailToSend.message}
            onChange={onChangeInput}
          />
          <Button
            isDisabled={isSending}
            buttonType="submit"
          >
            {isSending ? "Sending message" : "Send message"}
          </Button>
        </form>
      </div>
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
            <Button onClick={() => setIsModalOpen(false)}>Got it</Button>
          </div>
        </div>
      </Modal>
    </ContactSectionContainer>
  );
}

const ContactSectionContainer = styled.div`
  width: 90vw;
  padding-top: 6.5rem;
  margin: 0 auto 6.5rem auto;

  @media (min-width: 1024px) {
    padding-top: 8rem;
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

  .contact-section-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
    }

    .contact-description-container {
      margin-bottom: 3rem;

      @media (min-width: 1024px) {
        width: 40%;
        margin-right: 2rem;
        margin-bottom: 0;
      }

      @media (min-width: 1366px) {
        margin-right: 4rem;
      }

      p {
        color: #dfdfdf;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
      }
    }

    .contact-form-container {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media (min-width: 1024px) {
        width: 60%;
      }

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
