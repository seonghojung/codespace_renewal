"use client";

import styled from "styled-components";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import closeIcon from "../../../public/svgs/close.svg";

interface SlideBarProps {
  openSlideBarHandler: (isOpened: boolean) => void;
  open: boolean;
}

const SlideBar = ({ openSlideBarHandler, open }: SlideBarProps) => {
  const path = usePathname();
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
          <button type="button" onClick={() => openSlideBarHandler(false)}>
            <Image src={closeIcon} alt="닫기 아이콘" />
          </button>
        </div>
      </SlideHeader>
      <SideMenu>
        <MenuList>
          <li>
            <Link href="/project" className={path.endsWith("/project") ? "active" : ""} onClick={() => openSlideBarHandler(false)}>
              PROJECT
            </Link>
          </li>
          <li>
            <Link href="/services" className={path.endsWith("/services") ? "active" : ""} onClick={() => openSlideBarHandler(false)}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/contact" className={path.endsWith("/contact") ? "active" : ""} onClick={() => openSlideBarHandler(false)}>
              CONTACT
            </Link>
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
  width: 100%;
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
