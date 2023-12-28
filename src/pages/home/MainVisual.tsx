import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const MainImgSectionBox = () => {
  return (
    <MainVisualSection>
      <MainImg />
      <TextBox>
        <TextWrap>
          <Title>
            서비스 본질에 집중할 수 있는
            <br />
            개발 솔루션을 제공하고
            <RspMb />
            있습니다
          </Title>
          <Subtitle>
            코드스페이스는 파트너의 비즈니스 모델에 따른 목표 설<RspMb />
            정을 고려하여 가장 필요한 요소들을
            <RspPc />
            갖춘 제품을 만들며,
            <RspMb />더 나아가 향후 데이터 관리와 지속적인 개선 및 확장성을
            <RspMb />
            가능하게 하는
            <RspPc /> 개발 솔루션을 제공하고 있습니다.
          </Subtitle>
        </TextWrap>
        <MainAccordion>
          <MainAccordionItem eventKey="0">
            <MainAccordionHeader>WEBSITES</MainAccordionHeader>
            <MainAccordionBody>아코디언 안에 들어갈 내용들</MainAccordionBody>
          </MainAccordionItem>
          <MainAccordionItem eventKey="1">
            <MainAccordionHeader>APPLICATION</MainAccordionHeader>
            <MainAccordionBody>아코디언 안에 들어갈 내용들</MainAccordionBody>
          </MainAccordionItem>
          <MainAccordionItem eventKey="2">
            <MainAccordionHeader>MANAGEMENT</MainAccordionHeader>
            <MainAccordionBody>아코디언 안에 들어갈 내용들</MainAccordionBody>
          </MainAccordionItem>
        </MainAccordion>
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

const MainVisualSection = styled.section``;
const MainImg = styled.img`
  width: 375px;
  height: 480px;
`;
const TextBox = styled.div``;
const TextWrap = styled.div``;
const Title = styled.p``;
const Subtitle = styled.p``;
const MainAccordion = styled(Accordion)``;
const MainAccordionItem = styled(Accordion.Item)``;
const MainAccordionHeader = styled(Accordion.Header)`
  button:not(.collapsed) {
    background-color: #fff;
  }
`;
const MainAccordionBody = styled(Accordion.Body)``;
