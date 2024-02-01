"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SlideBar from "./SlideBar";
import { LogoIconMobile } from "./icons";
import logoIconPC from "../../../public/images/logo.png";
import hamburgerIcon from "../../../public/svgs/hamburger.svg";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import styled from "styled-components";
import { fadeIn } from "../animations/fadeIn";
import LineDecoration from "./LineDecoration";

const ButtonWrap = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const ButtonWrapMobile = styled(ButtonWrap)`
  height: 108px;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const ButtonWrapPC = styled(ButtonWrap)`
  display: none;
  height: 100px;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const HeaderWrap = styled.header`
  @media (min-width: 1200px) {
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
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  ${fadeIn}
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const openSlideBarHandler = (isOpened: boolean) => {
    setIsOpen(isOpened);
  };

  return (
    <>
      <SlideBar openSlideBarHandler={openSlideBarHandler} open={isOpen} />
      <HeaderWrap>
        <Layout>
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
        </Layout>
      </HeaderWrap>
    </>
  );
}
