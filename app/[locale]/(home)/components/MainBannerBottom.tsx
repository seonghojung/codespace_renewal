"use client";

import { css, keyframes, styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { ITranslation } from "../page";
import { Layout } from "../../components/navigation";
import UnderLineLinkArrow from "../../components/UnderLineLinkArrow";

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

const BottomSection = styled.div<StyleProp>`
  opacity: 0;
  ${({ $isView }) => $isView && floatingUp}
`;

const BottomDescription = styled.h3`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 1.39;
  letter-spacing: -0.04px;
  color: #050411;
  br {
    display: none;
  }

  @media (min-width: 768px) {
    margin-top: 80px;
    font-size: 20px;
    line-height: 1.4; // 1.4;
    letter-spacing: -0.04px;

    br {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 140px;
    font-size: 28px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 1920px) {
    margin-top: 180px;
    font-size: 32px;
    letter-spacing: -0.1px;
  }
`;

const LinkWrap = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    line-height: 1.4; // 1.45;
    letter-spacing: -0.03px;
    color: #050411;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    a {
      font-size: 22px;
      line-height: 1.4; // 1.35;
      letter-spacing: -0.1px;
    }
  }
  @media (min-width: 1920px) {
    margin-top: 40px;
    a {
      font-size: 26px;
      line-height: 1.4; // 1.45;
      letter-spacing: -0.14px;
    }
  }
`;

const MainBannerBottom = ({ translation }: { translation: ITranslation }) => {
  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <BottomSection ref={ViewRef} $isView={inView}>
      <Layout>
        <BottomDescription>{translation.bottomDescription}</BottomDescription>
        <LinkWrap>
          <UnderLineLinkArrow href="/contact">{translation.requestBtn}</UnderLineLinkArrow>
        </LinkWrap>
      </Layout>
    </BottomSection>
  );
};

export default MainBannerBottom;
