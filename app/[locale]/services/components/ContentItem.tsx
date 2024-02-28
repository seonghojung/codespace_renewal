"use client";

import { useEffect, useRef, useState } from "react";
import { css, keyframes, styled } from "styled-components";
// import { ILocale } from "../(home)/page";

import { IContent, contents } from "@/app/data/services";
import { motion, useAnimation, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

// interface

interface Prop {
  content: IContent;
  idx: number;
  isRspPc: boolean;
}

// styled-components

const Wrapper = styled(motion.div)`
  opacity: 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    /* padding-bottom: 80px; */
    &:nth-child(2n-1) {
      flex-direction: row-reverse;
    }
  }
  @media (min-width: 1280px) {
    margin-top: 120px;
  }
  @media (min-width: 1920px) {
    margin-top: 140px;
  }
`;

const ContentImgWrap = styled(motion.div)`
  opacity: 0;
  width: 100%;
  aspect-ratio: 375 / 487;
  will-change: transform;
  @media (min-width: 768px) {
    width: 45.93%;
    aspect-ratio: 316 / 436;
  }
  @media (min-width: 1280px) {
    width: 40.58%;
    aspect-ratio: 461 / 600;
  }
  @media (min-width: 1920px) {
    width: 41.01%;
    aspect-ratio: 630 / 820;
  }
`;

const ContentImg = styled.video`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 24px 60px 24px;

  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    color: #050411;
    word-break: keep-all;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.51;
    }
    @media (min-width: 1280px) {
      font-size: 28px;
      line-height: 1.4;
    }
    @media (min-width: 1920px) {
      font-size: 32px;
      line-height: 1.31;
    }
  }
  h3 {
    margin-top: 14px;
    max-width: 59.6%;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -0.78px;
    color: #050411;
    word-break: keep-all;

    @media (min-width: 768px) {
      margin-top: 0;
      max-width: initial;
      width: 265px;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.48px;
    }
    @media (min-width: 1280px) {
      margin-top: 6px;
      width: 343px;
      font-size: 52px;
      letter-spacing: -0.81px;
    }
    @media (min-width: 1920px) {
      margin-top: 16px;
      width: 420px;
      font-size: 64px;
      letter-spacing: -1.23px;
    }
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.48;
    letter-spacing: -0.03px;
    color: #050411;
    word-break: keep-all;

    @media (min-width: 1280px) {
      font-size: 22px;
      line-height: 1.35;
      letter-spacing: -0.1px;
    }
    @media (min-width: 1920px) {
      font-size: 26px;
      line-height: 1.45;
      letter-spacing: -0.39px;
    }
  }
  @media (min-width: 768px) {
    width: 45.93%;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 40.79646%;
  }
  @media (min-width: 1920px) {
    width: 41.01%;
  }
`;

const TechDescItems = styled.ul`
  margin-top: 28px;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 1280px) {
    margin-top: 56px;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const Line = styled.span`
  margin-right: 10px;
  display: block;
  width: 20px;
  height: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const TechDescItem = styled.li`
  color: #050411;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.03px;

  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.04px;
  }
  @media (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.04px;
  }
`;
const ContentItem = ({ content, isRspPc }: Prop) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(scrollYProgress, [0, 1], [300, -300]);
  scrollYProgress.on("change", (e) => {});
  return (
    <Wrapper animate={{ opacity: 1 }}>
      <ContentImgWrap style={{ y: transform }} animate={{ opacity: 1 }} ref={ref}>
        <ContentImg src={content.thumbnail} muted autoPlay loop />
      </ContentImgWrap>
      <ContentWrap>
        <h2>{content.subtitle}</h2>
        <h3>{content.h3}</h3>
        <p>{isRspPc ? content.description : content.description}</p>
        <TechDescItems>
          {content.techDescription.map((techDescItem, index) => {
            return (
              <ItemWrap key={index}>
                <Line />
                <TechDescItem>{techDescItem}</TechDescItem>
              </ItemWrap>
            );
          })}
        </TechDescItems>
      </ContentWrap>
    </Wrapper>
  );
};

export default ContentItem;
