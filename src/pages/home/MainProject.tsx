import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BestImg } from "../../svgs/best.svg";
import { ReactComponent as LinkImg } from "../../svgs/arrow_icon.svg";
import { FC } from "react";

interface SubProjectProps {
  src?: string;
  alt?: string;
  pcWidth: number;
  pcHeight: number;
}

const SubProject: FC<SubProjectProps> = ({ src, alt, pcWidth, pcHeight }) => {
  return (
    <SubProjectContainer>
      <ProjectImg src={src} alt={alt} pcWidth={pcWidth} pcHeight={pcHeight} />
      <ProjectName>PROJECT NAME</ProjectName>
      <ProjectDescription>부동산 데이터 소팅 및 사용자 인터페이스 설계</ProjectDescription>
    </SubProjectContainer>
  );
};

const SubProjectContainer = styled.div``;

const ProjectImg = styled.img<SubProjectProps>`
  width: 375px;
  height: 400px;

  @media (min-width: 1200px) {
    width: ${({ pcWidth }) => pcWidth}px;
    height: ${({ pcHeight }) => pcHeight}px;
  }
`;
const ProjectName = styled.p``;

const ProjectDescription = styled.p``;

const MainProject = () => {
  return (
    <MainProjectSection>
      <MainContentBox>
        <MainProjectImg />
        <MainProjectTextWrap>
          <MainProjectTitleWrap>
            <BestIcon />
            <MainTitle>WE GROW PRODUCT. INTRODUCE A NEW PROJECT.</MainTitle>
          </MainProjectTitleWrap>
          <SubTitle>
            파트너의 제품과 함께 성장하는 코드스페이스의 새로운 프로젝트를 확인해보세요. 명확한 솔루션을 통해 비즈니스
            성장과 파트너의 아이디어를 현실로 구현하는 것을 통해 함께 성장하며 발전하는 것은 우리가 생각하는 가장 중요한
            기본입니다.
          </SubTitle>
          <ProjectLink to="/project">
            <LinkText>More</LinkText>
            <LinkIcon />
          </ProjectLink>
        </MainProjectTextWrap>
      </MainContentBox>
      <SubContentBox>
        <SubProjectsWrap>
          <SubProject pcWidth={630} pcHeight={420} />
          <SubProject pcWidth={420} pcHeight={420} />
        </SubProjectsWrap>
        <SubProjectsWrap>
          <SubProject pcWidth={420} pcHeight={420} />
          <SubProject pcWidth={630} pcHeight={420} />
        </SubProjectsWrap>
      </SubContentBox>
    </MainProjectSection>
  );
};

export default MainProject;

const MainProjectSection = styled.section``;

// 소개 및 메인 프로젝트 영역
const MainContentBox = styled.div``;
const MainProjectImg = styled.img`
  width: 375px;
  height: 480px;
`;
const MainProjectTextWrap = styled.div``;
const MainProjectTitleWrap = styled.div``;
const BestIcon = styled(BestImg)`
  width: 86px;
  height: 86px;
`;
const MainTitle = styled.p``;
const SubTitle = styled.p``;
const ProjectLink = styled(Link)``;
const LinkText = styled.span``;
const LinkIcon = styled(LinkImg)`
  width: 18px;
  height: 18px;
`;

// 나머지 프로젝트 영역
const SubContentBox = styled.div``;
const SubProjectsWrap = styled.div``;
