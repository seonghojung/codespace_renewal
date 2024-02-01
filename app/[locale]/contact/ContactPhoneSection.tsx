"use client";

import { styled } from "styled-components";
import UnderLineText from "../components/UnderLineText";
import { fadeInAndUp2Sec } from "../animations/fadeInAndUp";

const SectionWrap = styled.section`
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 2px 120px 10px;
  gap: 10px;

  @media (min-width: 1200px) {
    padding: 60px 0px 120px;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    opacity: 0;
    ${fadeInAndUp2Sec}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  line-height: 44px;

  @media (min-width: 1200px) {
    line-height: 48px;
    font-weight: 500;
  }
`;

export const ContactPhoneSection = () => {
  return (
    <SectionWrap>
      <TitleWrap>
        <Title>
          메일로 확인이 어려우시면 <br /> 아래 전화로 문의 부탁드립니다.
        </Title>
        <UnderLineText mbSize={32} pcSize={36} text={"010-0000-0000"} />
      </TitleWrap>
    </SectionWrap>
  );
};
