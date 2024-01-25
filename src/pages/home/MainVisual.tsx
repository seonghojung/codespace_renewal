import styled, { keyframes } from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { useRef, useState } from "react";

const fadeIn = keyframes`
  from {
    transform: translate(0px, 150%);
  }

  to {
    transform: translate(0px, 0px);
  }
`;

const MainImgSectionBox = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <MainVisualSection>
      <MainVideo src="/images/kia.mp4" ref={videoRef} muted loop onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      <TextBox>
        <TextWrap>
          <TitleWrap>
            {/* <Title transformValue={transformValue}> */}
            <Title animated="true">
              서비스 본질에 집중할 수 있는
              <br />
              개발 솔루션을 제공하고
              <RspMb />
              있습니다
            </Title>
          </TitleWrap>
          <SubtitleWrap>
            <Subtitle animated="true">
              코드스페이스는 파트너의 비즈니스 모델에 따른 목표 설<RspMb />
              정을 고려하여 가장 필요한 요소들을
              <RspPc />
              갖춘 제품을 만들며,
              <RspMb />더 나아가 향후 데이터 관리와 지속적인 개선 및 확장성을
              <RspMb />
              가능하게 하는
              <RspPc /> 개발 솔루션을 제공하고 있습니다.
            </Subtitle>
          </SubtitleWrap>
        </TextWrap>
        <div style={{ position: "relative", width: "341px" }}>
          <MainAccordion flush>
            <MainAccordionItem eventKey="0">
              <MainAccordionHeader>WEBSITES</MainAccordionHeader>
              <MainAccordionBody>
                코드스페이스는 파트너의 비즈니스 모델에 따른 목표 <br />
                설정을 고려하여 가장 필요한 요소들을 가춘 제품을 만<br />
                들며, 더 나아가 향후 데이터 관리와 지속적인 개선 및<br />
                확장성을 가능하게 하는 개발 솔루션을 제공하고 있<br />
                습니다.
              </MainAccordionBody>
            </MainAccordionItem>
            <MainAccordionItem eventKey="1">
              <MainAccordionHeader>APPLICATION</MainAccordionHeader>
              <MainAccordionBody>
                코드스페이스는 파트너의 비즈니스 모델에 따른 목표 <br />
                설정을 고려하여 가장 필요한 요소들을 가춘 제품을 만<br />
                들며, 더 나아가 향후 데이터 관리와 지속적인 개선 및<br />
                확장성을 가능하게 하는 개발 솔루션을 제공하고 있<br />
                습니다.
              </MainAccordionBody>
            </MainAccordionItem>
            <MainAccordionItem eventKey="2">
              <MainAccordionHeader>MANAGEMENT</MainAccordionHeader>
              <MainAccordionBody>
                코드스페이스는 파트너의 비즈니스 모델에 따른 목표
                <br />
                설정을 고려하여 가장 필요한 요소들을 가춘 제품을 만<br />
                들며, 더 나아가 향후 데이터 관리와 지속적인 개선 및<br />
                확장성을 가능하게 하는 개발 솔루션을 제공하고 있<br />
                습니다.
              </MainAccordionBody>
            </MainAccordionItem>
          </MainAccordion>
        </div>
      </TextBox>
    </MainVisualSection>
  );
};

export default MainImgSectionBox;
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
const MainImg = styled.img`
  width: 375px;
  height: 480px;

  @media (min-width: 1200px) {
    width: 1240px;
    height: 600px;
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
  /* transform: ${(props) => (props.animated ? "translate(0px, 0px)" : "translate(0px, 150%)")};
  animation: ${(props) => (props.animated ? fadeIn : "none")} 1.5s ease; */

  @media (min-width: 1200px) {
    transform: ${(props) => (props.animated === "true" ? "translate(0px, 0px)" : "translate(0px, 150%)")};
    animation: ${(props) => (props.animated === "true" ? fadeIn : "none")} 1.5s ease;
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
  /* transform: ${(props) => (props.animated ? "translate(0px, 0px)" : "translate(0px, 150%)")};
  animation: ${(props) => (props.animated ? fadeIn : "none")} 0.5s ease; */

  @media (min-width: 1200px) {
    margin-top: 34px;
    transform: ${(props) => (props.animated === "true" ? "translate(0px, 0px)" : "translate(0px, 150%)")};
    animation: ${(props) => (props.animated === "true" ? fadeIn : "none")} 0.5s ease;
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
