"use client";

import styled from "styled-components";
import { LargeImg, LargeImgWrap } from "./MiddleContent";

const Container = styled.article`
  margin-top: 80px;

  @media (min-width: 768px) {
    margin: 100px 40px 80px;
  }
  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 120px auto 100px;
  }
  @media (min-width: 1920px) {
    max-width: 1536px;
    margin: 160px auto 100px;
  }
`;

const BottomContent = ({ images }: { images: string[] }) => {
  return (
    <Container>
      <LargeImgWrap>
        <LargeImg src={images[0]} alt="" fill />
      </LargeImgWrap>
    </Container>
  );
};

export default BottomContent;
