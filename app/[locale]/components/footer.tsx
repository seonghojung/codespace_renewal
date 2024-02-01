"use client";

import styled from "styled-components";
import logoIconPC from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "./navigation";
import downDelta from "../../../public/svgs/down_delta.svg";

const FooterWrap = styled.footer`
  background-color: #f4f5f8;
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

const NavItems = styled.ul`
  margin-top: 60px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
  display: flex;
`;
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
    @media (min-width: 768px) {
      margin-right: 70px;
    }
  }
`;
const Title = styled(Link)`
  font-size: 20px;
  color: #666;
  &:hover {
    color: #1a1a1a;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 2;
`;

const LanguageSwitchBtn = styled.button`
  text-decoration: underline;
  font-size: 12px;
  line-height: 2;
  span {
    margin-right: 6px;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Layout>
        <Container>
          <Nav>
            <Link href="/">
              <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
            </Link>
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
            <Name>©2023 Code Space co. ltd.</Name>
            <LanguageSwitchBtn>
              <span>언어 : 한국어</span>
              <Image src={downDelta} alt={"아래쪽 화살표"} />
            </LanguageSwitchBtn>
          </InfoWrap>
        </Container>
      </Layout>
    </FooterWrap>
  );
}
