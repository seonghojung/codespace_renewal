import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <MainAccordion>
      <MainAccordionItem eventKey="0">
        <MainAccordionHeader>프로젝트는 어떻게 진행이 되나요?</MainAccordionHeader>
        <MainAccordionBody>
          FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이
          들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다.
          간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로
          넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.
        </MainAccordionBody>
      </MainAccordionItem>
      <MainAccordionItem eventKey="1">
        <MainAccordionHeader>프로젝트는 어떻게 진행이 되나요?</MainAccordionHeader>
        <MainAccordionBody>
          FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이
          들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다.
          간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로
          넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.
        </MainAccordionBody>
      </MainAccordionItem>
      <MainAccordionItem eventKey="2">
        <MainAccordionHeader>프로젝트는 어떻게 진행이 되나요?</MainAccordionHeader>
        <MainAccordionBody>
          FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이
          들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다.
          간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로
          넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.
        </MainAccordionBody>
      </MainAccordionItem>
    </MainAccordion>
  );
};

export default FAQ;

const MainAccordion = styled(Accordion)``;
const MainAccordionItem = styled(Accordion.Item)``;
const MainAccordionHeader = styled(Accordion.Header)`
  button,
  button:not(.collapsed) {
    background-color: #1a1f27;
    color: #fff;
  }

  .accordion-button:after {
    width: 14px;
    height: 8px;
    background-image: url(images/arrow_bottom.png);
    background-size: auto;
  }
`;
const MainAccordionBody = styled(Accordion.Body)``;
