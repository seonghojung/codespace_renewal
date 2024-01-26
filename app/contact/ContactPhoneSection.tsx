"use client";

import { styled } from "styled-components";

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 12px 160px 20px;
  gap: 10px;
  h2 {
    color: #000;
    font-size: 28px;
    font-weight: 600;
    line-height: 44px;
  }
  span {
    color: #000;
    font-size: 32px;
    font-weight: 600;
    text-decoration-line: underline;
  }
  @media (min-width: 1200px) {
    padding: 60px 120px 148px 120px;
    h2 {
      line-height: 48px;
    }
    span {
      padding-top: 36px;
    }
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ContactPhoneSection = () => {
  return (
    <SectionWrap>
      <h2>
        메일로 확인이 어려우시면 <br /> 아래 전화로 문의 부탁드립니다.
      </h2>
      <span>010 - 0000 - 0000</span>
    </SectionWrap>
  );
};
