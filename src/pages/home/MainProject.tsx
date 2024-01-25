import styled, { keyframes } from "styled-components";
import { ReactComponent as BestImg } from "../../svgs/best.svg";
import ProjectLink from "./component/ProjectLink";
import ProjectCard from "../../components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const fadeIn = keyframes`
  from {
    transform: translate(0px, 150%);
  }

  to {
    transform: translate(0px, 0px);
  }
`;

const MainProject = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0.35, // 가시성이 15% 이상일 때 트리거
    triggerOnce: true,
  });

  return (
    <MainProjectSection>
      <MainContentBox ref={ref} $isView={inView}>
        <MainProjectImg src={"/images/main_banner-mb.png"} />
        {/* <MainProjectImg src="/images/nineArk.mp4" autoPlay muted loop /> */}
        <MainProjectTextWrap>
          <BestIcon />
          <MainProjectTitleWrap>
            <MainTitleWrap>
              {/* <MainTitle > */}
              <MainTitleWrap>
                <WeGrowTitle animated="true">WE GROW</WeGrowTitle>
              </MainTitleWrap>
              <MainTitleWrap>
                <ProductTitle animated="true">PRODUCT.</ProductTitle>
              </MainTitleWrap>
              <MainTitleWrap>
                <IntroduceTitle animated="true">INTRODUCE</IntroduceTitle>
              </MainTitleWrap>
              <MainTitleWrap>
                <ANewTitle animated="true">A NEW</ANewTitle>
              </MainTitleWrap>
              {/* <RspPc /> */}
              <MainTitleWrap>
                <ProjectTitle animated="true">PROJECT.</ProjectTitle>
              </MainTitleWrap>
              {/* </MainTitle> */}
            </MainTitleWrap>
            <SubTitleWrap>
              <SubTitle animated="true">
                <span style={{ fontWeight: "600" }}>파트너의 제품과 함께 성장하는 코드스페이스</span>의 새로운 프
                <RspMb />
                로젝트를
                <RspPc /> 확인해보세요. 명확한 솔루션을 통해 비즈니스
                <RspMb /> 성장과 파트너의 아이
                <RspPc />
                디어를 현실로 구현하는 것을 통해
                <RspMb /> 함께 성장하며 발전하는 것은
                <RspPc /> 우리가 생각하는
                <RspMb /> 가장 중요한 기본입니다.
              </SubTitle>
            </SubTitleWrap>
            <ProjectLink color="#000" />
          </MainProjectTitleWrap>
        </MainProjectTextWrap>
      </MainContentBox>
      <SubContentBox>
        <SubProjectsWrap>
          <ProjectCard
            src={"/images/nineArk.mp4"}
            ref={videoRef1}
            width={630}
            height={420}
            mt={0}
            title={"PROJECT NAME"}
            description={"부동산 데이터 소팅 및 사용자 인터페이스 설계"}
          />
          <ProjectCard
            src={"/images/nineArk.mp4"}
            ref={videoRef2}
            width={420}
            height={420}
            mt={100}
            ml={110}
            title={"PROJECT NAME"}
            description={"부동산 데이터 소팅 및 사용자 인터페이스 설계"}
          />
        </SubProjectsWrap>
        <SubProjectsWrap>
          <ProjectCard
            src={"/images/nineArk.mp4"}
            ref={videoRef3}
            width={420}
            height={420}
            mt={100}
            title={"PROJECT NAME"}
            description={"부동산 데이터 소팅 및 사용자 인터페이스 설계"}
          />
          <ProjectCard
            src={"/images/nineArk.mp4"}
            ref={videoRef4}
            width={630}
            height={420}
            mt={100}
            ml={110}
            title={"PROJECT NAME"}
            description={"부동산 데이터 소팅 및 사용자 인터페이스 설계"}
          />
        </SubProjectsWrap>
      </SubContentBox>
    </MainProjectSection>
  );
};

export default MainProject;

const MainProjectSection = styled.section`
  margin-top: 160px;
  @media (min-width: 1200px) {
    margin: 160px 160px 0 120px;
  }
`;

// 반응형 줄바꿈
const RspMb = styled.br`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }
`;
const RspPc = styled.br`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

// 소개 및 메인 프로젝트 영역

interface IMainContentBox {
  $isView: boolean;
}

const MainContentBox = styled.div<IMainContentBox>`
  opacity: 1;

  @media (min-width: 1200px) {
    opacity: ${(props) => (props.$isView ? 1 : 0)};
    transition: opacity 0.25s ease-in-out; // 부드러운 효과를 위한 트랜지션 추가

    display: flex;
  }
`;
const MainProjectImg = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;

  @media (min-width: 1200px) {
    width: 580px;
    height: 760px;
  }
`;
const MainProjectTextWrap = styled.div`
  margin-top: 40px;
  @media (min-width: 1200px) {
    position: relative;
    margin-top: 175px;
    margin-left: 161px;
  }
`;

const MainProjectTitleWrap = styled.div`
  margin-top: 6px;
  margin-left: 10px;
  @media (min-width: 1200px) {
    margin-top: 0;
    margin-left: 0;
  }
`;
const BestIcon = styled(BestImg)`
  width: 106px;
  height: 106px;
  @media (min-width: 1200px) {
    position: absolute;
    top: -70px;
    left: -80px;
  }
`;

interface ITitle {
  animated?: string;
}

const MainTitleWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const MainTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: ${(props) => (props.animated === "true" ? "translate(0px, 0px)" : "translate(0px, 150%)")};
    animation: ${(props) => (props.animated === "true" ? fadeIn : "none")} 2s ease;
  }
`;

const WeGrowTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 0.6s forwards;
  }
`;
const ProductTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 0.9s forwards;
  }
`;
const IntroduceTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 1.2s forwards;
  }
`;
const ANewTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 1.5s forwards;
  }
`;
const ProjectTitle = styled.h2<ITitle>`
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 1.8s forwards;
  }
`;

const SubTitleWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const SubTitle = styled.p<ITitle>`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 1200px) {
    margin-top: 40px;
    transform: translate(0px, 150%);
    animation: ${fadeIn} 1s ease 2.1s forwards;
  }
`;

// 나머지 프로젝트 영역

const SubContentBox = styled.div`
  margin-top: 160px;
`;

const SubProjectsWrap = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    &:not(:first-child) {
      margin-top: 100px;
    }
  }
`;
