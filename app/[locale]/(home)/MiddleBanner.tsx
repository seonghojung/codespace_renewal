"use client";

import { css, keyframes, styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import bannerImageMb from "../../../public/images/middle_banner.png";
import bannerImage from "../../../public/images/main_banner.png";
import bestSvg from "../../../public/svgs/best.svg";
import Link from "next/link";
import LineDecorationLink from "../components/LineDecorationLink";
import { ITranslation } from "./page";
import { useEffect, useState } from "react";
import UnderLineLinkArrow from "../components/UnderLineLinkArrow";

const Section = styled.section``;

interface IStyleProps {
  $isView: boolean;
}

const fadeIn = keyframes`
  from {
    transform: translate(0px, 150%);
  }

  to {
    transform: translate(0px, 0px);
  }
`;
const Container = styled.div<IStyleProps>`
  opacity: 1;
  display: block;
  @media (min-width: 768px) {
    padding-top: 120px;
  }
  @media (min-width: 1680px) {
    padding-top: 120px;
    /* height: 480px; */
    opacity: ${(props) => (props.$isView ? 1 : 0)};
    transition: opacity 0.25s ease-in-out;
    display: flex;
    /* gap: 140px; */
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProjectImageWrap = styled.div`
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
  @media (min-width: 1680px) {
    width: auto;
    max-width: initial;
    margin: initial;
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 420px;
  display: block;
  object-fit: cover;
  @media (min-width: 768px) {
    border-radius: 12px;
  }

  @media (min-width: 1680px) {
    aspect-ratio: 1.208333333333333;
    height: auto;
    width: 740px;
    max-height: 480px;
  }
`;

const FakeLayout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
  @media (min-width: 1680px) {
    width: auto;
    max-width: initial;
    margin: initial;
  }
`;

const ContentWrap = styled.div`
  position: relative;
  padding-top: 80px;
  @media (min-width: 768px) {
    display: flex;
    /* padding: 0; */
    flex: 0.9;
  }
  @media (min-width: 1680px) {
    display: block;
    padding-top: 0;
    /* flex: 0.9; */
  }
`;

const TextWrap = styled.div`
  margin-top: 6px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 0;
    width: 355px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }

  @media (min-width: 1680px) {
    width: 100%;
  }

  a {
    font-size: 18px;
    color: #8f99aa;
  }
`;
const BestIconStyle = styled(Image)<IStyleProps>`
  position: absolute;
  top: 6px;
  left: 5px;
  width: 106px;
  height: 106px;
  z-index: 2;
  @media (min-width: 768px) {
    top: 6px;
    left: 5px;
    /* top: 26px;
    left: -80px; */
    ${({ $isView }) => $isView && floatingUp}
  }
  @media (min-width: 1680px) {
    top: -44px;
    left: -86px;
  }
`;

const RightWrap = styled.div`
  @media (min-width: 768px) {
    width: calc(100% - 355px);
  }

  @media (min-width: 1680px) {
    width: 100%;
  }
`;

const SubTitleWrap = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1680px) {
    margin-top: 40px;
    br {
      display: none;
    }
  }
`;

const SubTitle = styled.p<IStyleProps>`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
  word-break: keep-all;
  @media (min-width: 768px) {
    margin-top: 0px;
    /* max-width: 450px; */
    line-height: 1.6;
    ${({ $isView }) => $isView && floatingUp}
  }

  @media (min-width: 1680px) {
    max-width: 520px;
    word-break: initial;
  }
`;

const MoreWrap = styled.div`
  @media (min-width: 1680px) {
    margin-top: 20px;
  }
`;

const More = styled(Link)`
  /* fontSize: "18px", color: "#8F99AA" */
  font-size: 18px;
  color: #8f99aa;
`;

const FloatingWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const FloatingContent = styled.h2<IStyleProps>`
  font-size: 46px;
  font-weight: 600;
  line-height: 0.95;
  color: #000;

  @media (min-width: 768px) {
    font-size: 46px;
    /* line-height: 0.87; */

    ${({ $isView }) => $isView && floatingUp}
  }
`;

export const floatingUp = css`
  transform: translate(0px, 150%);
  animation: ${fadeIn} 1s ease forwards;
`;

const FloatingText = ({ children, delay, $isView }: { children: React.ReactNode; delay?: string; $isView: boolean }) => (
  <FloatingWrap>
    <FloatingContent $isView={$isView} style={{ animationDelay: delay }}>
      {children}
    </FloatingContent>
  </FloatingWrap>
);

const SectionMiddleBanner = ({ translation }: { translation: ITranslation }) => {
  const [ref, inView] = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const bodyWidth = window.innerWidth;

    if (bodyWidth > 767) {
      setIsPC(true);
    }
  }, []);

  const mbFloationgText = (
    <>
      <FloatingText delay="1.2s" $isView={inView}>
        A NEW
      </FloatingText>
      <FloatingText delay="1.5s" $isView={inView}>
        PROJECT.
      </FloatingText>
    </>
  );

  const pcFloationgText = (
    <FloatingText delay="1.2s" $isView={inView}>
      A NEW PROJECT
    </FloatingText>
  );

  return (
    <Section>
      <Container ref={ref} $isView={inView}>
        <ProjectImageWrap>
          <ProjectImage src={isPC ? bannerImage : bannerImageMb} width={isPC ? 2220 : 740} height={isPC ? 1440 : 480} alt="배너 이미지" />
        </ProjectImageWrap>
        <FakeLayout>
          <ContentWrap>
            <BestIconStyle src={bestSvg} alt="" $isView={inView} />
            <TextWrap>
              <FloatingText delay="0.3s" $isView={inView}>
                WE DEVELOP
              </FloatingText>
              <FloatingText delay="0.6s" $isView={inView}>
                PRODUCT.
              </FloatingText>
              <FloatingText delay="0.9s" $isView={inView}>
                INTRODUCE
              </FloatingText>
              {isPC ? pcFloationgText : mbFloationgText}
            </TextWrap>
            <RightWrap>
              <SubTitleWrap>
                <SubTitle $isView={inView}>{translation.description}</SubTitle>
              </SubTitleWrap>
              <MoreWrap>
                <UnderLineLinkArrow href="/project">{translation.moreBtn}</UnderLineLinkArrow>
              </MoreWrap>
            </RightWrap>
          </ContentWrap>
        </FakeLayout>
      </Container>
    </Section>
  );
};

export default SectionMiddleBanner;
