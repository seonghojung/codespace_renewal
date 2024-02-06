"use client";

import { BlueDotIcon } from "@/app/[locale]/components/icons";
import { BlueDotIconMb } from "@/app/[locale]/components/icons";
import { styled } from "styled-components";
import { enTitleFadeIn, koSubTitleFadeIn, koTitleFadeIn } from "../animations/titleFadeIn";
import { useEffect, useState } from "react";
import { ITranslation } from "../(home)/page";

const SectionWrap = styled.section`
  padding: 20px 0px 100px;

  @media (min-width: 768px) {
    padding: 81px 0 0 0;
  }
`;
const EnTitle = styled.h1`
  position: relative;
  color: #000;
  /* font-size: 50px; */
  font-size: clamp(50px, 7.5vw, 74px);
  letter-spacing: -0.4px;
  font-weight: 700;
  line-height: 0.88;
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
    font-size: clamp(108px, 14.0625vw, 160px);
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
      /* width: 668px; */
      font-size: 42px;
      font-weight: 600;
      line-height: 1.2;
      font-size: clamp(42px, 5.46875vw, 86px);
      br {
        display: block;
      }
    }
    h2 {
      opacity: 0;
      ${koSubTitleFadeIn}
      font-size: 20px;
      line-height: 1.6;
      color: #050411;

      br {
        display: block;
      }
    }
  }
`;

const HeaderSection = ({ translation }: { translation: ITranslation }) => {
  const [isRspPc, setIsRspPc] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = window.innerWidth;
      setIsRspPc(bodyWidth > 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionWrap>
      <EnTitle>
        Bring
        <br /> imagination <br />
        to PRODUCT
        {isRspPc ? <BlueDotIcon /> : <BlueDotIconMb />}
      </EnTitle>
      <SubHeaderWrap>
        <h1>{translation.title}</h1>
        <h2>{translation.description}</h2>
      </SubHeaderWrap>
    </SectionWrap>
  );
};
export default HeaderSection;
