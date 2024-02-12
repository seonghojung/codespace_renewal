"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LineDecoration from "./LineDecoration";
import { useDetectScrollbar } from "./navigation";

// interface
interface SlideBarProps {
  openSlideBarHandler: (isOpened: boolean) => void;
  open: boolean;
}

//styled-components

const Section = styled.div`
  position: relative;
  z-index: 10;
`;

const SlideBarWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
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

  &.hasScrollbar {
    padding-right: 15px;
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
    /* justify-content: center; */
    align-items: center;
    font-size: 28px;
    line-height: 1.36;
    color: #fff;
    /* margin-top: 57px; */
    margin-left: 24px;

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

const SlideMenu = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 108px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

// component
const SlideBar = ({ openSlideBarHandler, open }: SlideBarProps) => {
  const path = usePathname();
  const hasScrollbar = useDetectScrollbar();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [open]);

  return (
    <Portal>
      <Section>
        <SlideBarWrap className={open ? (hasScrollbar ? "open hasScrollbar" : "open") : ""}>
          <SlideMenu>
            <MenuList>
              <li>
                <LineDecoration color={"white"}>
                  <Link
                    href="/project"
                    className={path.endsWith("/project") ? "" : ""}
                    onClick={() => openSlideBarHandler(false)}
                  >
                    PROJECT
                  </Link>
                </LineDecoration>
              </li>
              <li>
                <LineDecoration color={"white"}>
                  <Link
                    href="/services"
                    className={path.endsWith("/services") ? "" : ""}
                    onClick={() => openSlideBarHandler(false)}
                  >
                    SERVICES
                  </Link>
                </LineDecoration>
              </li>
              <li>
                <LineDecoration color={"white"}>
                  <Link
                    href="/contact"
                    className={path.endsWith("/contact") ? "" : ""}
                    onClick={() => openSlideBarHandler(false)}
                  >
                    CONTACT
                  </Link>
                </LineDecoration>
              </li>
            </MenuList>
          </SlideMenu>
        </SlideBarWrap>
      </Section>
    </Portal>
  );
};
export default SlideBar;

const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === "undefined") return <></>;

  return mounted ? createPortal(children, document.getElementById("portal") as HTMLElement) : <></>;
};
