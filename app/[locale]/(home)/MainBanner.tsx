"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import Link from "next/link";
import Image from "next/image";

import LineDecorationLink from "../components/LineDecorationLink";
import mainbanner from "../../../public/images/main_banner.png";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const BannerImage = styled(Image)`
  max-width: 1680px;
`;
const InfoWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 1680px;
  padding-top: 167px;
`;
const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-size: 74px;
  font-weight: bold;
  letter-spacing: normal;
  line-height: 0.75;
  margin-bottom: 75px;
`;
const Description = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.28;
  color: #fff;
  text-align: center;
`;
const LinkWrap = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
  a {
    font-size: 18px;
    color: white;
  }
`;
const MainBanner = () => {
  return (
    <Container>
      <BannerImage src={mainbanner} alt={"배너 이미지"} />
      <InfoWrap>
        <Title>Imagination into Reality</Title>
        <Description>
          고급 기술로 포장되어 있는 어려운 용어들, 꼭 해야하는지 고민이 되는
          <br /> 수 많은 문제들, 정확하지 않아서 답을 찾고자 노력하는 모든 고민은 코드스페이스에게 맡겨주세요. <br />
          가장 쉬운 단어와 필요한 핵심 요소를 통해 오직 파트너의 상상력으로
          <br /> 만들어진 비즈니스 모델을 구현하고 시장에 선보이는 것에 집중하며
          <br /> 프로덕트 마켓 핏을 찾을 수 있도록 도와드리겠습니다.
        </Description>
        <LinkWrap>
          <LineDecorationLink color="white">
            <Link href={"/contact"}>자세히 알아보기</Link>
          </LineDecorationLink>
        </LinkWrap>
      </InfoWrap>
    </Container>
  );
};

export default MainBanner;
