import { FunctionComponent } from "react";
import styled from "styled-components";
import contactOptions from "../../utils/myContactOptions";

interface SocialMediaListProps {
  isLight: boolean;
}

const SocialMediaList: FunctionComponent<SocialMediaListProps> = (props) => {
  return (
    <SocialMediaListContainer {...props}>
      {contactOptions.map((s, i) => (
        <a
          key={i}
          className="social-icon-container"
          href={s.url}
          title={s.name}
          target="_blank"
          rel="noreferrer"
        >
          <s.icon className="icon" />
        </a>
      ))}
    </SocialMediaListContainer>
  );
};

const SocialMediaListContainer = styled.div<SocialMediaListProps>`
  .social-icon-container {
    margin-right: 1rem;
    margin-bottom: 0;
    padding: 0.4rem;
    border-radius: 999px;
    border: 2px solid ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};
    transition: background-color 0.3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    .icon {
      color: ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};
      transition: color 0.3s ease-in-out;
      vertical-align: -0.29rem;
      height: 1.3rem;
      width: 1.3rem;
    }

    &:hover {
      background-color: ${(props) => (props.isLight ? "#1f1f24" : "#fcfcfc")};

      .icon {
        color: ${(props) => (props.isLight ? "#fcfcfc" : "#1f1f24")};
      }
    }
  }
`;

export default SocialMediaList;
