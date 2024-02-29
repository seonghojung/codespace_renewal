"use client";

import styled, { css, keyframes } from "styled-components";
import { Layout } from "../../components/navigation";
import { useInView } from "react-intersection-observer";
import { imageFadeInAndUp } from "../../animations/fadeInAndUp";

interface StyleProp {
  $isView: boolean;
}

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  `;

const floatingUp = css`
  animation: 0.9s ${fadeIn} 0.05s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;
const floatingUpTablet = css`
  animation: 1.25s ${fadeIn} 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

const Container = styled.article`
  margin-top: 80px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }

  @media (min-width: 1920px) {
    margin-top: 160px;
  }
`;

const ImageContainer = styled.div`
  opacity: 0;
  position: relative;
  width: 100%;
  background-color: #d9d9d9;
  aspect-ratio: 1;
  ${imageFadeInAndUp}

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: auto;
    margin: 0 40px;
    aspect-ratio: 688 / 390;
  }

  @media (min-width: 1280px) {
    max-width: 1136px;
    aspect-ratio: 1136 / 650;
    margin: 0 auto;
  }

  @media (min-width: 1920px) {
    max-width: 1662px;
    aspect-ratio: 1662 / 911;
  }
`;

const TextWrap = styled.div<StyleProp>`
  opacity: 0;
  ${({ $isView }) => $isView && floatingUp}
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
    ${({ $isView }) => $isView && floatingUpTablet}
  }

  @media (min-width: 1280px) {
    margin-top: 60px;
    ${({ $isView }) => $isView && floatingUp}
  }

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.78px;
  color: #050411;
  white-space: pre-wrap;
  word-break: keep-all;
  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.48px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    letter-spacing: -0.81px;
  }

  @media (min-width: 1920px) {
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -1.23px;
  }
`;
export const Description = styled.h3`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.48;
  letter-spacing: -0.03px;
  color: #000;

  @media (min-width: 1280px) {
    word-break: keep-all;
    max-width: 896px;
    margin-top: 28px;
    font-size: 22px;
    line-height: 1.35;
    letter-spacing: -0.1px;
    white-space: pre-wrap;
  }

  @media (min-width: 1920px) {
    max-width: 1080px;
    margin-top: 32px;
    font-size: 26px;
    line-height: 1.45;
    letter-spacing: -0.39px;
  }
`;

const TopContent = ({ title, description }: { title: string; description: string }) => {
  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container>
      <ImageContainer></ImageContainer>
      <Layout>
        <TextWrap ref={ViewRef} $isView={inView}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrap>
      </Layout>
    </Container>
  );
};
export default TopContent;
