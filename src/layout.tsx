import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  ul {
    display: flex;
    li {
    }
  }
`;

const Footer = styled.div``;

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderWrap>
        <img src="src/images/logo.png" alt="코드스페이스" />
        <ul>
          <li>PROJECT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
      </HeaderWrap>
      <Outlet />
      <Footer>footer</Footer>
    </>
  );
};
