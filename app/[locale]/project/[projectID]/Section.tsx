"use client";
import { styled } from "styled-components";

const Container = styled.section`
  padding-top: 124px;
  @media (min-width: 768px) {
    padding-top: 170px;
  }
  @media (min-width: 1280px) {
    padding-top: 256px;
  }
  @media (min-width: 1920px) {
    padding-top: 300px;
  }
`;
export default Container;
