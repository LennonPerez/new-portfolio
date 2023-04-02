/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  isDimisible?: boolean;
  onClose: () => void;
  children: any;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
  const [renderModal, setRenderModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    document.body.style.paddingRight = props.isOpen ? "5px" : "0";

    if (props.isOpen) {
      setRenderModal(true);
      setShowModal(true);
    } else {
      setShowModal(false);
      setTimeout(() => setRenderModal(false), 200);
    }
  }, [props.isOpen]);

  const onCloseModal = () => {
    if (!props.isDimisible) return;

    setShowModal(false);
    setTimeout(() => props.onClose(), 200);
  };

  const element: JSX.Element | null = renderModal ? (
    <ModalContainer {...props}>
      <div
        className={`overlay ${showModal ? "overlay-fade-in" : ""}`}
        onClick={onCloseModal}
      />
      <div className={`modal ${showModal ? "modal-show" : "modal-hide"}`}>
        {props.children}
      </div>
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
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease-in-out;
  }
  .overlay-fade-in {
    opacity: 1;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primaryBgColor};
    padding: 1.5rem;
    z-index: 20;
    transform: translate(-50%, -50%);
  }

  .modal-show {
    animation: show-modal-animation 0.2s ease-in-out forwards;
  }
  .modal-hide {
    animation: hide-modal-animation 0.2s ease-in-out forwards;
  }

  @keyframes show-modal-animation {
    from {
      opacity: 0;
      right: -5rem;
    }
    to {
      opacity: 1;
      right: 0;
    }
  }

  @keyframes hide-modal-animation {
    from {
      opacity: 1;
      right: 0;
    }
    to {
      opacity: 0;
      right: -5rem;
    }
  }
`;

export default Modal;
