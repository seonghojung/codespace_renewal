"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import { ImageStyle } from "./MiddleContent";
import { Title, Description } from "./TopContent";

const Container = styled.section`
  padding-top: 52px;
  padding-bottom: 40px;
  border-bottom: 1px solid #bfbfbf;
`;

const BasicContainer = styled.div`
  margin-top: 40px;
  background-color: #d9d9d9;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const ImageContainerB = styled(BasicContainer)`
  aspect-ratio: 0.75;
`;

const ImageContainerA = styled(BasicContainer)`
  aspect-ratio: 1.63;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

const ImageWrap = styled.div`
  display: block;
  @media (min-width: 768px) {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const BottomContent = ({ title, description, images }: { title: string; description: string; images: string[] }) => {
  return (
    <Layout>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageContainerA>
          <ImageStyle alt="" src={images[0]} width={1200} height={902} />
        </ImageContainerA>
        <ImageWrap>
          <ImageContainerB>
            <ImageStyle alt="" src={images[1]} width={583} height={777} />
          </ImageContainerB>
          <ImageContainerB>
            <ImageStyle alt="" src={images[2]} width={583} height={777} />
          </ImageContainerB>
        </ImageWrap>
      </Container>
      <BottomSection />
    </Layout>
  );
};

const BottomSection = styled.div`
  padding-bottom: 120px;
  @media (min-width: 768px) {
    padding-bottom: 160px;
  }
`;

export default BottomContent;
