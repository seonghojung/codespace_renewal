"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SlideBar from "./SlideBar";
import LineDecoration from "./LineDecoration";
import { LogoIconMobile, LogoIconWhiteMobile } from "./icons";

import logoIconPC from "../../../public/images/logo_black.png";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import { fadeIn } from "../animations/fadeIn";

//interface
interface IHeaderWrap {
  $scrollDirection: string;
  $open: boolean;
}

// export styled-components
export const Layout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 0 auto;
  }
  @media (min-width: 1920px) {
    max-width: 1536px;
  }
`;

//styled-components
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
`;
const ButtonWrapMobile = styled(ButtonWrap)`
  @media (min-width: 768px) {
    display: none;
  }
`;
const ButtonWrapPC = styled(ButtonWrap)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const MbLogoWrap = styled(Link)`
  margin-right: auto;
  @media (min-width: 768px) {
    position: relative;
    left: -26px;
    display: block;
  }
`;

const HeaderWrap = styled.header<IHeaderWrap>`
  position: sticky;
  top: 0;
  z-index: 11;
  opacity: ${(props) => (props.$scrollDirection === "up" || props.$open ? 1 : 0)};
  transform: ${(props) => (props.$scrollDirection === "up" || props.$open ? "none" : "translateY(-64px)")};
  background-color: ${(props) => (props.$open ? "transparent" : "#fff")};
  transition-property: opacity, transform, background-color;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  img {
    object-fit: cover;
    display: block;
  }

  @media (min-width: 768px) {
  }
`;

const LinkItems = styled.ul`
  display: flex;
`;
const LinkItem = styled.li`
  opacity: 0;
  color: rgb(5, 4, 17);
  font-size: 15px;
  line-height: 130%;
  ${fadeInAndUp}
  padding: 5px 10px;

  &:not(:first-child) {
    margin-left: 18px;
  }

  a {
    position: relative;
    display: inline-block;
  }

  @media (min-width: 1280px) {
    padding: 6px 10px;
    font-size: 20px;
    &:not(:first-child) {
      margin-left: 33px;
    }
  }

  @media (min-width: 1920px) {
    &:not(:first-child) {
      margin-left: 47px;
    }
  }
`;

const LogoContainer = styled.div`
  ${fadeIn}
`;
const HeaderLayout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: 768px) {
    margin-left: 40px;
    margin-right: 40px;
    padding-top: 30.25px;
    padding-bottom: 30.25px;
  }
  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 0 auto;
    padding-top: 36px;
    padding-bottom: 36px;
  }
  @media (min-width: 1920px) {
    max-width: 1536px;
  }
`;
const HeaderMenu = styled.button`
  display: flex;
  align-self: stretch;
  align-items: center;
  transform: translateX(8px);
`;

const HeaderBurger = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;
const BurgerTop = styled.div`
  position: absolute;
  z-index: 0;
  background-color: #000;
  left: 8px;
  width: 24px;
  height: 2px;
  top: 15px;
  transition-delay: 0s, 0.2s, 0s;
  transition-property: background-color, top, transform;
  transition-duration: 0.2s, 0.2s, 0.2s;
  &.open {
    background-color: #fff;
    transform: rotate(45deg);
    top: 19px;
    transition-delay: 0s, 0s, 0.22s;
  }
`;
const BurgerBottom = styled.div`
  position: absolute;
  z-index: 0;
  background-color: #000;
  left: 8px;
  width: 24px;
  height: 2px;
  top: 25px;
  transition-delay: 0s, 0.2s, 0s;
  transition-property: background-color, top, transform;
  transition-duration: 0.2s, 0.2s, 0.2s;

  &.open {
    background-color: #fff;
    transform: rotate(-45deg);
    top: 19px;
    transition-delay: 0s, 0s, 0.22s;
  }
`;

// component

export default function Navigation({
  locale,
  localeAddress,
  localeAddressURL,
  localeOptions,
  localeLable,
}: {
  locale: string;
  localeAddress: string;
  localeAddressURL: string;
  localeOptions: JSX.Element[];
  localeLable: string;
}) {
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
      <SlideBar
        openSlideBarHandler={openSlideBarHandler}
        open={isOpen}
        localeAddress={localeAddress}
        localeAddressURL={localeAddressURL}
        localeOptions={localeOptions}
        locale={locale}
        localeLable={localeLable}
      />
      <HeaderWrap $scrollDirection={scrollDirection} $open={isOpen}>
        <HeaderLayout>
          <ButtonWrapMobile>
            <MbLogoWrap
              href="/"
              onClick={() => {
                openSlideBarHandler(false);
              }}
            >
              {isOpen ? <LogoIconWhiteMobile /> : <LogoIconMobile />}
            </MbLogoWrap>
            <HeaderMenu>
              <HeaderBurger
                onClick={() => {
                  openSlideBarHandler(!isOpen);
                }}
              >
                <BurgerTop className={isOpen ? "open" : ""} />
                <BurgerBottom className={isOpen ? "open" : ""} />
              </HeaderBurger>
            </HeaderMenu>
          </ButtonWrapMobile>
          <ButtonWrapPC>
            <MbLogoWrap href="/">
              <LogoContainer>
                <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
              </LogoContainer>
            </MbLogoWrap>
            <nav style={{ display: "block" }}>
              <LinkItems>
                <LinkItem style={{ animationDelay: "0.1s" }}>
                  <LineDecoration active={path.endsWith("/project")}>
                    <Link href="/project" className={path.endsWith("/project") ? "active" : ""}>
                      Project
                    </Link>
                  </LineDecoration>
                </LinkItem>
                <LinkItem style={{ animationDelay: "0.15s" }}>
                  <LineDecoration active={path.endsWith("/services")}>
                    <Link href="/services" className={path.endsWith("/services") ? "active" : ""}>
                      Services
                    </Link>
                  </LineDecoration>
                </LinkItem>
                <LinkItem style={{ animationDelay: "0.2s" }}>
                  <LineDecoration active={path.endsWith("/contact")}>
                    <Link href="/contact" className={path.endsWith("/contact") ? "active" : ""}>
                      Contact
                    </Link>
                  </LineDecoration>
                </LinkItem>
              </LinkItems>
            </nav>
          </ButtonWrapPC>
        </HeaderLayout>
      </HeaderWrap>
    </>
  );
}

// custom hook for scroll direction
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (scrollY !== 0) {
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
    };
    const handleScroll = () => {
      updateScrollDirection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

// custom hook for Detacted scroll
export function useDetectScrollbar() {
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const checkScrollbar = () => {
      const hasScroll = window.innerWidth > document.documentElement.clientWidth;

      if (hasScroll) {
        setHasScrollbar(true);
      } else {
        setHasScrollbar(false);
      }
    };
    checkScrollbar();
    window.addEventListener("resize", checkScrollbar);

    return () => {
      window.removeEventListener("resize", checkScrollbar);
    };
  }, []);

  return hasScrollbar;
}
