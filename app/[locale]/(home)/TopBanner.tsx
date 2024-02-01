"use client";

import styled, { css, keyframes } from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import LineDecorationLink from "../components/LineDecorationLink";
import Link from "next/link";

export interface IMainVisualProps {
  title: string;
  subTitle: string;
  moreBtn: string;
}

const Section = styled.section`
  @media (min-width: 1200px) {
    padding-top: 100px;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  display: block;
`;

const Title = styled.h1`
  opacity: 0;
  position: relative;
  font-size: 86px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  color: #050411;
  word-break: keep-all;
  ${fadeInAndUp}
  @media (min-width: 768px) {
    font-size: 86px;
    line-height: 1.14;
  }
`;

const Subtitle = styled.h2`
  @media (min-width: 1920px) {
    //@TODO: 여기 영역별로 폰트사이즈좀 잡아야겠네요
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 768px) {
  }
  max-width: 500px;
  word-break: keep-all;
  margin-bottom: 10px;
  padding-top: 100px;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
  ${fadeInAndUp}
`;
const MoreLink = styled(Link)`
  @media (min-width: 1920px) {
    //@TODO: 여기 영역별로 폰트사이즈좀 잡아야겠네요
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 768px) {
  }
  font-size: 20px;
`;

const VidoeContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const SectionTopBanner = () => {
  return (
    <Section>
      <Layout>
        <Title>
          상상하는 서비스를
          <br /> 현실로 만들어드립니다
        </Title>
        <VidoeContainer>
          <MainVideo src="/videos/clayMain.mp4" autoPlay muted loop />
        </VidoeContainer>
      </Layout>
      <Layout>
        <Subtitle>코드스페이스와 함께 놀라운 서비스를 만들어보세요. 준비된 전문가들이 기다리고 있습니다.</Subtitle>
        <LineDecorationLink>
          <MoreLink href={"/project"}>자세히 알아보기</MoreLink>
        </LineDecorationLink>
      </Layout>
    </Section>
  );
};
export default SectionTopBanner;
