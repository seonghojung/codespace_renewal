"use client";

import { css, keyframes, styled } from "styled-components";
import { Layout } from "../components/navigation";
import Amazone from "./icon/logo_amazon_icon";
import Coinbase from "./icon/logo_coinbase_icon";
import Meta from "./icon/logo_meta_icon";
import Google from "./icon/logo_google_icon";
import Discover from "./icon/logo_discover_icon";
import Stripe from "./icon/logo_stripe_icon";
import CokaCola from "./icon/logo_cola_icon";
import Sony from "./icon/logo_sony_icon";
import Slack from "./icon/logo_slack_icon";
import Uber from "./icon/logo_uber_icon";

const Section = styled.section`
  @media (min-width: 768px) {
    margin-top: 76px;
  }
`;
const blurKeyframe = keyframes`
  0% {
    opacity: 1;
    filter: blur(0px);
  }
  5% {
    opacity: 0.5;
    filter: blur(10px);
  }
  10% {
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
`;

export const blur = css`
  animation: ${blurKeyframe} 10s ease infinite;
`;

const LogoItems = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 14px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 16px;
  }
`;
const LogoItem = styled.li`
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1), cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  &:nth-child(1),
  &:nth-child(5) {
    animation-delay: 3s;
  }
  &:nth-child(3),
  &:nth-child(9) {
    animation-delay: 21s;
  }
  &:nth-child(2),
  &:nth-child(6) {
    animation-delay: 8s;
  }
  &:nth-child(4),
  &:nth-child(8) {
    animation-delay: 18.5s;
  }
  &:nth-child(7) {
    animation-delay: 13s;
  }
  ${blur}
`;

const Logo = () => {
  return (
    <Section>
      <Layout>
        <LogoItems>
          <LogoItem>
            <Meta />
          </LogoItem>
          <LogoItem>
            <Google />
          </LogoItem>
          <LogoItem>
            <Discover />
          </LogoItem>
          <LogoItem>
            <Stripe />
          </LogoItem>
          <LogoItem>
            <CokaCola />
          </LogoItem>
          <LogoItem>
            <Coinbase />
          </LogoItem>
          <LogoItem>
            <Uber />
          </LogoItem>
          <LogoItem>
            <Sony />
          </LogoItem>
          <LogoItem>
            <Slack />
          </LogoItem>
          <LogoItem>
            <Amazone />
          </LogoItem>
        </LogoItems>
      </Layout>
    </Section>
  );
};
export default Logo;
