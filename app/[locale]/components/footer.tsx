"use client";

import styled from "styled-components";
import logoIconPC from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "./navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import UnderLineText from "./UnderLineLink";
import LineDecoration from "./LineDecoration";

const FooterWrap = styled.footer`
  background-color: #1a1f27;
`;
const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
`;

const LinkWrap = styled(Link)`
  width: 193px;
  height: 28px;
`;

const NavItems = styled.ul`
  margin-top: 60px;
  display: flex;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30.6px;
    @media (min-width: 768px) {
      margin-right: 70px;
    }
  }
`;
const Title = styled(Link)`
  font-size: 16px;

  color: #fff;
  &:hover {
    color: #1a1a1a;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.span`
  font-size: 14px;
  color: #fff;
`;

const LanguageSwitchBtn = styled.button`
  text-decoration: underline;
  font-size: 12px;
  line-height: 2;
  span {
    margin-right: 6px;
    color: #fff;
  }
`;

export default function Footer({ locale, localeOptions, localeLable }: { locale: string; localeOptions: JSX.Element[]; localeLable: string }) {
  return (
    <FooterWrap>
      <Layout>
        <Container>
          <Nav>
            <LinkWrap href="/">
              <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
            </LinkWrap>
            <NavItems>
              <NavItem>
                <Title href={"/project"}>PROJECT</Title>
              </NavItem>
              <NavItem>
                <Title href={"/services"}>SERVICES</Title>
              </NavItem>
              <NavItem>
                <Title href={"/contact"}>CONTACT</Title>
              </NavItem>
            </NavItems>
          </Nav>
          <InfoWrap>
            <UnderLineText theme="white" href={"#"}>
              <Name>©2019 - 2023 Code Space co. ltd.</Name>
            </UnderLineText>
            <LanguageSwitchBtn>
              <LocaleSwitcher defaultValue={locale} label={localeLable}>
                {localeOptions}
              </LocaleSwitcher>
            </LanguageSwitchBtn>
          </InfoWrap>
        </Container>
      </Layout>
    </FooterWrap>
  );
}
