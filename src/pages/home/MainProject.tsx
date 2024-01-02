import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BestImg } from "../../svgs/best.svg";
import { ReactComponent as LinkImg } from "../../svgs/arrow_icon.svg";

interface SubProjectProps {
  src?: string;
  alt?: string;
  width: number;
  $pcHeight: number;
}

const SubProject = ({ src, alt, width, $pcHeight }: SubProjectProps) => {
  return (
    <>
      <SubProjectContainer>
        <ProjectImg src={src} alt={alt} width={width} $pcHeight={$pcHeight} />
        <ProjectName>PROJECT NAME</ProjectName>
        <ProjectDescription>부동산 데이터 소팅 및 사용자 인터페이스 설계</ProjectDescription>
      </SubProjectContainer>
    </>
  );
};

const SubProjectContainer = styled.div``;

const ProjectImg = styled.img<SubProjectProps>`
  width: 375px;
  height: 400px;

  @media (min-width: 1200px) {
    width: ${({ width }) => width}px;
    height: ${({ $pcHeight }) => $pcHeight}px;
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
              <br />A NEW
              <br />
              PROJECT.
            </MainTitle>
          </MainProjectTitleWrap>
          <SubTitle>
            <span style={{ fontWeight: "600" }}>파트너의 제품과 함께 성장하는 코드스페이스</span>의 새로운 프<RspMb />
            로젝트를 확인해보세요. 명확한 솔루션을 통해 비즈니스
            <RspMb /> 성장과 파트너의 아이디어를 현실로 구현하는 것을 통해
            <RspMb /> 함께 성장하며 발전하는 것은 우리가 생각하는
            <RspMb /> 가장 중요한 기본입니다.
          </SubTitle>
          <ProjectLink to="/project">
            <LinkText>More</LinkText>
            <LinkIcon />
          </ProjectLink>
        </MainProjectTextWrap>
      </MainContentBox>
      <SubContentBox>
        <SubProjectsWrap>
          <SubProject width={630} $pcHeight={420} />
          <SubProject width={420} $pcHeight={420} />
        </SubProjectsWrap>
        <SubProjectsWrap>
          <SubProject width={420} $pcHeight={420} />
          <SubProject width={630} $pcHeight={420} />
        </SubProjectsWrap>
      </SubContentBox>
    </MainProjectSection>
  );
};

export default MainProject;

const MainProjectSection = styled.section`
  margin-top: 142px;
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
  }
`;
const MainProjectTextWrap = styled.div``;
const MainProjectTitleWrap = styled.div``;
const BestIcon = styled(BestImg)`
  width: 106px;
  height: 106px;
`;
const MainTitle = styled.p`
  margin-top: 6px;
  font-size: 42px;
  font-weight: bold;
  line-height: 0.797;
  color: #000;
`;
const SubTitle = styled.p`
  margin: 40px 0 40px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
`;
const ProjectLink = styled(Link)``;
const LinkText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  color: #000;
`;
const LinkIcon = styled(LinkImg)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;

// 나머지 프로젝트 영역
const SubContentBox = styled.div`
  margin-top: 160px;

  &:not(:first-child) {
    div {
      margin-top: 100px;
    }
  }
`;
const SubProjectsWrap = styled.div``;
