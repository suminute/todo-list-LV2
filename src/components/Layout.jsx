import React from "react";
import { styled } from "styled-components";

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

const Header = () => {
  return (
    <header>
      <h1>Todo-List</h1>
    </header>
  );
};

const Footer = () => {
  return <footer>footer</footer>;
};

const Layout = ({ children }) => {
  return (
    <StContainer>
      <Header />
      {children}
      <Footer />
    </StContainer>
  );
};

export default Layout;
