"use client";

import styled from "styled-components";
import UnderLineText from "../components/UnderLineText";
import { fadeInAndUp, fadeInAndUp2Sec, fadeInAndUp3Sec } from "../animations/fadeInAndUp";
import { ITranslation } from "../(home)/page";

const SectionWrap = styled.section`
  padding: 60px 10px 60px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 0px 60px 26px;
  }
`;

const TitleWrap = styled.div`
  h1 {
    font-size: 32px;
    line-height: 1.5;
    color: #000;
    word-break: keep-all;
  }

  @media (min-width: 768px) {
    opacity: 0;
    ${fadeInAndUp}
    h1 {
      width: 100%;
      font-weight: 500;
    }
  }
`;

export const ContactEmailSection = ({ translation }: { translation: ITranslation }) => {
  return (
    <SectionWrap>
      <TitleWrap>
        <h1>{translation.title}</h1>
        <UnderLineText mbSize={32} pcSize={42} text={"email@codespace.im"} />
      </TitleWrap>
    </SectionWrap>
  );
};
