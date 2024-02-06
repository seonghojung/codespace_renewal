"use client";

import { useEffect } from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LineDecoration from "./LineDecoration";

import closeIcon from "../../../public/svgs/close_white.svg";
import logoIcon from "../../../public/svgs/logo_white.svg";

// interface
interface SlideBarProps {
  openSlideBarHandler: (isOpened: boolean) => void;
  open: boolean;
}

//styled-components

const SlideBarWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  background-color: #000;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    line-height: 1.36;
    color: #fff;
    margin-top: 57px;

    &:not(:first-child) {
      margin-top: 28px;
    }

    a {
      &:hover {
        color: #fff;
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
  margin: 0 24px;
`;

const HeaderList = styled.div`
  display: flex;
  height: 108px;
  justify-content: space-between;
  align-items: center;
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

// component
const SlideBar = ({ openSlideBarHandler, open }: SlideBarProps) => {
  const path = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [open]);

  return (
    <SlideBarWrap className={open ? "open" : ""}>
      <SlideHeader>
        <HeaderList>
          <Link href="/" onClick={() => openSlideBarHandler(false)}>
            <Image src={logoIcon} alt="logo" />
          </Link>
          <button type="button" onClick={() => openSlideBarHandler(false)}>
            <Image src={closeIcon} alt="close" />
          </button>
        </HeaderList>
      </SlideHeader>
      <SideMenu>
        <MenuList>
          <li>
            <LineDecoration color={"white"}>
              <Link href="/project" className={path.endsWith("/project") ? "" : ""} onClick={() => openSlideBarHandler(false)}>
                PROJECT
              </Link>
            </LineDecoration>
          </li>
          <li>
            <LineDecoration color={"white"}>
              <Link href="/services" className={path.endsWith("/services") ? "" : ""} onClick={() => openSlideBarHandler(false)}>
                SERVICES
              </Link>
            </LineDecoration>
          </li>
          <li>
            <LineDecoration color={"white"}>
              <Link href="/contact" className={path.endsWith("/contact") ? "" : ""} onClick={() => openSlideBarHandler(false)}>
                CONTACT
              </Link>
            </LineDecoration>
          </li>
        </MenuList>
      </SideMenu>
    </SlideBarWrap>
  );
};

export default SlideBar;
