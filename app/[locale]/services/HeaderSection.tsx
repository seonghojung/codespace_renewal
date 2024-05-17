"use client";

import { styled } from "styled-components";
import { enTitleFadeIn, koSubTitleFadeIn, koTitleFadeIn } from "../animations/titleFadeIn";
import { ITranslation } from "../(home)/page";

const Wrap = styled.article`
  @media (min-width: 768px) {
  }
`;

const SubTitleWrap = styled.div`
  padding-top: 20px;
  /* max-width: 74.4%; */
  max-width: 279px;
  h2 {
    margin-top: 34px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4; // 1.625;
    color: rgba(0, 0, 0, 0.8);
  }
  @media (min-width: 768px) {
    padding-top: 40px;
    max-width: 425px;
    h2 {
      opacity: 0;
      ${koSubTitleFadeIn}
      font-size: 20px;
      line-height: 1.4; // 1.6;
      color: #050411;

      br {
        display: block;
      }
    }
  }

  @media (min-width: 1280px) {
    max-width: 466px;
  }
  @media (min-width: 1920px) {
    max-width: 532px;
  }
`;

const Subtitle = styled.h3`
  opacity: 0;
  ${koTitleFadeIn}
  color: #050411;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 25px;
  word-break: keep-all;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4; // 28px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.4; // 1.4;
    letter-spacing: -0.08px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.4; // 1.39;
    letter-spacing: -0.16px;
  }
`;

const EnTitle = styled.h2`
  position: relative;
  opacity: 0;
  ${enTitleFadeIn}
  font-size: 40px;
  font-weight: bold;
  line-height: 1.4; // 1.1;
  letter-spacing: -1.04px;
  color: #050411;

  @media (min-width: 768px) {
    font-size: 52px;
    letter-spacing: -1.35px;
  }
  @media (min-width: 1280px) {
    font-size: 74px;
    letter-spacing: -2.19px;
  }

  @media (min-width: 1920px) {
    font-size: 86px;
    letter-spacing: -2.96px;
  }
`;

const HeaderSection = ({ translation }: { translation: ITranslation }) => {
  return (
    <Wrap>
      <EnTitle>
        Bring imagination <br />
        To Product
      </EnTitle>
      <SubTitleWrap>
        <Subtitle>{translation.title}</Subtitle>
      </SubTitleWrap>
    </Wrap>
  );
};
export default HeaderSection;
