import styled from "styled-components";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <DefaultLayoutContainer>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </DefaultLayoutContainer>
  );
};

const DefaultLayoutContainer = styled.div`
  margin: 0 auto;
  /* margin: 6.5rem 0 auto 0; */

  @media (min-width: 768px) {
    /* margin-top: 9rem; */
  }
`;

export default DefaultLayout;
