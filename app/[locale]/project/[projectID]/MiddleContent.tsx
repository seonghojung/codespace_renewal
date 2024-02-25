"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import NextImage from "next/image";
import { Title, Description } from "./TopContent";

const ImageContainer = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 120px auto 0;
  }
  @media (min-width: 1920px) {
    max-width: 1536px;
    margin: 160px auto 0;
  }
`;

export const LargeImgWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 375/468;
  @media (min-width: 768px) {
    aspect-ratio: 688/390;
  }
`;

export const LargeImg = styled(NextImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
    gap: 20px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    gap: 60px;
  }
  @media (min-width: 1920px) {
    margin-top: 80px;
    gap: 80px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  aspect-ratio: 375/468;
  @media (min-width: 768px) {
    margin-top: 0px;
    aspect-ratio: 334/390;
  }
`;

const Img = styled(NextImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
  }
  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`;

const SubContent = ({ title, description, images }: { title: string; description: string; images: string[] }) => {
  return (
    <>
      <ImageContainer>
        <LargeImgWrap>
          <LargeImg src={images[0]} alt="" fill />
        </LargeImgWrap>
        <Wrap>
          <ImgWrap>
            <Img src={images[1]} alt="" fill />
          </ImgWrap>
          <ImgWrap>
            <Img src={images[2]} alt="" fill />
          </ImgWrap>
        </Wrap>
      </ImageContainer>
      <Layout>
        <Container>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Container>
      </Layout>
    </>
  );
};

export default SubContent;
