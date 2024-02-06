"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SlideBar from "./SlideBar";
import LineDecoration from "./LineDecoration";
import { LogoIconMobile } from "./icons";

import logoIconPC from "../../../public/images/logo_black.png";
import hamburgerIcon from "../../../public/svgs/hamburger.svg";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import { fadeIn } from "../animations/fadeIn";

//interface
interface IHeaderWrap {
  $scrollDirection: string;
}

//styled-components
const ButtonWrap = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const ButtonWrapMobile = styled(ButtonWrap)`
  height: 108px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const ButtonWrapPC = styled(ButtonWrap)`
  display: none;
  height: 110px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const HeaderWrap = styled.header<IHeaderWrap>`
  opacity: ${(props) => (props.$scrollDirection === "down" ? 0 : 1)};
  transform: translateY(${(props) => (props.$scrollDirection === "down" ? "-20px" : 0)});
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  transition-property: opacity, transform;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 768px) {
    img {
      object-fit: cover;
      display: block;
    }
    a {
      &:hover {
        color: #000;
      }
      &.active {
        color: #000;
      }
    }
  }
`;

const LinkItems = styled.ul`
  display: flex;
  gap: 47px;
`;
const LinkItem = styled.li`
  opacity: 0;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-weight: 500;
  ${fadeInAndUp}
`;

export const Layout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  ${fadeIn}
`;
const HeaderLayout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

// component

export default function Navigation() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openSlideBarHandler = (isOpened: boolean) => {
    setIsOpen(isOpened);
  };
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <SlideBar openSlideBarHandler={openSlideBarHandler} open={isOpen} />
      <HeaderWrap $scrollDirection={scrollDirection}>
        <HeaderLayout>
          <ButtonWrapMobile>
            <Link href="/">
              <LogoIconMobile />
            </Link>
            <button>
              <Image src={hamburgerIcon} alt="햄버거 아이콘" onClick={() => openSlideBarHandler(true)} />
            </button>
          </ButtonWrapMobile>
          <ButtonWrapPC>
            <Link href="/">
              <LogoContainer>
                <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
              </LogoContainer>
            </Link>
            <LinkItems>
              <LinkItem style={{ animationDelay: "0.1s" }}>
                <LineDecoration>
                  <Link href="/project" className={path.endsWith("/project") ? "active" : ""}>
                    PROJECT
                  </Link>
                </LineDecoration>
              </LinkItem>
              <LinkItem style={{ animationDelay: "0.15s" }}>
                <LineDecoration>
                  <Link href="/services" className={path.endsWith("/services") ? "active" : ""}>
                    SERVICES
                  </Link>
                </LineDecoration>
              </LinkItem>
              <LinkItem style={{ animationDelay: "0.2s" }}>
                <LineDecoration>
                  <Link href="/contact" className={path.endsWith("/contact") ? "active" : ""}>
                    CONTACT
                  </Link>
                </LineDecoration>
              </LinkItem>
            </LinkItems>
          </ButtonWrapPC>
        </HeaderLayout>
      </HeaderWrap>
    </>
  );
}

// custom hook for scroll direction
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
