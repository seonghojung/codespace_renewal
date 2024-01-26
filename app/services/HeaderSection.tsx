"use client";

import { BlueDotIcon } from "@/components/icons";
import { styled } from "styled-components";

const SectionWrap = styled.section`
  padding: 41px 26px 160px 10px;
  h1 {
    width: 339px;
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
  }
  @media (min-width: 1200px) {
    padding: 41px 0px 160px 40px;
    h1 {
      width: 1084px;
      font-size: 160px;
      line-height: 140px;
      svg {
        width: 32px;
        height: 32px;
        right: 19px;
        bottom: 11px;
      }
    }
  }
`;
const SubHeaderWrap = styled.div`
  padding-top: 60px;
  padding-left: 22px;
  h1 {
    width: 272px;
    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    word-break: keep-all;
    br {
      display: none;
    }
  }
  h2 {
    margin-top: 34px;
    color: rgba(0, 0, 0, 0.8);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 300;
    line-height: 21px;
    word-break: keep-all;
  }
  @media (min-width: 1200px) {
    padding-top: 80px;
    padding-left: 80px;
    h1 {
      width: 730px;
      font-size: 42px;
      font-weight: 600;
      line-height: 48px;
      br {
        display: inline;
      }
    }
    h2 {
      width: 752px;
      br {
        display: none;
      }
    }
  }
`;
const HeaderSection = () => {
  return (
    <SectionWrap>
      <h1>
        Bring imagination to PRODUCT
        <BlueDotIcon />
      </h1>
      <SubHeaderWrap>
        <h1>
          순간을 해결하는 솔루션이 아닌
          <br /> 오랜시간 함께 성장하는 솔루션을 제공합니다
        </h1>
        <h2>
          파트너의 경험을 통해 만들어진 비즈니스 구조를 이해하고 사용자 관점의 설계와 디자인을 기반으로 꾸준히 발전할 수 있는 개발 솔루션을 제공하고
          있습니다.
          <br /> <br /> 코드스페이스는 당장의 제품 서비스를 만들고 싶은 목표를 해소하는 것이 아닌 다양한 오브젝트로 확장과 전개가 가능한 제품 서비스를
          만들고자 하는 파트너를 위해 일하고 있습니다.
        </h2>
      </SubHeaderWrap>
    </SectionWrap>
  );
};
export default HeaderSection;
