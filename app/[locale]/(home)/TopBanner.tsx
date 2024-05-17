"use client";

import styled, { css, keyframes } from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp, fadeInAndUp3Sec } from "../animations/fadeInAndUp";
import { ITranslation } from "./page";
import { useEffect, useRef, useState } from "react";
import UnderLineLinkArrow from "../components/UnderLineLinkArrow";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StyleProp {
  $isView: boolean;
}

const fadeIn = keyframes`
    from {
      opacity: 30%;
      transform: translate(0px, 10%) scale(0.98);
    }
  
    to {
      opacity: 1;
      transform: translate(0px, 0px)  scale(1);
    }
  `;

const floatingUp = css`
  animation: ${fadeIn} 0.6s ease forwards;
`;

const Section = styled.section`
  padding-top: 124px;
  @media (min-width: 768px) {
    padding-top: 170px;
  }
  @media (min-width: 1280px) {
    padding-top: 256px;
  }
  @media (min-width: 1920px) {
    padding-top: 300px;
  }
`;
const Title = styled.h1`
  opacity: 0;
  position: relative;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.4; // 1.1;
  letter-spacing: -1.04px;
  color: #050411;
  ${css`
    animation: ${fadeIn} 0.3s ease forwards;
  `}
  @media (min-width: 500px) {
    br:not(:first-child) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    font-size: 52px;
    line-height: 1.4; // 1.1;
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

const VideoContainer = styled(motion.div)`
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    aspect-ratio: auto;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 80px);
    margin-top: 100px;
  }
  @media (min-width: 1280px) {
    width: 1130px;
  }

  @media (min-width: 1300px) {
    width: 81%;
    min-width: 1130px;
    max-width: 1620px;
  }
  @media (min-width: 1440px) {
    width: 79.8%;
  }

  @media (min-width: 1920px) {
    width: 88.3%;
  }
`;
const DescriptionWrap = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (min-width: 1280px) {
    margin-top: 40px;
  }
  @media (min-width: 1920px) {
    margin-top: 60px;
  }
`;

const VideoLayout = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
    margin-top: 100px;
    br {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 108px;
  }

  @media (min-width: 1920px) {
    margin-top: 100px;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  display: block;
  @media (min-width: 768px) {
  }
`;

const SubtitleWrap = styled.div<StyleProp>``;

const Subtitle = styled.h2`
  opacity: 0;
  ${css`
    animation: ${fadeIn} 0.3s ease forwards;
    animation-delay: 0.2s;
  `}
  word-break: keep-all;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 1.39;
  letter-spacing: -0.04px;
  color: #050411;
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
    line-height: 1.4; // 1.4;
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
    line-height: 1.4; // 1.39;
    letter-spacing: -0.16px;
  }

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: clamp(22px, 2.8645833333333vw, 32px);
    line-height: 1.4; // 1.41;
  }
`;

const LinkWrap = styled.div`
  opacity: 0;
  ${css`
    animation: ${fadeIn} 0.3s ease forwards;
    animation-delay: 0.4s;
  `}
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
  const [Scale, setScale] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({});

  const videoScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  useEffect(() => {
    const innerWidth = window.innerWidth;
    setWindowWidth(innerWidth);
  }, []);
  useMotionValueEvent(videoScale, "change", (lastest) => {
    if (windowWidth > 767) {
      setScale(lastest);
    }
  });

  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section>
      <Layout>
        <Title>{translation.title}</Title>
      </Layout>
      <SubtitleWrap ref={ViewRef} $isView={inView}>
        <Layout>
          <DescriptionWrap>
            <Subtitle>{translation.subTitle}</Subtitle>
            <LinkWrap>
              <UnderLineLinkArrow href="/project">{translation.moreBtn}</UnderLineLinkArrow>
            </LinkWrap>
          </DescriptionWrap>
        </Layout>
      </SubtitleWrap>
    </Section>
  );
};
export default SectionTopBanner;
