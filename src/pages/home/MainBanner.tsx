import styled from "styled-components";
import ProjectLink from "./component/ProjectLink";

const MainBanner = () => {
  return (
    <Banner>
      <BannerTitle>
        상상력을 현실로
        <br />
        코드스페이스
      </BannerTitle>
      <BannerSubTitleWrap>
        <BannerSubTitle>
          고급 기술로 포장되어 있는 어려운 용어들, 꼭 해야하는지 고민이 되는
          <br /> 수 많은 문제들, 정확하지 않아서 답을 찾고자 노력하는 모든 고민은
          <br /> 코드스페이스에게 맡겨주세요.
        </BannerSubTitle>
        <BannerSubTitle>
          가장 쉬운 단어와 필요한 핵심 요소를 통해 오직 파트너의 상상력으로
          <br /> 만들어진 비즈니스 모델을 구현하고 시장에 선보이는 것에 집중하며
          <br /> 프로덕트 마켓 핏을 찾을 수 있도록 도와드리겠습니다.
        </BannerSubTitle>
        <ProjectLink color={"#fff"} />
      </BannerSubTitleWrap>
    </Banner>
  );
};

export default MainBanner;

const Banner = styled.div`
  margin-top: 160px;
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url(images/main_banner-mb.png);

  @media (min-width: 1200px) {
    background-image: url(images/main_banner.png);
    height: 600px;
  }
`;

const BannerTitle = styled.h2`
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 48px;
  font-weight: 600;
  color: #fff;

  @media (min-width: 1200px) {
    top: 80px;
    left: 120px;
    font-size: 80px;
    line-height: 1.25;
  }
`;

const BannerSubTitleWrap = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 296px;
    right: 120px;
  }
`;

const BannerSubTitle = styled.p`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.31;
    color: rgba(255, 255, 255, 0.8);

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;
