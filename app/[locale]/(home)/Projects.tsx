"use client";

import styled from "styled-components";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/app/[locale]/components/ProjectCard";
import { Layout } from "../components/navigation";

export interface IMainProject {
  subTitle: string;
  moreBtn: string;
}

const Section = styled.section`
  margin-top: 160px;
`;

const SubContentBox = styled.div`
  margin-top: 160px;
`;

const SubProjectsWrap = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    &:not(:first-child) {
      margin-top: 100px;
    }
  }
`;
// Web Design Enterprise Development
const videos = [
  {
    src: "/images/nineArk.mp4",
    title: "PROJECT NAME",
    description: "부동산 데이터 소팅 및 사용자 인터페이스 설계",
    cateogries: ["Web Design", "Enterprise", "Development"],
  },
  {
    src: "/images/nineArk.mp4",
    title: "PROJECT NAME",
    description: "부동산 데이터 소팅 및 사용자 인터페이스 설계",
    cateogries: ["Web Design", "Enterprise", "Development"],
  },
  {
    src: "/images/nineArk.mp4",
    title: "PROJECT NAME",
    description: "부동산 데이터 소팅 및 사용자 인터페이스 설계",
    cateogries: ["Web Design", "Enterprise", "Development"],
  },
  {
    src: "/images/nineArk.mp4",
    title: "PROJECT NAME",
    description: "부동산 데이터 소팅 및 사용자 인터페이스 설계",
    cateogries: ["Web Design", "Enterprise", "Development"],
  },
];

const SectionProjects = () => {
  return (
    <Section>
      <Layout>
        <SubContentBox>
          <SubProjectsWrap style={{ gap: 100 }}>
            <div style={{ flex: 1, paddingTop: 100 }}>
              <ProjectCard src={videos[0]} />
            </div>
            <div style={{ flex: 1.5 }}>
              <ProjectCard src={videos[1]} />
            </div>
          </SubProjectsWrap>
          <SubProjectsWrap>
            <div style={{ flex: 0.8 }}>
              <ProjectCard src={videos[2]} />
            </div>
          </SubProjectsWrap>
          <SubProjectsWrap style={{ gap: 100 }}>
            <div style={{ flex: 1.5 }}>
              <ProjectCard src={videos[3]} />
            </div>
            <div style={{ flex: 1, paddingTop: 100 }}>
              <ProjectCard src={videos[3]} />
            </div>
          </SubProjectsWrap>
          <SubProjectsWrap style={{ justifyContent: "end" }}>
            <div style={{ flex: 0.9 }}>
              <ProjectCard src={videos[2]} />
            </div>
          </SubProjectsWrap>
        </SubContentBox>
      </Layout>
    </Section>
  );
};

export default SectionProjects;
