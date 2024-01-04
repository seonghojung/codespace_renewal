import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ReactComponent as HamburgerIcon } from "./svgs/hamburger.svg";
import { ReactComponent as LogoIcon } from "./svgs/logo_icon.svg";
import { ReactComponent as CloseIcon } from "./svgs/close.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    padding: 0 120px;
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
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const isCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* {isOpen && <App2 closeHandler={isCloseHandler} open={isOpen} />} */}
      <App2 closeHandler={isCloseHandler} open={isOpen} />
      <GlobalStyle />
      <HeaderWrap>
        <div className="mobile">
          <Link to="/">
            <LogoIcon />
          </Link>
          <button>
            <HamburgerIcon onClick={isOpenHandler} />
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

const App2 = ({ closeHandler, open }: any) => {
  useEffect(() => {
    if (open) {
      document.body.style.cssText = `
        position: fixed; 
        left: 50%;
        transform: translate(-50%);
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [open]);

  return (
    <AppWrapper className={open ? "open" : ""}>
      <HeadersWrap>
        <div className="mobile">
          <Link to="/">
            <LogoIcon onClick={closeHandler} />
          </Link>
          <button type="button" onClick={closeHandler}>
            <CloseIcon />
          </button>
        </div>
        <SideMenu>
          <MenuList>
            <li>
              <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeHandler}>
                PROJECT
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeHandler}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeHandler}>
                CONTACT
              </NavLink>
            </li>
          </MenuList>
        </SideMenu>
      </HeadersWrap>
      <Test className={open ? "open" : ""}>
        <TestChild className={open ? "open" : ""} />
      </Test>
    </AppWrapper>
  );
};

const HeadersWrap = styled.header`
  position: fixed;
  z-index: 12;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  div {
    justify-content: space-between;
    align-items: center;
    &.mobile {
      height: 108px;
      display: flex;
    }
  }
`;

const Test = styled.div`
  max-width: 100%;
  width: 100%;
  height: 760px;
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
`;
const TestChild = styled.div`
  /* display: none; */
  /* visibility: hidden; */
  background: rgb(255, 255, 255);
  border-radius: 100%;
  position: absolute;
  top: 40px;
  right: 35px;
  width: 150vh;
  height: 150vh;
  transform: translate3d(35vh, -35vh, 0px);
  /* transition: all 0.7s ease 0s; */
  animation: fadeOut 0.5s ease forwards;
  &.open {
    /* display: block; */
    /* visibility: visible; */
    /* transition: all 0.7s ease 0s; */

    animation: fadeIn 0.7s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      width: 0;
      height: 0;
    }
    to {
      width: 150vh;
      height: 150vh;
    }
  }
  @keyframes fadeOut {
    from {
      width: 150vh;
      height: 150vh;
      top: 40px;
      right: 35px;
    }
    to {
      width: 50vh;
      height: 50vh;
      top: 20%;
      right: 50%;
    }
  }
  @keyframes transitions {
    from {
      transform: translate3d(35vh, -35vh, 0px);
    }
    to {
      transform: 0;
    }
  }
  @keyframes transitions2 {
    from {
      transform: 0;
    }
    to {
      transform: translate3d(35vh, -35vh, 0px);
    }
  }
`;

const AppWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgb(69, 117, 245);
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease 0s;

  &.open {
    visibility: visible;
    opacity: 1;

    /* transition: opacity 1s ease 0s; */
    /* animation: visi 10s ease forwards; */
  }

  @keyframes visi {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }

  /*  */
  /* display: none;
  clip-path: inset(0 0 0 100%);
  animation: fadeOut 1s cubic-bezier(0.19, 1, 0.22, 1) forwards, displayOut 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  &.open {
    display: block;
    animation: fadeIn 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards,
      displayIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  @keyframes fadeIn {
    from {
      clip-path: inset(0 0 0 100%);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes fadeOut {
    from {
      clip-path: inset(0 0 0 0);
    }
    to {
      clip-path: inset(0 0 0 100%);
    }
  }

  @keyframes displayIn {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }

  @keyframes displayOut {
    from {
      display: block;
    }
    to {
      display: none;
    }
  } */
  li {
    margin-top: 57px;
    margin-left: 10px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.36;
    color: rgba(0, 0, 0, 0.4);
    a {
      &:hover {
        color: #000;
      }
      &.active {
        animation: paintText 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      }

      @keyframes paintText {
        from {
          color: rgba(0, 0, 0, 0.4);
        }
        to {
          color: #000;
        }
      }
    }
  }
`;

const MenuHeader = styled.header`
  padding: 0 20px;
  /* background-color: #17191f; */
  background-color: rgb(69, 117, 245);
  div {
    justify-content: space-between;
    align-items: center;
    height: 100px;
    &.mobile {
      height: 108px;
      display: flex;
    }
  }
`;

const SideMenu = styled.div`
  position: relative;
  z-index: 100;
  width: 100vw;
  /* height: 100vh; */
  /* background-color: #17191f; */
  /* background-color: rgb(69, 117, 245); */
  overflow-x: hidden;
  transition: width 0.5s;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
