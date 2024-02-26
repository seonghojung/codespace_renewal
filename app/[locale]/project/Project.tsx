"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Projects from "../components/Projects";
import { Layout } from "../components/navigation";
import { VideoLayout } from "../(home)/MainBanner";
import { ILocale, ITranslation } from "../(home)/page";
import { APP_ORDER, CMS_ORDER, ProjectProps, UIUX_ORDER, WEB_ORDER, getProject } from "@/app/projects";

const SelectDot = styled.span`
  content: "";
  position: absolute;
  display: block;
  left: -8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #050411;
`;

const CategoryCount = styled.span`
  margin-left: 4px;
  top: -1px;
  font-size: 12px;
  line-height: 12px;
  position: relative;
  display: inline;
  @media (min-width: 1280px) {
    top: -8px;
  }
`;
type ICategory = "" | "Web" | "UI/UX" | "App" | "CMS";
const Project = ({ locale, translation }: { locale: ILocale; translation: ITranslation }) => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>("");
  const [sortedProjects, setSortedProjects] = useState<ProjectProps[]>(getProject(locale));

  const filterByCategory = (category: ICategory) => {
    setSelectedCategory(category);
    if (category === "") {
      return setSortedProjects(getProject(locale));
    } else if (category === "App") {
      setSortedProjects(APP_ORDER.map((targetId) => getProject(locale).find(({ id }) => id === targetId)) as ProjectProps[]);
    } else if (category === "CMS") {
      setSortedProjects(CMS_ORDER.map((targetId) => getProject(locale).find(({ id }) => id === targetId)) as ProjectProps[]);
    } else if (category === "UI/UX") {
      setSortedProjects(UIUX_ORDER.map((targetId) => getProject(locale).find(({ id }) => id === targetId)) as ProjectProps[]);
    } else if (category === "Web") {
      setSortedProjects(WEB_ORDER.map((targetId) => getProject(locale).find(({ id }) => id === targetId)) as ProjectProps[]);
    }
  };

  return (
    <PageLayout>
      <ProjectWrap>
        <Layout>
          <NavWrap>
            <ProjectTitle>{translation.title}</ProjectTitle>
            <CategoryListWrap>
              <CategoryList onClick={() => filterByCategory("")} selected={selectedCategory === ""}>
                {selectedCategory === "" && <SelectDot />}
                <h2>
                  ALL<CategoryCount>{getProject(locale).length}</CategoryCount>
                </h2>
              </CategoryList>
              <CategoryList onClick={() => filterByCategory("Web")} selected={selectedCategory === "Web"}>
                {selectedCategory === "Web" && <SelectDot />}
                <h2>
                  WEB
                  <CategoryCount>{WEB_ORDER.length}</CategoryCount>
                </h2>
              </CategoryList>
              <CategoryList onClick={() => filterByCategory("App")} selected={selectedCategory === "App"}>
                {selectedCategory === "App" && <SelectDot />}
                <h2>
                  APP<CategoryCount>{APP_ORDER.length}</CategoryCount>
                </h2>
              </CategoryList>
              <CategoryList onClick={() => filterByCategory("CMS")} selected={selectedCategory === "CMS"}>
                {selectedCategory === "CMS" && <SelectDot />}
                <h2>
                  CMS SOLUTION
                  <CategoryCount>{CMS_ORDER.length}</CategoryCount>
                </h2>
              </CategoryList>
              <CategoryList onClick={() => filterByCategory("UI/UX")} selected={selectedCategory === "UI/UX"}>
                {selectedCategory === "UI/UX" && <SelectDot />}
                <h2>
                  UI/UX<CategoryCount>{UIUX_ORDER.length}</CategoryCount>
                </h2>
              </CategoryList>
            </CategoryListWrap>
          </NavWrap>
        </Layout>
        <ProjectsWrap>
          <VideoLayout>
            <Projects projects={sortedProjects} />
          </VideoLayout>
        </ProjectsWrap>
      </ProjectWrap>
    </PageLayout>
  );
};

export default Project;
const ProjectsWrap = styled.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 90px;
  }
  @media (min-width: 1920px) {
    margin-top: 100px;
  }
`;
export const PageLayout = styled.section`
  min-height: calc(100vh - 533.16px);
  padding-top: 64px;
  @media (min-width: 768px) {
    min-height: calc(100vh - 414.38px);
    padding-top: 90px;
  }
  @media (min-width: 1280px) {
    min-height: calc(100vh - 422.94px);
    padding-top: 110px;
  }
  @media (min-width: 1920px) {
    min-height: calc(100vh - 442.97px);
  }
`;

const ProjectWrap = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 1280px) {
    padding-top: 146px;
    padding-bottom: 100px;
  }
  @media (min-width: 1920px) {
    padding-top: 190px;
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
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -2.6%;
  color: #000;
  word-break: keep-all;

  @media (min-width: 768px) {
    width: 395px;
    line-height: 57.2px;
    font-size: 52px;
  }
  @media (min-width: 1280px) {
    width: 560px;
    line-height: 81.4px;
    font-size: 74px;
  }
  @media (min-width: 1920px) {
    width: auto;
    line-height: 95px;
    font-size: 86px;
    letter-spacing: -3.44%;
  }
`;

const CategoryListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: auto;
  text-transform: capitalize;
  gap: 8px;
  margin-top: 80px; //TODO: 필터영역 모바일 디자인잡히면 삭제
  @media (min-width: 768px) {
    margin-top: 0px; //TODO: 필터영역 모바일 디자인잡히면 삭제
  }
  @media (min-width: 1280px) {
    gap: 10px;
  }
`;

const CategoryList = styled.li<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => (props.selected ? "#000" : "#637695")};
  position: relative;

  // TODO: 375디자인이 안잡혀있음
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }
  @media (min-width: 1280px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }

  &:hover {
    opacity: ${(props) => !props.selected && 0.7};
  }
`;
