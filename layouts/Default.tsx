import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout(props: any) {
  const [isScrollOnTop, setIsScrollOnTop] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > 0;
      if (isShow !== isScrollOnTop) setIsScrollOnTop(isShow);
    },
    [isScrollOnTop],
    100
  );

  return (
    <DefaultLayoutContainer>
      <Navbar showShadow={isScrollOnTop} />
      {props.children}
      {/* <Footer /> */}
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.div`
  margin: 0 auto;
  /* margin: 6.5rem 0 auto 0; */

  @media (min-width: 768px) {
    /* margin-top: 9rem; */
  }
`;
