"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Projects from "../components/Projects";
import { Layout } from "../components/navigation";
import { VideoLayout } from "../(home)/MainBanner";
import { ILocale, ITranslation } from "../(home)/page";
import { ProjectProps, getProject } from "@/app/projects";

const Project = ({ locale, translation }: { locale: ILocale; translation: ITranslation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProjects, setSortedProjects] = useState<ProjectProps[]>(getProject(locale));

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "" || category === "Management") {
      return setSortedProjects(getProject(locale));
    }
    setSortedProjects(getProject(locale).filter((project) => project.categories.includes(category)));
  };

  return (
    <ProjectWrap>
      <Layout>
        <NavWrap>
          <ProjectTitle>{translation.title}</ProjectTitle>
          <CategoryListWrap>
            <CategoryList onClick={() => filterByCategory("")} selected={selectedCategory === ""}>
              <h2>ALL</h2>
            </CategoryList>
            <CategoryList onClick={() => filterByCategory("Management")} selected={selectedCategory === "Management"}>
              <h2>MANAGEMENT</h2>
            </CategoryList>
            <CategoryList onClick={() => filterByCategory("Web")} selected={selectedCategory === "Web"}>
              <h2>WEBSITES</h2>
            </CategoryList>
            <CategoryList onClick={() => filterByCategory("UI/UX")} selected={selectedCategory === "UI/UX"}>
              <h2>UI/UX</h2>
            </CategoryList>
            <CategoryList onClick={() => filterByCategory("App")} selected={selectedCategory === "App"}>
              <h2>APPLICATION</h2>
            </CategoryList>
            <CategoryList onClick={() => filterByCategory("CMS")} selected={selectedCategory === "CMS"}>
              <h2>CMS SOLUTION</h2>
            </CategoryList>
          </CategoryListWrap>
        </NavWrap>
      </Layout>
      <VideoLayout>{/* <Projects projects={sortedProjects} /> */}</VideoLayout>
    </ProjectWrap>
  );
};

export default Project;

const ProjectWrap = styled.section`
  padding-top: 20px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
const NavWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectTitle = styled.h1`
  width: auto;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.36;
  color: #000;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 1.14;
  }
`;

const CategoryListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 157px;
  padding-top: 8px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const CategoryList = styled.li<{ selected: boolean }>`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#000" : "rgba(0, 0, 0, 0.4)")};
`;
