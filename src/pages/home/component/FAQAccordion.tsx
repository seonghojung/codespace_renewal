import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const FAQAccordion = ({ eventKey, header, body }) => {
  return (
    <AccordionWrap>
      <AccordionItem eventKey="0">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionBody>{body}</AccordionBody>
      </AccordionItem>
    </AccordionWrap>
  );
};

export default FAQAccordion;

const AccordionWrap = styled(Accordion)`
  --bs-accordion-border-width: 0;
  --bs-accordion-inner-border-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const AccordionItem = styled(Accordion.Item)``;
const AccordionHeader = styled(Accordion.Header)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  color: #fff;

  button,
  button:not(.collapsed) {
    background-color: #1a1f27;
    color: #fff;
  }

  .accordion-button {
    padding: 36px 0 15px;
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
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background-color: #1a1f27;
  padding: 21px 28px 35px 20px;
`;
