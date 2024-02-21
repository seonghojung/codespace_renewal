"use client";

import styled, { css, keyframes } from "styled-components";
import Accordion from "react-bootstrap/Accordion";

interface FAQAccordionProps {
  eventKey: string;
  header: string;
  body: string;
  isView: boolean;
}

interface IProps {
  $isView: boolean;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const floatingUp = css`
  animation: ${fadeIn} 1s ease forwards;
`;

const Container = styled.div<IProps>`
  opacity: 0;
  ${({ $isView }) => $isView && floatingUp}
`;
const Content = styled.p`
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: -0.02px;
  color: #858e97;
  white-space: pre-wrap;
  word-break: keep-all;
  @media (min-width: 768px) {
    max-width: 509px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    max-width: 833px;
  }
`;
const FAQAccordion = ({ header, body, eventKey, isView }: FAQAccordionProps) => {
  return (
    <Container $isView={isView} style={{ animationDelay: `0.${+eventKey + 1}s` }}>
      <AccordionWrap>
        <AccordionItem eventKey={eventKey}>
          <AccordionHeader>
            <Title>{header}</Title>
          </AccordionHeader>
          <AccordionBody>
            <Content>{body}</Content>
          </AccordionBody>
        </AccordionItem>
      </AccordionWrap>
    </Container>
  );
};

export default FAQAccordion;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.44;
  letter-spacing: -0.04px;
  color: #f4f5f8;
  width: 77.98%;
  word-break: keep-all;
  span {
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: -0.08px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
    letter-spacing: -0.1px;
  }
`;

const AccordionWrap = styled(Accordion)`
  --bs-accordion-border-width: 0;
  --bs-accordion-inner-border-radius: 0;
  border-bottom: 1px solid #323946;

  .accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
const AccordionItem = styled(Accordion.Item)``;
const AccordionHeader = styled(Accordion.Header)`
  button,
  button:not(.collapsed) {
    background-color: #1a1f27;
    color: #fff;
  }

  .accordion-button {
    padding: 19px 0 18px;

    @media (min-width: 768px) {
      padding: 24px 0 24px;
    }
    @media (min-width: 1280px) {
      padding: 36px 0 36px;
    }
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-button:after {
    width: 18px;
    height: 8px;
    background-image: url("/images/arrow_bottom.png");
    background-size: auto;
  }
  &:hover {
    ${Title} {
      opacity: 0.8;
    }
    .accordion-button:after {
      opacity: 0.8;
    }
  }
`;
const AccordionBody = styled(Accordion.Body)`
  background-color: #1a1f27;
  padding: 20px 0px 18px 0;
  @media (min-width: 768px) {
    padding: 0px 0px 24px 0;
  }
  @media (min-width: 1280px) {
    padding: 0px 0px 36px 0;
  }
`;
