"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LineDecoration from "./LineDecoration";
import { useDetectScrollbar } from "./navigation";
import UnderLineLink from "./UnderLineLink";

// interface
interface SlideBarProps {
  openSlideBarHandler: (isOpened: boolean) => void;
  open: boolean;
  localeAddress: string;
}

//styled-components

const Section = styled.div`
  position: relative;
  z-index: 10;
`;

const SlideBarWrap = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background-color: #17191f;
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
    align-items: center;
    font-size: 30px;
    line-height: 1.36;
    color: #fff;

    &:not(:first-child) {
      margin-top: 20px;
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

const SlideSection = styled.div`
  padding-top: calc(64px + 40px);
  padding-bottom: 40px;
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;
`;

const SlideWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  margin-bottom: 45px;
`;

const SlideMenu = styled.div`
  margin-bottom: 110px;
  flex: 1 1;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const MailWrap = styled.div`
  margin-bottom: 65px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 5px;
  color: #858e97;
`;

const MailLinkText = styled.span`
  font-size: 24px;
  line-height: 135%;
  color: #fff;
`;

const Name = styled.span`
  font-size: 14px;
  color: #fff;
`;

// component
const SlideBar = ({ openSlideBarHandler, open, localeAddress }: SlideBarProps) => {
  const [scrollY, setScrollY] = useState(0);
  const hasScrollbar = useDetectScrollbar();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (!open) {
        setScrollY(window.scrollY);
      }
    };

    if (!open) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.left = "0";
      document.body.style.right = hasScrollbar ? "15px" : "0";
      document.body.style.top = `-${scrollY}px`;
      localStorage.setItem("scrollPosition", scrollY.toString());
    }
    return () => {
      document.body.style.cssText = "";
      const storedScrollPosition = localStorage.getItem("scrollPosition");
      if (storedScrollPosition !== null) {
        window.scrollTo({
          top: parseInt(storedScrollPosition),
          behavior: "instant",
        });
      }
      localStorage.removeItem("scrollPosition");
    };
  }, [open]);

  return (
    <Portal>
      <Section>
        <SlideBarWrap className={open ? (hasScrollbar ? "open hasScrollbar" : "open") : ""}>
          <SlideSection>
            <SlideWrap>
              <SlideMenu>
                <MenuList>
                  <li>
                    <LineDecoration color={"white"}>
                      <Link href="/project" onClick={() => openSlideBarHandler(false)}>
                        Project
                      </Link>
                    </LineDecoration>
                  </li>
                  <li>
                    <LineDecoration color={"white"}>
                      <Link href="/services" onClick={() => openSlideBarHandler(false)}>
                        Services
                      </Link>
                    </LineDecoration>
                  </li>
                  <li>
                    <LineDecoration color={"white"}>
                      <Link href="/contact" onClick={() => openSlideBarHandler(false)}>
                        Contact
                      </Link>
                    </LineDecoration>
                  </li>
                </MenuList>
              </SlideMenu>
              <MailWrap>
                <Title>Get in touch</Title>
                <UnderLineLink theme="white" href="mailto:contact@codespace.im">
                  <MailLinkText>contact@codespace.im</MailLinkText>
                </UnderLineLink>
              </MailWrap>
            </SlideWrap>
            <UnderLineLink
              theme="white"
              href={
                "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B2%95%EC%9B%90%EB%A1%9C%20128/address/14150979.9785491,4507188.389424,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B2%95%EC%9B%90%EB%A1%9C%20128,new?searchType=address&isCorrectAnswer=true&c=15.00,0,0,0,dh"
              }
            >
              <Name>{localeAddress}</Name>
            </UnderLineLink>
          </SlideSection>
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
