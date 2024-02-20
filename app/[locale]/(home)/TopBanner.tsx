"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import { ITranslation } from "./page";
import { useEffect, useRef, useState } from "react";
import UnderLineLinkArrow from "../components/UnderLineLinkArrow";

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

interface IVideoContainer {
  $scale: number;
}

const VideoContainer = styled.div<IVideoContainer>`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 100px;
    transform: scale(${(props) => props.$scale});
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

const LinkWrap = styled.div`
  margin-top: 27px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 68px;
  }
  @media (min-width: 1920px) {
    margin-top: 41px;
  }
`;
const SectionTopBanner = ({ translation }: { translation: ITranslation }) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerScale, setBannerScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const bannerTopDistance = bannerRef.current.getBoundingClientRect().top;

        const scale = Math.min(1.1, Math.max(1, 1 + (380 - bannerTopDistance) / 1000));
        setBannerScale(scale);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section>
      <Layout>
        <Title>{translation.title}</Title>
      </Layout>
      <VideoLayout>
        <VideoContainer ref={bannerRef} $scale={bannerScale}>
          <MainVideo src="/videos/clayMain.mp4" autoPlay muted loop />
        </VideoContainer>
      </VideoLayout>
      <Layout>
        <DescriptionWrap>
          <Subtitle>{translation.subTitle}</Subtitle>
          <LinkWrap>
            <UnderLineLinkArrow href="/project">{translation.moreBtn}</UnderLineLinkArrow>
          </LinkWrap>
        </DescriptionWrap>
      </Layout>
    </Section>
  );
};
export default SectionTopBanner;
