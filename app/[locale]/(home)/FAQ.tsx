"use client";

import styled from "styled-components";
import FAQAccordion, { AccordionWrap } from "./components/FAQAccordion";
import { Layout } from "../components/navigation";
import { useInView } from "react-intersection-observer";
import { fadeInAndUp, fadeInAndUp3Sec } from "../animations/fadeInAndUp";
import { useEffect } from "react";

const questions = [
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
  {
    title: "프로젝트는 어떻게 진행이 되나요?",
    body: `FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다. FAQ에 대한 내용이 들어가는 위치입니다. 간단하게 텍스트 위주로 넣어서 운용이 됩니다.`,
  },
];

const FAQ = () => {
  const [ref, inView] = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <FAQSection ref={ref}>
      <Layout>
        <FAQTitle>FAQ</FAQTitle>
        <FAQAccordionWrap>
          {questions.map(({ title, body }, index) => {
            return <FAQAccordion header={title} body={body} eventKey={`${index}`} key={index} isView={inView} />;
          })}
        </FAQAccordionWrap>
      </Layout>
    </FAQSection>
  );
};

export default FAQ;

const FAQSection = styled.section`
  background-color: #1a1f27;
  margin-top: 160px;
  padding: 0 10px 140px 10px;

  @media (min-width: 1200px) {
    padding: 0 120px 160px 120px;
  }
`;

const FAQTitle = styled.p`
  padding-top: 60px;

  font-weight: 600;
  line-height: 1.14;
  color: #fff;
  font-size: 30px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 1280px) {
    font-size: 52px;
  }
  @media (min-width: 1920px) {
    font-size: 64px;
  }
`;

const FAQAccordionWrap = styled.div`
  margin-top: 65px;

  @media (min-width: 1200px) {
    margin-top: 61px;
  }
`;
