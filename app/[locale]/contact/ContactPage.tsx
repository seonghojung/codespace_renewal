"use client";

import { Layout } from "../components/navigation";
import styled from "styled-components";
import { PageLayout } from "../project/Project";
import firstImg from "../../../public/images/contact/first_image@768.png";
import Image from "next/image";
import UnderLineText from "../components/UnderLineLink";
import { fadeInAndUp, fadeInAndUp2Sec } from "../animations/fadeInAndUp";
import { ITranslation } from "../(home)/page";

const SectionWrap = styled.section`
  padding: 40px 0 60px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  a {
    span {
      &::before,
      &::after {
        height: 2px;
      }
    }
  }
  @media (min-width: 768px) {
    width: 265px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    padding: 46px 0 4px 0;
    width: 476px;
  }
  @media (min-width: 1920px) {
    padding: 69px 0 70px 0;
    width: 630px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 1.4; // 25px;
  color: #000000;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.4; // 23.7px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
    line-height: 1.4; // 29.7px;
  }
  @media (min-width: 1920px) {
    font-size: 26px;
    line-height: 1.4; // 37.7px;
  }
`;
const TopTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4; // 44px;
  letter-spacing: -2.6%;
  word-break: keep-all;
  @media (min-width: 768px) {
    font-weight: 600;
  }
  @media (min-width: 1280px) {
    font-size: 52px;
    line-height: 1.4; // 57.2px;
  }
  @media (min-width: 1920px) {
    font-size: 64px;
    line-height: 1.4; // 70.4px;
  }
`;

const Header = styled.h2`
  margin-top: 28px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 26px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4; // 28px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.4; // 39.2px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.4; // 44.8px;
  }
`;

const EmailTitleWrap = styled.div`
  opacity: 0;
  ${fadeInAndUp}
`;
const PhoneTitleWrap = styled.div`
  margin-top: 60px;
  opacity: 0;
  ${fadeInAndUp2Sec}
  @media (min-width: 768px) {
    margin-top: 62px;
  }
  @media (min-width: 1280px) {
    margin-top: 100px;
  }
  @media (min-width: 1920px) {
    margin-top: 120px;
  }
`;
const FirstImg = styled(Image)`
  height: 100%;
  width: 100%;
  aspect-ratio: 1.44;
  display: block;
  object-fit: cover;
  @media (min-width: 768px) {
    aspect-ratio: 0.92;
    min-width: 361px;
    width: 40%;
  }
  @media (min-width: 1280px) {
    aspect-ratio: 1;
    width: 100%;
    max-width: 461px;
  }
  @media (min-width: 1920px) {
    max-width: 630px;
  }
`;
const PageWrap = styled(Layout)`
  margin-left: 0;
  margin-right: 0;
  div {
    margin-left: 24px;
    margin-right: 24px;
  }

  margin-top: 60px;
  display: block;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 80px;
    margin-left: 40px;
    margin-right: 40px;
    div {
      margin-left: 0px;
      margin-right: 0px;
    }

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 80px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 89px;
  }
  @media (min-width: 1920px) {
    margin-top: 64px;
    padding-bottom: 100px;
  }
`;

export default function Contact({ translation }: { translation: ITranslation }) {
  return (
    <PageLayout>
      <PageWrap>
        <FirstImg src={firstImg} width={1263} height={1200} alt="" />
        <SectionWrap>
          <EmailTitleWrap>
            <TopTitle>{translation.title}</TopTitle>
            <UnderLineText href="mailto:contact@codespace.im">
              <Header>contact@codespace.im</Header>
            </UnderLineText>
          </EmailTitleWrap>
        </SectionWrap>
      </PageWrap>
    </PageLayout>
  );
}
