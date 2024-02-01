"use client";

import styled from "styled-components";
import UnderLineText from "../components/UnderLineText";
import { fadeInAndUp, fadeInAndUp2Sec, fadeInAndUp3Sec } from "../animations/fadeInAndUp";

const SectionWrap = styled.section`
  padding: 60px 20px 60px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    padding: 40px 100px 60px;
  }
`;

const TitleWrap = styled.div`
  h1 {
    font-size: 32px;
    line-height: 1.5;
    color: #000;
    word-break: keep-all;
  }

  @media (min-width: 1200px) {
    opacity: 0;
    ${fadeInAndUp}
    h1 {
      width: 100%;
      font-weight: 500;
    }
  }
`;

export const ContactEmailSection = () => {
  return (
    <SectionWrap>
      <TitleWrap>
        <h1>프로젝트에 대한 문의나 의뢰가 있나요?</h1>
        <UnderLineText mbSize={32} pcSize={42} text={"email@codespace.im"} />
      </TitleWrap>
      {/* <Wrapper /> */}
    </SectionWrap>
  );
};
