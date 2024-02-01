"use client";

import { BlueDotIcon } from "@/app/[locale]/components/icons";
import { BlueDotIconMb } from "@/app/[locale]/components/icons";
import { styled } from "styled-components";
import { enTitleFadeIn, koSubTitleFadeIn, koTitleFadeIn } from "../animations/titleFadeIn";
import { useEffect, useState } from "react";

const SectionWrap = styled.section`
  padding: 20px 0px 100px;

  @media (min-width: 768px) {
    padding: 81px 0 0 0;
  }
`;
const EnTitle = styled.h1`
  position: relative;
  color: #000;
  font-size: 50px;
  font-weight: 700;
  line-height: 44px;
  text-transform: uppercase;
  svg {
    width: 12px;
    height: 12px;
    position: absolute;
    right: -2px;
    bottom: 4px;
  }

  @media (min-width: 768px) {
    opacity: 0;
    ${enTitleFadeIn}
    width: 1084px;
    font-size: 160px;
    line-height: 0.875;
    color: #000;

    svg {
      width: 32px;
      height: 32px;
      right: 19px;
      bottom: 11px;
    }
  }
`;
const SubHeaderWrap = styled.div`
  padding-top: 60px;
  h1 {
    min-width: 340px;
    color: #000;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    line-height: 32px;
    word-break: keep-all;
    br {
      display: none;
    }
  }
  h2 {
    margin-top: 34px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.625;
    color: rgba(0, 0, 0, 0.8);

    br {
      display: none;
    }
  }
  @media (min-width: 768px) {
    padding-top: 80px;
    h1 {
      opacity: 0;
      ${koTitleFadeIn}
      width: 668px;
      font-size: 42px;
      font-weight: 600;
      line-height: 48px;
      br {
        display: inline;
      }
    }
    h2 {
      opacity: 0;
      ${koSubTitleFadeIn}
      width: 983px;
      height: 96px;
      font-size: 20px;
      line-height: 1.6;
      color: #050411;

      br {
        display: block;
      }
    }
  }
`;

const HeaderSection = () => {
  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionWrap>
      <EnTitle>
        Bring imagination to PRODUCT
        {isMobile > 768 ? <BlueDotIcon /> : <BlueDotIconMb />}
        {/* <BlueDotIcon /> */}
      </EnTitle>
      <SubHeaderWrap>
        <h1>순간을 해결하는 솔루션이 아닌 오랜시간 함께 성장하는 솔루션을 제공합니다</h1>
        <h2>
          우리는 끊임없이 발전하는 디지털 환경 속에서 파트너의 생각이 올바르게 담길 수 있는 플랫폼 개발 솔루션을 제공하고 있습니다. 사용자 경험과 그에 따른 디자인, 개발 환경 구축 등 다양한 환경에서도
          일관되게 보여질 수 있는 개발 방식을 표현하며
          <br />더 나은 성장과 이윤을 만드는 비즈니스를 성장시키고 있습니다.
        </h2>
      </SubHeaderWrap>
    </SectionWrap>
  );
};
export default HeaderSection;
