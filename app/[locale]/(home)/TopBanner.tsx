"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import LineDecorationLink from "../components/LineDecorationLink";
import Link from "next/link";
import { ITranslation } from "./page";

const Section = styled.section`
  padding-top: 30px;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
  display: block;
  @media (min-width: 768px) {
    aspect-ratio: auto;
  }
`;

const Title = styled.h1`
  opacity: 0;
  margin-left: -10px;
  position: relative;
  font-size: 86px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  color: #050411;
  word-break: keep-all;
  ${fadeInAndUp}
  @media (min-width: 768px) {
    font-size: clamp(74px, 9.6354166666667vw, 86px);
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
    font-size: clamp(22px, 2.8645833333333vw, 32px);
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
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
const DescriptionWrap = styled.div``;

const VideoLayout = styled.div`
  margin-top: 40px;
  width: 100%;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const SectionTopBanner = ({ translation }: { translation: ITranslation }) => {
  return (
    <Section>
      <Layout>
        <Title>{translation.title}</Title>
      </Layout>
      <VideoLayout>
        <VidoeContainer>
          <MainVideo src="/videos/clayMain.mp4" autoPlay muted loop />
        </VidoeContainer>
      </VideoLayout>
      <Layout>
        <DescriptionWrap>
          <Subtitle>{translation.subTitle}</Subtitle>
          <LinkWrap>
            <LineDecorationLink color="#8f99aa">
              <MoreLink href={"/project"}>{translation.moreBtn}</MoreLink>
            </LineDecorationLink>
          </LinkWrap>
        </DescriptionWrap>
      </Layout>
    </Section>
  );
};
export default SectionTopBanner;
