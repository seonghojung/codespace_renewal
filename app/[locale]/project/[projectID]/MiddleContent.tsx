"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import NextImage from "next/image";
import { Title, Description } from "./TopContent";

const Container = styled.section`
  padding-top: 52px;
  padding-bottom: 40px;
  border-bottom: 1px solid #bfbfbf;

  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 40px;
  background-color: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 0.75;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
export const ImageStyle = styled(NextImage)`
  width: 100%;
  height: 100%;
  display: block;
`;
const ImageWrap = styled.div`
  display: block;
  @media (min-width: 768px) {
    margin-top: 60px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubContent = ({ title, description, images }: { title: string; description: string; images: string[] }) => {
  return (
    <Layout>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageWrap>
          <ImageContainer>
            <ImageStyle src={images[0]} alt="" width={583} height={777} />
          </ImageContainer>
          <ImageContainer>
            <ImageStyle src={images[1]} alt="" width={583} height={777} />
          </ImageContainer>
          <ImageContainer>
            <ImageStyle src={images[2]} alt="" width={583} height={777} />
          </ImageContainer>
          <ImageContainer>
            <ImageStyle src={images[3]} alt="" width={583} height={777} />
          </ImageContainer>
        </ImageWrap>
      </Container>
    </Layout>
  );
};

export default SubContent;
