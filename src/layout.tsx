import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ReactComponent as HamburgerIcon } from "./svgs/hamburger.svg";
import { ReactComponent as LogoIcon } from "./svgs/logo_icon.svg";
import { Link } from "react-router-dom";

const HeaderWrap = styled.header`
  padding: 0 20px;
  div {
    justify-content: space-between;
    align-items: center;
    height: 100px;
    &.mobile {
      height: 108px;
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

const FooterWrap = styled.footer`
  background-color: #f4f5f8;
  padding: 60px 10px 20px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rspWrap {
    header {
      img {
        width: 193px;
        height: 28px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      li {
        display: flex;
        flex-direction: column;
        gap: 14px;
        h2 {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          font-weight: 500;
        }
        div.content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          a {
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            font-weight: 400;
            &:hover {
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    span {
      color: rgba(0, 0, 0, 0.4);
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  @media (min-width: 1200px) {
    padding: 80px 120px 26px;
    .rspWrap {
      justify-content: space-between;
      display: flex;
      ul {
        width: 489px;
        margin-top: 0px;
        li {
          gap: 12px;
          h2 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderWrap>
        <div className="mobile">
          <Link to="/">
            <LogoIcon />
          </Link>
          <button>
            <HamburgerIcon />
          </button>
        </div>
        <div className="pc">
          <Link to="/">
            <img src="images/logo.png" alt="코드스페이스" />
          </Link>
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
      <FooterWrap>
        <div className="rspWrap">
          <header>
            <Link to="/">
              <img src="images/logo.png" alt="코드스페이스" />
            </Link>
          </header>
          <ul>
            <li>
              <h2 className="title">MAIN</h2>
            </li>
            <li>
              <h2 className="title">PROJECT</h2>
              <div className="content">
                <Link to="#">Project</Link>
              </div>
            </li>
            <li>
              <h2 className="title">SERVICES</h2>
              <div className="content">
                <Link to="#">Websites</Link>
                <Link to="#">Application</Link>
                <Link to="#">Management</Link>
                <Link to="#">UI/UX</Link>
                <Link to="#">CMS Solution</Link>
                <Link to="#">SEO</Link>
              </div>
            </li>
            <li>
              <h2 className="title">CONTACT</h2>
              <div className="content">
                <Link to="#"> Contact</Link>
              </div>
            </li>
          </ul>
        </div>
        <footer>
          <span>©2023 Code Space co. ltd.</span>
          <span style={{ display: "none" }}>언어 : 한국어</span>
        </footer>
      </FooterWrap>
    </>
  );
};
export default Layout;
