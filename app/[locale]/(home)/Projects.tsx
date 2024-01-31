"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import Projects, { ProjectProps } from "../components/Projects";

export interface IMainProject {
  subTitle: string;
  moreBtn: string;
}

const Section = styled.section`
  margin-top: 160px;
`;

const videos: ProjectProps[] = [
  {
    src: "/images/nineArk.mp4",
    title: "테더맥스 [TetherMax]",
    description: "코인 선물 거래수수료 페이백 서비스",
    categories: ["Web", "CMS", "Fintech"],
    date: "Dec, 2023",
  },
  {
    src: "/images/nineArk.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
  {
    src: "/images/nineArk.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
  {
    src: "/images/nineArk.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
  {
    src: "/images/nineArk.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
  {
    src: "/images/nineArk.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
];

const SectionProjects = () => {
  return (
    <Section>
      <Layout>
        <Projects projects={videos} />
      </Layout>
    </Section>
  );
};

export default SectionProjects;
