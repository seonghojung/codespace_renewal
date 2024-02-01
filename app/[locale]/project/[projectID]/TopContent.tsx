"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.5;
  word-break: keep-all;
  @media (min-width: 768px) {
    font-size: 46px;
    max-width: 500px;
    line-height: 1.22;
  }
`;
export const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
  word-break: keep-all;
  line-height: 1.7;
  @media (min-width: 768px) {
    max-width: 760px;
    line-height: 1.62;
  }
`;
const Container = styled.section`
  padding-top: 52px;
  padding-bottom: 40px;
  border-bottom: 1px solid #bfbfbf;
`;

const ImageContainer = styled.div`
  margin-top: 60px;
  background-color: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 1.3;
`;

const TopContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <Layout>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageContainer></ImageContainer>
      </Container>
    </Layout>
  );
};
export default TopContent;
