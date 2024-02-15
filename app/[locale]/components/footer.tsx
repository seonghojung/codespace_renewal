"use client";

import styled from "styled-components";
import logoIconPC from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "./navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import UnderLineLink from "./UnderLineLink";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import { useInView } from "react-intersection-observer";
interface StyleProps {
  $isView: boolean;
}
const FooterLayout = styled(Layout)`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const FooterWrap = styled.footer`
  background-color: #1a1f27;
  padding-top: 60px;
  padding-bottom: 38px;
  @media (min-width: 768px) {
    padding-top: 57px;
    padding-bottom: 32px;
  }
  @media (min-width: 1280px) {
    padding-top: 93px;
    padding-bottom: 37px;
  }
  @media (min-width: 1920px) {
    padding-top: 93px;
    padding-bottom: 49px;
  }
`;
const ContentsWrap = styled.div`
  margin-bottom: 53px;
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
`;
const Nav = styled.nav`
  width: 100%;
  margin-bottom: 51px;
  @media (min-width: 768px) {
    width: 275px;
    padding-top: 11px;
    margin-left: auto;
    margin-bottom: 100px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 82px;
    width: 368px;
  }
  @media (min-width: 1920px) {
    padding-top: 15px;
    margin-bottom: 74px;
    width: 500px;
  }
`;
const NavItems = styled.ul`
  width: 100%;
  display: grid;
`;

const NavItem = styled.li<StyleProps>`
  padding-bottom: 16px;
  opacity: 0;
  ${({ $isView }) => $isView && fadeInAndUp}
`;

const LinkWrap = styled.div<StyleProps>`
  display: block;
  margin-right: 17px;
  margin-bottom: 20px;
  opacity: 0;
  ${({ $isView }) => $isView && fadeInAndUp}
  a {
    display: inline-block;
    width: auto;
  }
`;
const LogoImage = styled(Image)`
  display: block;
  width: auto;
  height: 44px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 44px;
  }
  @media (min-width: 1280px) {
    height: 48px;
  }
  @media (min-width: 1920px) {
    height: 57px;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    align-items: flex-end;
  }
`;
const BottomWrapSecond = styled(BottomWrap)`
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    margin-top: 56px;
  }
`;

const Name = styled.span`
  font-size: 14px;
  color: #fff;

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 120%;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;

const LanguageSwitchBtn = styled.button`
  text-decoration: underline;
  line-height: 2;
  font-size: 14px;
  span {
    margin-right: 6px;
    color: #fff;
  }
  @media (min-width: 768px) {
    margin-left: auto;
    width: 275px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 120%;
    width: 368px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    width: 500px;
  }
`;
const LinkText = styled.span`
  font-size: 18px;
  font-weight: 300;
  line-height: 140%;
  color: #fff;
`;
const MailLinkText = styled(LinkText)`
  font-size: 18px;
  line-height: 140%;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
  }
`;
const NavLinkText = styled(LinkText)`
  font-size: 14px;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 120%;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
  }
`;
const CopyrightText = styled(LinkText)`
  font-size: 14px;
  color: #858e97;
  margin-top: 37px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: auto;
    width: 275px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 120%;
    width: 368px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    width: 500px;
  }
`;
const MailWrap = styled.div<StyleProps>`
  opacity: 0;
  ${({ $isView }) => $isView && fadeInAndUp}
`;

export default function Footer({
  locale,
  localeOptions,
  localeLable,
  localeAddress,
}: {
  locale: string;
  localeOptions: JSX.Element[];
  localeLable: string;
  localeAddress: string;
}) {
  const [ref, isView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <FooterWrap ref={ref}>
      <FooterLayout>
        <ContentsWrap>
          <LinkWrap $isView={isView} style={{ animationDelay: "0.15s" }}>
            <Link href="/">
              <LogoImage src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" />
            </Link>
          </LinkWrap>
          <MailWrap $isView={isView} style={{ animationDelay: "0.2s" }}>
            <UnderLineLink theme="white" href="mailto:contact@codespace.im">
              <MailLinkText>contact@codespace.im</MailLinkText>
            </UnderLineLink>
          </MailWrap>
        </ContentsWrap>
        <Nav>
          <NavItems>
            <NavItem $isView={isView} style={{ animationDelay: "0.4s" }}>
              <UnderLineLink theme="white" href="project">
                <NavLinkText>Project</NavLinkText>
              </UnderLineLink>
            </NavItem>
            <NavItem $isView={isView} style={{ animationDelay: "0.45s" }}>
              <UnderLineLink theme="white" href="services">
                <NavLinkText>Services</NavLinkText>
              </UnderLineLink>
            </NavItem>
            <NavItem $isView={isView} style={{ animationDelay: "0.5s" }}>
              <UnderLineLink theme="white" href="contact">
                <NavLinkText>Contact</NavLinkText>
              </UnderLineLink>
            </NavItem>
          </NavItems>
        </Nav>
        <BottomWrap>
          <LanguageSwitchBtn>
            <LocaleSwitcher defaultValue={locale} label={localeLable}>
              {localeOptions}
            </LocaleSwitcher>
          </LanguageSwitchBtn>
        </BottomWrap>
        <BottomWrapSecond>
          <UnderLineLink
            theme="white"
            href={
              "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B2%95%EC%9B%90%EB%A1%9C%20128/address/14150979.9785491,4507188.389424,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EB%B2%95%EC%9B%90%EB%A1%9C%20128,new?searchType=address&isCorrectAnswer=true&c=15.00,0,0,0,dh"
            }
          >
            <Name>{localeAddress}</Name>
          </UnderLineLink>
          <CopyrightText>©2019 - {new Date().getFullYear()} CODESPACE co. ltd.</CopyrightText>
        </BottomWrapSecond>
      </FooterLayout>
    </FooterWrap>
  );
}
