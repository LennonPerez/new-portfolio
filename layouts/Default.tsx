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
`;

export default DefaultLayout;
