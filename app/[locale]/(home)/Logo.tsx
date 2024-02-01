"use client";

import { styled } from "styled-components";
import { Layout } from "../components/navigation";
import LogoMetaIcon from "./icon/LogoMetaIcon";
import LogoGoogleIcon from "./icon/LogoGoogleIcon";
import LogoDiscoverIcon from "./icon/LogoDiscoverIcon";
import LogoStripeIcon from "./icon/LogoStripeIcon";
import LogoColaIcon from "./icon/LogoColaIcon";
import LogoCoinbaseIcon from "./icon/LogoCoinbaseIcon";
import LogoUberIcon from "./icon/LogoUberIcon";
import LogoSonyIcon from "./icon/LogoSonyIcon";
import LogoSlackIcon from "./icon/LogoSlackIcon";
import LogoAmazonIcon from "./icon/LogoAmazonIcon";

const Section = styled.section``;
const LogoItems = styled.ul``;
const LogoItem = styled.li``;

const Logos = [
  LogoMetaIcon,
  LogoGoogleIcon,
  LogoDiscoverIcon,
  LogoStripeIcon,
  LogoColaIcon,
  LogoCoinbaseIcon,
  LogoUberIcon,
  LogoSonyIcon,
  LogoSlackIcon,
  LogoAmazonIcon,
];

const Logo = () => {
  return (
    <Section>
      <Layout>
        <LogoItems>
          {Logos.map((logo, index) => {
            return <LogoItem key={index}>{logo({})}</LogoItem>;
          })}
        </LogoItems>
      </Layout>
    </Section>
  );
};
export default Logo;
