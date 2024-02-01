"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";

const Background = styled.section`
  background-color: #d9d9d9;
  height: 460px;
`;
const InfoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 40px;
  @media (min-width: 768px) {
  }
`;
const Title = styled.h1`
  font-size: 32px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 1.1;
  }
`;
const Date = styled.span`
  font-size: 16px;
`;
const Banner = ({ title, date }: { title: string; date: string }) => {
  return (
    <Background>
      <InfoWrap>
        <Layout>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Layout>
      </InfoWrap>
    </Background>
  );
};
export default Banner;
