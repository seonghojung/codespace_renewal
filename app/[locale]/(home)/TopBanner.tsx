"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import { ITranslation } from "./page";
import { useEffect, useRef, useState } from "react";
import UnderLineLinkArrow from "../components/UnderLineLinkArrow";

interface IVideoContainer {
  $scale: number;
}

const Section = styled.section`
  padding-top: 30px;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;
const Title = styled.h1`
  opacity: 0;
  position: relative;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1.04px;
  color: #050411;
  ${fadeInAndUp}
  @media (min-width: 500px) {
    br:not(:first-child) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    font-size: 52px;
    line-height: 1.1;
    letter-spacing: -1.35px;
  }
  @media (min-width: 1280px) {
    font-size: 74px;
    letter-spacing: -2.19px;
  }
  @media (min-width: 1920px) {
    font-size: 86px;
    letter-spacing: -2.96px;
  }
`;

const VideoLayout = styled.div`
  margin-top: 80px;
  width: 100%;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const VideoContainer = styled.div<IVideoContainer>`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 100px;
    transform: scale(${(props) => props.$scale});
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
const DescriptionWrap = styled.div`
  margin-top: 60px;
`;

const Subtitle = styled.h2`
  word-break: keep-all;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.39;
  letter-spacing: -0.04px;
  color: #050411;

  ${fadeInAndUp}
  br:first-child {
    display: none;
  }

  @media (min-width: 414px) {
    br:first-child {
      display: block;
    }
    br:not(:first-child) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    font-size: 20px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: -0.04px;
    text-align: left;
    color: #050411;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: -0.14px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.39;
    letter-spacing: -0.16px;
  }

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: clamp(22px, 2.8645833333333vw, 32px);
    line-height: 1.41;
    br {
      display: block;
    }
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
