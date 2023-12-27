import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ReactComponent as HamburgerIcon } from "../src/svgs/hamburger.svg";
import { ReactComponent as LogoIcon } from "../src/svgs/logo_icon.svg";

const HeaderWrap = styled.div`
  padding: 0 20px;

  div {
    justify-content: space-between;
    align-items: center;
    height: 100px;
    &.mobile {
      display: flex;
    }
  }

  @media (min-width: 1200px) {
    div.pc {
      display: flex;
    }
    div.mobile {
      display: none;
    }
    img {
      object-fit: cover;
      display: block;
      width: 193px;
      height: 28px;
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
        <div className="mobile">
          <a href="/">
            <LogoIcon />
          </a>
          <button>
            <HamburgerIcon />
          </button>
        </div>
        <div className="pc">
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
        </div>
      </HeaderWrap>
      <Outlet />
      <FooterWrap>footer</FooterWrap>
    </>
  );
};
