/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  isDimisible?: boolean;
  onClose: () => void;
  children: any;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
  // let container: HTMLDivElement | undefined;

  // if (typeof window !== "undefined") {
  //   const rootContainer = document.createElement("div");
  //   const parentElement = document.querySelector("#__next");
  //   parentElement?.appendChild(rootContainer);
  //   container = rootContainer;
  // }

  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : " auto";
    document.body.style.paddingRight = props.isOpen ? "5px" : "0";
  }, [props.isOpen]);

  const element: JSX.Element | null = props.isOpen ? (
    <ModalContainer {...props}>
      <div
        className="overlay"
        onClick={() => (props.isDimisible ? props.onClose() : null)}
      />
      <div className="modal active">{props.children}</div>
    </ModalContainer>
  ) : null;

  return element;

  //   return element && container
  //     ? ReactDOM.createPortal(element, container)
  //     : null;
};

const ModalContainer = styled.div<ModalProps>`
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    background-color: #202025;
    padding: 1.5rem;
    z-index: 20;
    opacity: 1;
    transform: translate(-50%, -50%);
    animation: modal-animation 0.3s ease-in-out;

    @keyframes modal-animation {
      from {
        opacity: 0.5;
        right: -5rem;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
  }
`;

export default Modal;
