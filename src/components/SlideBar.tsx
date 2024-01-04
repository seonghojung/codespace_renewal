import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../svgs/close.svg";
import { useEffect } from "react";

interface SlideBarProps {
  closeHandler: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const SlideBar = ({ closeHandler, open }: SlideBarProps) => {
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
    <SlideBarWrap className={open ? "open" : ""}>
      <SlideHeader>
        <div className="mobile">
          <button type="button" onClick={() => closeHandler(true)} style={{ width: "28px", height: "24px" }}>
            <CloseIcon style={{ display: "block" }} />
          </button>
        </div>
      </SlideHeader>
      <SideMenu>
        <MenuList>
          <li>
            <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => closeHandler(true)}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => closeHandler(true)}>
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => closeHandler(true)}>
              CONTACT
            </NavLink>
          </li>
        </MenuList>
      </SideMenu>
    </SlideBarWrap>
  );
};

export default SlideBar;

const SlideBarWrap = styled.div`
  position: fixed;
  z-index: 100;
  width: 375px;
  opacity: 0;
  visibility: hidden;
  background-color: #ccc;
  animation: fadeOut 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  transition: all 0.5s ease-in-out 0.5s;

  &.open {
    visibility: visible;
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    animation: fadeIn 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  @keyframes fadeIn {
    from {
      clip-path: inset(0 0 100% 0);
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
      clip-path: inset(0 0 100% 0);
    }
  }

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

const SlideHeader = styled.header`
  padding: 0 20px;
  div {
    justify-content: flex-end;
    align-items: center;
    height: 108px;
    display: flex;
  }
`;

const SideMenu = styled.div`
  position: relative;
  z-index: 100;
  height: 100vh;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
