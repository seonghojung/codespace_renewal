"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";
import { useState } from "react";
import SlideBar from "./SlideBar";
const HeaderWrap = styled.header`
  padding: 0 20px;
  div {
    justify-content: space-between;
    align-items: center;
    height: 100px;
    &.mobile {
      height: 108px;
      display: flex;
    }
  }

  @media (min-width: 1200px) {
    padding: 0 120px;
    div.pc {
      display: flex;
    }
    div.mobile {
      display: none;
    }
    img {
      object-fit: cover;
      display: block;
      width: 193px;
      height: 28px;
    }
    ul {
      display: flex;
      gap: 47px;
      li {
        color: rgba(0, 0, 0, 0.4);
        font-size: 18px;
        font-weight: 500;
        a {
          &:hover {
            color: #000;
          }
          &.active {
            color: #000;
          }
        }
      }
    }
  }
`;

export const CodespaceLogo = () => {
  return <Image src="/images/logo.png" alt="코드스페이스" width={193} height={28} />;
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const isOpenHandler = () => {
    setIsOpen(true);
  };
  const isCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SlideBar closeHandler={isCloseHandler} open={isOpen} />
      <HeaderWrap>
        <div className="mobile">
          <Link href="/">
            <Image src="/svgs/logo_icon.svg" alt="로고 아이콘" width={24} height={28} />
          </Link>
          <button>
            <Image src="/svgs/hamburger.svg" alt="햄버거 아이콘" width={24} height={28} onClick={isOpenHandler} />
          </button>
        </div>
        <div className="pc">
          <Link href="/">
            <CodespaceLogo />
          </Link>
          <ul>
            <li>
              <Link href="/project" className={path === "/project" ? "active" : ""}>
                PROJECT
              </Link>
            </li>
            <li>
              <Link href="/services" className={path === "/services" ? "active" : ""}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/contact" className={path === "/contact" ? "active" : ""}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </HeaderWrap>
    </>
  );
}
