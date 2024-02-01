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
  padding-top: 30px;
  @media (min-width: 768px) {
    padding-top: 60px;
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
  word-break: keep-all;
  color: #050411;
  line-height: 1.5;
  font-size: 20px;
  margin-top: 30px;
  ${fadeInAndUp}
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 32px;
    max-width: 680px;
    line-height: 1.41;
  }
`;
const MoreLink = styled(Link)`
  @media (min-width: 768px) {
  }
  font-size: 18px;
`;
const LinkWrap = styled.div`
  margin-top: 20px;
  a {
    color: #8f99aa;
  }
`;

const VidoeContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const DescriptionWrap = styled.div``;

const VideoLayout = styled.div`
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const SectionTopBanner = () => {
  return (
    <Section>
      <Layout>
        <Title>
          상상하는 서비스를
          <br /> 현실로 만들어드립니다
        </Title>
      </Layout>
      <VideoLayout>
        <VidoeContainer>
          <MainVideo src="/videos/clayMain.mp4" autoPlay muted loop />
        </VidoeContainer>
      </VideoLayout>
      <Layout>
        <DescriptionWrap>
          <Subtitle>코드스페이스와 함께 놀라운 서비스를 만들어보세요 준비된 전문가들이 기다리고 있습니다</Subtitle>
          <LinkWrap>
            <LineDecorationLink color="#8f99aa">
              <MoreLink href={"/project"}>자세히 알아보기</MoreLink>
            </LineDecorationLink>
          </LinkWrap>
        </DescriptionWrap>
      </Layout>
    </Section>
  );
};
export default SectionTopBanner;
