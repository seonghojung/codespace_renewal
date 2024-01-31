"use client";

import styled from "styled-components";
import UnderLineText from "../components/UnderLineText";

const SectionWrap = styled.section`
  padding: 60px 20px 0px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    padding: 40px 120px 0px;
  }
`;

const TitleWrap = styled.div`
  h1 {
    width: 300px;
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
  }

  @media (min-width: 1200px) {
    h1 {
      width: 100%;
    }
  }
`;

const SubTitleWrap = styled.div`
  h1 {
    color: #000;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    margin-top: 10px;
    color: #000;
    font-size: 22px;
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 32px;
    }
  }
`;
const Wrapper = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 140px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
export const ContactEmailSection = () => {
  return (
    <SectionWrap>
      <TitleWrap>
        <h1>프로젝트에 대한 문의나 의뢰가 있나요?</h1>
        <UnderLineText mbSize={32} pcSize={42} text={"email@codespace.im"} />
      </TitleWrap>
      <Wrapper>
        <SubTitleWrap>
          <h1>채용과 관련하여 궁금하신 점이 있나요?</h1>
          <UnderLineText mbSize={22} pcSize={32} text={"email@codespace.im"} />
        </SubTitleWrap>
        <SubTitleWrap>
          <h1>비즈니스 파트너 제휴가 필요하신가요?</h1>
          <UnderLineText mbSize={22} pcSize={32} text={"email@codespace.im"} />
        </SubTitleWrap>
      </Wrapper>
    </SectionWrap>
  );
};
