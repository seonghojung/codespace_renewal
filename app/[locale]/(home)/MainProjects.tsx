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
  margin-top: 120px;
`;

const SectionProjects = ({ locale }: { locale: ILocale }) => {
  return (
    <Section>
      <Projects projects={getProject(locale).filter(({ isMainPortfolio }) => isMainPortfolio === true)} />
    </Section>
  );
};

export default SectionProjects;
