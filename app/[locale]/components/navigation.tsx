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
  $hasScrollbar: boolean;
  $hold: string;
}

// export styled-components
export const Layout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

//styled-components
const ButtonWrap = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const ButtonWrapMobile = styled(ButtonWrap)`
  height: 64px;
  @media (min-width: 768px) {
    display: none;
  }
  /* 왜 line-height가 16.8px 먹혀있는건지 이유를 찾을수가 없음*/
  /* a {
    line-height: 0;
  } */
`;
const ButtonWrapPC = styled(ButtonWrap)`
  display: none;
  height: 110px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const HeaderWrap = styled.header<IHeaderWrap>`
  position: sticky;
  top: 0;
  z-index: 11;
  /* opacity: ${(props) => (props.$scrollDirection === "down" ? 0 : 1)}; */
  /* opacity: ${(props) => ((props.$scrollDirection === "up" && props.$hold !== "hold") || props.$open ? 1 : 0)}; */
  opacity: ${(props) => (props.$scrollDirection === "up" || props.$open ? 1 : 0)};
  transform: ${(props) => (props.$scrollDirection === "up" || props.$open ? "none" : "translateY(-64px)")};
  background-color: ${(props) => (props.$open ? "transparent" : "#fff")};
  padding-right: ${(props) => (props.$open ? (props.$hasScrollbar ? "0" : "0") : "0")};
  transition-property: opacity, transform, background-color;
  transition-duration: 0.6s;
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

export default function Navigation() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [xClick, setXClick] = useState("");

  const openSlideBarHandler = (isOpened: boolean) => {
    setIsOpen(isOpened);
  };

  const closeSlideBarHandler = () => {
    xClick === "hold" ? setXClick("") : setXClick("hold");
  };

  // 스크롤 방향 감지
  // const scrollDirection = useScrollDirection();
  const [scrollDirection, setScrollDirection] = useState("up");

  console.log(xClick, "xClick");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (xClick !== "hold") {
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;

        // if (xClick !== "hold" && isOpen === false) {
        //   setScrollDirection("up");
        // }
      }
    };
    const handleScroll = () => {
      if (xClick !== "hold") {
        updateScrollDirection();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  // 스크롤바 유무 감지
  const hasScrollbar = useDetectScrollbar();

  // 브라우저의 크기를 조절 할 때마다 햄버거 메뉴 열린상태 초기화
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
      <HeaderWrap $scrollDirection={scrollDirection} $open={isOpen} $hasScrollbar={hasScrollbar} $hold={xClick}>
        <HeaderLayout>
          <ButtonWrapMobile>
            <Link
              href="/"
              onClick={() => {
                openSlideBarHandler(false);
                // closeSlideBarHandler();
              }}
            >
              {isOpen ? <LogoIconWhiteMobile /> : <LogoIconMobile />}
            </Link>
            <HeaderMenu>
              {/* <HeaderBurger onClick={() => openSlideBarHandler() setXClick(!xClick)}> */}
              <HeaderBurger
                onClick={() => {
                  openSlideBarHandler(!isOpen);
                  closeSlideBarHandler();
                }}
              >
                <BurgerTop className={isOpen ? "open" : ""} />
                <BurgerBottom className={isOpen ? "open" : ""} />
              </HeaderBurger>
            </HeaderMenu>
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
// export function useScrollDirection() {
// const [scrollDirection, setScrollDirection] = useState("up");

// useEffect(() => {
//   let lastScrollY = window.scrollY;

//   const updateScrollDirection = () => {
//     const scrollY = window.scrollY;
//     const direction = scrollY > lastScrollY ? "down" : "up";

//     if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
//       setScrollDirection(direction);
//     }
//     lastScrollY = scrollY > 0 ? scrollY : 0;
//   };

//   const handleScroll = () => {
//     updateScrollDirection();
//   };
//   console.log(scrollY, "scrollY");
//   console.log(lastScrollY, "lastScrollY");
//   console.log(scrollDirection, "방향");

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, [scrollDirection]);

// return scrollDirection;
// }

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
    // 컴포넌트가 마운트되었을 때와 창 크기가 변경될 때마다 스크롤바를 확인
    checkScrollbar();
    window.addEventListener("resize", checkScrollbar);

    return () => {
      window.removeEventListener("resize", checkScrollbar);
    };
  }, []);

  return hasScrollbar;
}
