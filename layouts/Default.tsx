import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
      <Footer />
    </DefaultLayoutContainer>
  );
}

const DefaultLayoutContainer = styled.div`
  /* width: 80vw; */
  margin: 9rem auto 0 auto;
`;
