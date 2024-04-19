"use client";

import styled from "styled-components";
import { ILocale } from "./page";
import Projects from "../components/Projects";
import { getProject } from "@/app/projects";
import { Layout } from "../components/navigation";

export interface IMainProject {
  subTitle: string;
  moreBtn: string;
}
const Section = styled.section`
  margin-top: 80px;
  /* @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    margin-top: 0px;
  } */
`;

const sizeObj = {
  small: "705px * 705px",
  medium: "705px * 880px",
  large: "(PC) 1350px * 760px ,(Mobile) 1055px * 1318px",
};

const SectionProjects = ({ locale }: { locale: ILocale }) => {
  return (
    <Section>
      <Projects projects={getProject(locale).filter(({ isMainPortfolio }) => isMainPortfolio === true)} />
    </Section>
  );
};

export default SectionProjects;
