"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";
import { useState } from "react";
import SlideBar from "./SlideBar";
import { LogoIconMobile } from "./icons";
import logoIconPC from "../../../public/images/logo.png";
import hamburgerIcon from "../../../public/svgs/hamburger.svg";

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
  padding: 0 20px;

  @media (min-width: 1200px) {
    padding: 0 120px;
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
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-weight: 500;
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
            <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
          </Link>
          <LinkItems>
            <LinkItem>
              <Link href="/project" className={path.endsWith("/project") ? "active" : ""}>
                PROJECT
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="/services" className={path.endsWith("/services") ? "active" : ""}>
                SERVICES
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="/contact" className={path.endsWith("/contact") ? "active" : ""}>
                CONTACT
              </Link>
            </LinkItem>
          </LinkItems>
        </ButtonWrapPC>
      </HeaderWrap>
    </>
  );
}
