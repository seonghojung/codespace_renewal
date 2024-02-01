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
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
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

const Title = styled.span`
  font-size: 18px;
  font-weight: 200;
  line-height: 1.22;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
  @media (min-width: 1920px) {
    font-size: 32px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const AccordionWrap = styled(Accordion)`
  --bs-accordion-border-width: 0;
  --bs-accordion-inner-border-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const AccordionItem = styled(Accordion.Item)``;
const AccordionHeader = styled(Accordion.Header)`
  button,
  button:not(.collapsed) {
    background-color: #1a1f27;
    color: #fff;
  }
  &:hover {
    .accordion-button:after {
      opacity: 0.3;
      transform: translateY(5px);
    }
  }
  .accordion-button {
    margin-top: 26px;
    padding: 0px 0 26px;
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-button:after {
    width: 14px;
    height: 8px;
    background-image: url(images/arrow_bottom.png);
    background-size: auto;
  }
`;
const AccordionBody = styled(Accordion.Body)`
  background-color: #1a1f27;
  padding: 19px 75px 35px 0px;
`;
