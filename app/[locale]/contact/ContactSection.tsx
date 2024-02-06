"use client";

import styled from "styled-components";
import UnderLineText from "../components/UnderLineText";
import { fadeInAndUp, fadeInAndUp2Sec } from "../animations/fadeInAndUp";
import { ITranslation } from "../(home)/page";
import Link from "next/link";

const SectionWrap = styled.section`
  padding: 40px 0 120px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 1.2;
  color: #000;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;
const TopTitle = styled(Title)`
  @media (min-width: 768px) {
    br {
      display: none;
    }
  }
`;

const Header = styled.h2`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 42px;
  }
`;

const EmailTitleWrap = styled.div`
  opacity: 0;
  ${fadeInAndUp}
`;
const PhoneTitleWrap = styled.div`
  margin-top: 80px;
  opacity: 0;
  ${fadeInAndUp2Sec}

  @media (min-width: 1680px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContactSection = ({ translation }: { translation: ITranslation }) => {
  return (
    <SectionWrap>
      <EmailTitleWrap>
        <TopTitle>{translation.title}</TopTitle>
        <Link href="mailto:bentley@codespace.im">
          <UnderLineText>
            <Header>bentley@codespace.im</Header>
          </UnderLineText>
        </Link>
      </EmailTitleWrap>
      <PhoneTitleWrap>
        <Title>{translation.description}</Title>
        <UnderLineText>
          <Header>010-0000-0000</Header>
        </UnderLineText>
      </PhoneTitleWrap>
    </SectionWrap>
  );
};
