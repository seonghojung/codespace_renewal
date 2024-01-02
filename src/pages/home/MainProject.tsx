import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BestImg } from "../../svgs/best.svg";
import ProjectLink from "./component/ProjectLink";

interface SubProjectProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  mt?: number;
  ml?: number;
}

const SubProject = ({ src, alt, width, height, mt, ml }: SubProjectProps) => {
  return (
    <>
      <SubProjectContainer mt={mt} ml={ml}>
        <ProjectImg src={src} alt={alt} width={width} height={height} />
        <ProjectName>PROJECT NAME</ProjectName>
        <ProjectDescription>부동산 데이터 소팅 및 사용자 인터페이스 설계</ProjectDescription>
      </SubProjectContainer>
    </>
  );
};

const SubProjectContainer = styled.div<SubProjectProps>`
  margin-top: ${({ mt }) => mt}px;

  @media (min-width: 1200px) {
    margin-top: 0px;
    margin-left: ${({ ml }) => ml}px;
  }
`;

const ProjectImg = styled.img<SubProjectProps>`
  width: 375px;
  height: 400px;

  @media (min-width: 1200px) {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
  }
`;
const ProjectName = styled.p`
  margin-top: 14px;
  font-size: 28px;
  font-weight: 500;
  color: #000;
`;

const ProjectDescription = styled.p`
  margin-top: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
`;

const MainProject = () => {
  return (
    <MainProjectSection>
      <MainContentBox>
        <MainProjectImg />
        <MainProjectTextWrap>
          <MainProjectTitleWrap>
            <BestIcon />
            <MainTitle>
              WE GROW
              <br />
              PRODUCT.
              <br />
              INTRODUCE
              <br />A NEW <RspPc />
              PROJECT.
            </MainTitle>
          </MainProjectTitleWrap>
          <SubTitle>
            <span style={{ fontWeight: "600" }}>파트너의 제품과 함께 성장하는 코드스페이스</span>의 새로운 프<RspMb />
            로젝트를
            <RspPc /> 확인해보세요. 명확한 솔루션을 통해 비즈니스
            <RspMb /> 성장과 파트너의 아이
            <RspPc />
            디어를 현실로 구현하는 것을 통해
            <RspMb /> 함께 성장하며 발전하는 것은
            <RspPc /> 우리가 생각하는
            <RspMb /> 가장 중요한 기본입니다.
          </SubTitle>
          <ProjectLink color="#000" />
        </MainProjectTextWrap>
      </MainContentBox>
      <SubContentBox>
        <SubProjectsWrap>
          <SubProject width={630} height={420} mt={0} />
          <SubProject width={420} height={420} mt={100} ml={110} />
        </SubProjectsWrap>
        <SubProjectsWrap>
          <SubProject width={420} height={420} mt={100} />
          <SubProject width={630} height={420} mt={100} ml={110} />
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
const MainContentBox = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`;
const MainProjectImg = styled.img`
  width: 375px;
  height: 480px;

  @media (min-width: 1200px) {
    width: 580px;
    height: 760px;
    /* border-radius: 20px; */
  }
`;
const MainProjectTextWrap = styled.div`
  margin-top: 40px;
  @media (min-width: 1200px) {
    margin-top: 175px;
    margin-left: 161px;
  }
`;
const MainProjectTitleWrap = styled.div`
  @media (min-width: 1200px) {
    position: relative;
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
const MainTitle = styled.p`
  margin-top: 6px;
  font-size: 42px;
  font-weight: bold;
  line-height: 0.81;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 62px;
    line-height: 0.87;
  }
`;
const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 1200px) {
    margin-top: 40px;
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
