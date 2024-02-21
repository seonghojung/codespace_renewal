"use client";

import styled from "styled-components";
import { VideoLayout } from "./MainBanner";
import { ILocale } from "./page";

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
      <VideoLayout>{/* <Projects projects={getVideos(locale)} /> */}</VideoLayout>
    </Section>
  );
};

export default SectionProjects;
