import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  img {
    width: 193px;
    height: 28px;
    object-fit: cover;
    display: block;
  }
  ul {
    display: flex;
    gap: 47px;
    li {
      color: rgba(0, 0, 0, 0.4);
      font-size: 18px;
      font-weight: 500;
      a {
        &:hover {
          color: #000;
        }
        &.active {
          color: #000;
        }
      }
    }
  }
`;

const FooterWrap = styled.div`
  background-color: #f4f5f8;
  padding: 80px 120px 26px;
  height: 400px;
`;

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderWrap>
        <a href="/">
          <img src="images/logo.png" alt="코드스페이스" />
        </a>
        <ul>
          <li>
            <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </HeaderWrap>
      <Outlet />
      <FooterWrap>footer</FooterWrap>
    </>
  );
};

const NavItem = () => {
  return (
    <li>
      <a href="/project">PROJECT</a>
    </li>
  );
};
