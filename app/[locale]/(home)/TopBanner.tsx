"use client";

import styled, { css, keyframes } from "styled-components";
import { Layout } from "../components/navigation";
import { fadeInAndUp } from "../animations/fadeInAndUp";
import ProjectLink from "./components/ProjectLink";

export interface IMainVisualProps {
  title: string;
  subTitle: string;
  moreBtn: string;
}

const Section = styled.section`
  @media (min-width: 1200px) {
    padding-top: 100px;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  height: 420px;
  object-fit: cover;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 1240px;
    height: 600px;
    overflow: hidden;
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 72px;
  font-weight: 400;
  line-height: 1.36;
  color: #000;
  max-width: 680px;
  word-break: keep-all;
  ${fadeInAndUp}
`;

const Subtitle = styled.h2`
  @media (min-width: 1920px) {
  }
  @media (min-width: 1280px) {
    max-width: 750px;
  }
  @media (min-width: 768px) {
  }
  word-break: keep-all;
  padding-top: 100px;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
  ${fadeInAndUp}
`;

const VidoeContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const SectionTopBanner = () => {
  return (
    <Section>
      <Layout>
        <Title>상상하는 서비스를 현실로 만들어드립니다</Title>
      </Layout>
      <VidoeContainer>
        <MainVideo src="/images/kia.mp4" autoPlay muted loop />
      </VidoeContainer>
      <Layout>
        <Subtitle>
          파트너의 제품과 함께 성장하는 코드스페이스의 새로운 프로젝트를 확인해보세요. 명확한 솔루션을 통해 비즈니스 성장과 파트너의 아이디어를 현실로
          구현하는 것을 통해 함께 성장하며 발전하는 것은 우리가 생각하는 가장 중요한 기본입니다.
        </Subtitle>
        <ProjectLink color="#000" />
      </Layout>
    </Section>
  );
};
export default SectionTopBanner;
