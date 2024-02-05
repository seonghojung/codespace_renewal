"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import LineDecorationLink from "../components/LineDecorationLink";
import mainBannerMb from "../../../public/images/main_banner_mb.png";
import mainBanner from "../../../public/images/main_banner.png";
import { useEffect, useState } from "react";

export const VideoLayout = styled.div`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const InfoWrap = styled.div`
  padding-top: 108px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 167px;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 46px;
  font-weight: bold;
  letter-spacing: normal;
  margin-bottom: 40px;
  max-width: 315px;
  @media (min-width: 768px) {
    font-size: 74px;
    max-width: none;
  }
`;
const Description = styled.h3`
  width: 90%;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.28;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  @media (min-width: 768px) {
  }
`;
const LinkWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  a {
    font-size: 18px;
    color: white;
  }
`;

const BannerImage = styled(Image)`
  width: 100%;
  /* aspect-ratio: 0.599; */
  @media (min-width: 768px) {
  }
`;

const MainBanner = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const bodyWidth = window.innerWidth;

    setInnerWidth(bodyWidth);
  }, []);

  return (
    <VideoLayout>
      <Container>
        <BannerImage src={innerWidth > 767 ? mainBanner : mainBannerMb} alt={"배너 이미지"} priority />
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
              <Link href={"/contact"}>프로젝트 문의하기</Link>
            </LineDecorationLink>
          </LinkWrap>
        </InfoWrap>
      </Container>
    </VideoLayout>
  );
};

export default MainBanner;
