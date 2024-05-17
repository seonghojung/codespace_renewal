"use client";

import { css, keyframes, styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { ITranslation } from "../page";
import { Layout } from "../../components/navigation";

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

const TopSection = styled.div<StyleProp>`
  opacity: 0;
  ${({ $isView }) => $isView && floatingUp}
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.4; // 1.2;
  letter-spacing: -0.36px;
  color: #050411;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.4; // 1.1;
    letter-spacing: -0.48px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    letter-spacing: -0.81px;
  }
`;
const TopDescription = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 1.39;
  letter-spacing: -0.04px;
  text-align: left;
  color: #050411;
  br {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4; // 1.4;
    letter-spacing: -0.04px;

    br {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    letter-spacing: -0.1px;
  }
`;

const MainBannerTop = ({ translation }: { translation: ITranslation }) => {
  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <TopSection ref={ViewRef} $isView={inView}>
      <Layout>
        <Title>
          Imagination
          <br />
          into Reality
        </Title>
        <TopDescription>{translation.topDescription}</TopDescription>
      </Layout>
    </TopSection>
  );
};

export default MainBannerTop;
