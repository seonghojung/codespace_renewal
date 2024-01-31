"use client";

import { useRef, useState } from "react";
import { styled } from "styled-components";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <ProjectWrap>
      <NavWrap>
        <ProjectTitle>
          프로덕트 마켓 핏을
          <br />
          코드스페이스에서 만들어보세요
        </ProjectTitle>
        <CategoryListWrap>
          <CategoryList onClick={() => filterByCategory("")} selected={selectedCategory === ""}>
            <h2>ALL</h2>
          </CategoryList>
          <CategoryList onClick={() => filterByCategory("Management")} selected={selectedCategory === "Management"}>
            <h2>MANAGEMENT</h2>
          </CategoryList>
          <CategoryList onClick={() => filterByCategory("Websites")} selected={selectedCategory === "Websites"}>
            <h2>WEBSITES</h2>
          </CategoryList>
          <CategoryList onClick={() => filterByCategory("UIUX")} selected={selectedCategory === "UIUX"}>
            <h2>UI/UX</h2>
          </CategoryList>
          <CategoryList onClick={() => filterByCategory("Application")} selected={selectedCategory === "Application"}>
            <h2>APPLICATION</h2>
          </CategoryList>
          <CategoryList onClick={() => filterByCategory("CMSSolution")} selected={selectedCategory === "CMSSolution"}>
            <h2>CMS SOLUTION</h2>
          </CategoryList>
        </CategoryListWrap>
      </NavWrap>
      <CardBox></CardBox>
    </ProjectWrap>
  );
};

export default Project;

const ProjectWrap = styled.section`
  margin: 20px 0 170px;
  @media (min-width: 1200px) {
    margin: 40px 120px 160px 120px;
  }
`;
const NavWrap = styled.div`
  margin: 0 19px 0 10px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.36;
  color: #000;

  @media (min-width: 1200px) {
    font-size: 42px;
    line-height: 1.14;
  }
`;

const CategoryListWrap = styled.ul`
  margin-top: 34px;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 1200px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 16px;
  }
`;

const CategoryList = styled.li<{ selected: boolean }>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.selected ? "#000" : "rgba(0, 0, 0, 0.4)")};
  &:not(:first-child, :nth-child(5)) {
    margin-left: 16px;
  }

  &:nth-child(5),
  &:nth-child(6) {
    margin-top: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 28px;

    &:not(:nth-child(5)) {
      margin-left: 0;
    }
    &:not(:first-child) {
      margin-left: 0;
    }

    &:nth-child(5),
    &:nth-child(6) {
      margin-top: 0;
    }
  }
`;

const CardBox = styled.div`
  margin-top: 100px;
  @media (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const CardWrap = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    margin-left: 20px;
    &:not(:first-child) {
      margin-top: 100px;
    }
  }
`;
