"use client";

import { css, keyframes, styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { Layout } from "../components/navigation";
import Image from "next/image";
import bannerImage from "../../../public/images/middle_banner.png";
import bestSvg from "../../../public/svgs/best.svg";
import Link from "next/link";
import LineDecorationLink from "../components/LineDecorationLink";
import { ITranslation } from "./page";
import { useEffect, useState } from "react";

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
    height: 480px;
    opacity: ${(props) => (props.$isView ? 1 : 0)};
    transition: opacity 0.25s ease-in-out;
    display: flex;
    gap: 140px;
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;
const ProjectImage = styled(Image)`
  width: 100%;
  height: 420px;
  display: block;
  object-fit: cover;
  @media (min-width: 768px) {
  }
`;
const ContentWrap = styled.div`
  position: relative;
  padding-top: 80px;
  @media (min-width: 768px) {
    flex: 0.9;
  }
`;

const TextWrap = styled.div`
  margin-top: 6px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 0;
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
    top: 26px;
    left: -80px;
    ${({ $isView }) => $isView && floatingUp}
  }
`;

const SubTitleWrap = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SubTitle = styled.p<IStyleProps>`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
  word-break: keep-all;
  @media (min-width: 768px) {
    margin-top: 40px;
    max-width: 520px;
    ${({ $isView }) => $isView && floatingUp}
  }
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
    line-height: 0.87;

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
      return setIsPC(true);
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
        <ProjectImage src={bannerImage} alt="배너 이미지" />
        <Layout>
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
              <SubTitleWrap>
                <SubTitle $isView={inView}>{translation.description}</SubTitle>
              </SubTitleWrap>
              <LineDecorationLink color="#8f99aa">
                <Link href={"/project"}>{translation.moreBtn}</Link>
              </LineDecorationLink>
            </TextWrap>
          </ContentWrap>
        </Layout>
      </Container>
    </Section>
  );
};

export default SectionMiddleBanner;
