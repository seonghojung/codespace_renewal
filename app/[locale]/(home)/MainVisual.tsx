"use client";

import styled, { keyframes } from "styled-components";
import Accordion from "react-bootstrap/Accordion";

export interface IMainVisualProps {
  title: string;
  subTitle: string;
  moreBtn: string;
}

const MainImgSectionBox = ({ translate: { title, subTitle } }: { translate: IMainVisualProps }) => {
  return (
    <MainVisualSection>
      <MainVideo src="/images/kia.mp4" autoPlay muted loop />
      <TextBox>
        <TextWrap>
          <TitleWrap>
            <Title animated="true">{title}</Title>
          </TitleWrap>
          <SubtitleWrap>
            <Subtitle animated="true">{subTitle}</Subtitle>
          </SubtitleWrap>
        </TextWrap>
      </TextBox>
    </MainVisualSection>
  );
};
export default MainImgSectionBox;

const fadeIn = keyframes`
  from {
    transform: translate(0px, 150%);
  }

  to {
    transform: translate(0px, 0px);
  }
`;

const RspMb = styled.br`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }
`;
const RspPc = styled.br`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const MainVisualSection = styled.section`
  @media (min-width: 1200px) {
    margin: 0 100px;
  }
`;

const MainVideo = styled.video`
  width: 100%;
  height: 420px;
  object-fit: cover;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 1240px;
    height: 600px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

interface TextBoxProps {
  animated?: string;
}

const TextBox = styled.div`
  margin: 80px 10px 0 10px;
  @media (min-width: 1200px) {
    margin: 80px 20px 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;
const TextWrap = styled.div``;
const TitleWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1<TextBoxProps>`
  position: relative;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.36;
  color: #000;

  @media (min-width: 1200px) {
    transform: ${(props) => (props.animated === "true" ? "translate(0px, 0px)" : "translate(0px, 150%)")};
    animation: ${(props) => (props.animated === "true" ? fadeIn : "none")} 1s ease;
  }
`;

const SubtitleWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled.h2<TextBoxProps>`
  margin-top: 23px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 1200px) {
    margin-top: 34px;
    transform: ${(props) => (props.animated === "true" ? "translate(0px, 0px)" : "translate(0px, 150%)")};
    animation: ${(props) => (props.animated === "true" ? fadeIn : "none")} 1.7s ease;
  }
`;
const MainAccordion = styled(Accordion)`
  margin-top: 60px;
  --bs-accordion-btn-icon: url("/images/arrow_bottom-gray.png");
  --bs-accordion-btn-active-icon: url("/images/arrow_top-black.png");

  @media (min-width: 1200px) {
    position: absolute;
    margin-top: 28px;
  }
`;
const MainAccordionItem = styled(Accordion.Item)`
  border: none;
  button {
    padding: 0;
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }

  &:hover {
    --bs-accordion-btn-icon: url("/images/arrow_top-black.png");
  }

  &:not(:first-child) {
    button {
      margin-top: 16px;
    }
  }

  .accordion-button:focus {
    border: none;
    box-shadow: none;
  }
  @media (min-width: 1200px) {
    .accordion-button {
      width: 341px;
    }
  }
`;

const MainAccordionHeader = styled(Accordion.Header)`
  button:not(.collapsed) {
    background-color: #fff;
    box-shadow: none;
  }

  .accordion-button:after {
    width: 11px;
    height: 8px;
    background-size: contain;
    margin-right: 60px;
    color: red;
  }

  @media (min-width: 1200px) {
    .accordion-button:after {
      margin-right: 0;
    }
  }
`;
const MainAccordionBody = styled(Accordion.Body)`
  padding: 16px 0 10px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
`;
