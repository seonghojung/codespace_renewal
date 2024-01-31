"use client";

import { styled } from "styled-components";
import UnderLineText from "../components/UnderLineText";

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 12px 160px 20px;
  gap: 10px;
  span {
    color: #000;
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 60px 120px 148px 120px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 600;
  line-height: 44px;

  @media (min-width: 1200px) {
    line-height: 48px;
  }
`;

export const ContactPhoneSection = () => {
  return (
    <SectionWrap>
      <Title>
        메일로 확인이 어려우시면 <br /> 아래 전화로 문의 부탁드립니다.
      </Title>
      <UnderLineText mbSize={32} pcSize={36} text={"010-0000-0000"} />
    </SectionWrap>
  );
};
