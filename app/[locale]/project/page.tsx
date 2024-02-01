"use client";

import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Projects, { ProjectProps } from "../components/Projects";
import { Layout } from "../components/navigation";
import { VideoLayout } from "../(home)/MainBanner";

const allProjects: ProjectProps[] = [
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "KIA EV6 언플러그드",
    description: "기아 EV6 언플러그드 체험관 소개 예약 반응형 웹",
    categories: ["UI/UX", "Web", "Enterprise"],
    date: "Aug. 2022",
  },
  {
    src: "/videos/thumbnail_drFull.mp4",
    title: "풀박사",
    description: "반려식물 관리 및 커뮤니티 플랫폼",
    categories: ["UI/UX", "Web", "App", "Community"],
    date: "Oct, 2023",
  },
  {
    src: "/videos/thumbnail_ufo.mp4",
    title: "UFO Coffee",
    description: "커피 로스팅 브랜드 쇼핑몰 및 CMS 설계",
    categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
    date: "Jul, 2023",
  },
  {
    src: "/videos/thumbnail_txt.mp4",
    title: "+X+",
    description: "지역간 데일리 채팅 기반 커뮤니티 플랫폼",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Oct, 2020",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "테더맥스 [TetherMax]",
    description: "코인 선물 거래수수료 페이백 서비스",
    categories: ["Web", "CMS", "Fintech"],
    date: "Dec, 2023",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "플립 [Fuelaf]",
    description: "식물 도감 및 큐레이션 서비스",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Dec, 2021",
  },
  {
    src: "/videos/thumbnail_lichgo.mp4",
    title: "리치고",
    description: "부동산 정보를 실시간 데이터로 확인할 수 있는 부동산데이터 플랫폼",
    categories: ["UI/UX", "App", "O2O"],
    date: "Apr. 2020",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "킥오프",
    description: "글로벌 외주 매칭 플랫폼",
    categories: ["UI/UX", "Web", "CMS", "Startup"],
    date: "Aug, 2021",
  },
  {
    src: "/videos/thumbnail_chartin.mp4",
    title: "차트인",
    description: "뮤지션과 전문가를 매칭해주는 음악 플랫폼",
    categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
    date: "Feb, 2022",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "마크홀리",
    description: "제품의 상세 내용을 확인할 수 있는 CTA 중심 반응형 웹",
    categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
    date: "Dec, 2023",
  },
  {
    src: "/videos/thumbnail_help.mp4",
    title: "구해줘 노무사",
    description: "노무사 매칭 및 상담 플랫폼",
    categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
    date: "Dec, 2022",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "AIRKID",
    description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹 ",
    categories: ["UI/UX", "Web", "3D", "Enterprise"],
    date: "Jul, 2020",
  },
  {
    src: "/videos/thumbnail_doosil.mp4",
    title: "DOOSIL",
    description: "부동산 인테리어 중개 O2O 플랫폼",
    categories: ["UI/UX", "Web", "App", "O2O"],
    date: "Aug, 2022",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "시티호퍼스",
    description: "여행 매거진 및 커뮤니티 플랫폼",
    categories: ["Web", "CMS", "Magazine", "O2O"],
    date: "Jun, 2022",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "3.3 DESIGN SPACE",
    description: "인테리어 회사 소개 및 견적 반응형 웹",
    categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
    date: "Apr, 2021",
  },
  {
    src: "/videos/thumbnail_nineark.mp4",
    title: "나인아크",
    description: "카카오 산하 모바일 게임 개발사 소개 반응형 웹",
    categories: ["UI/UX", "Web", "Publishing"],
    date: "Apr, 2021",
  },
  {
    src: "/videos/thumbnail_btbg.mp4",
    title: "BTBG",
    description: "고급 차량 수출 회사 소개 반응형 웹",
    categories: ["UI/UX", "Web", "CMS", "Enterprise"],
    date: "Apr, 2023",
  },
  {
    src: "/videos/thumbnail_kia.mp4",
    title: "세컨드 화이트",
    description: "프로덕트 디자인 에이전시 회사 소개 반응형 웹",
    categories: ["Web", "CMS", "Enterprise"],
    date: "Dec, 2020",
  },
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProjects, setSortedProjects] = useState<ProjectProps[]>(allProjects);
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "" || category === "Management") {
      return setSortedProjects(allProjects);
    }
    setSortedProjects(allProjects.filter((project) => project.categories.includes(category)));
  };

  return (
    <ProjectWrap>
      <Layout>
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
      <VideoLayout>
        <Projects projects={sortedProjects} />
      </VideoLayout>
    </ProjectWrap>
  );
};

export default Project;

const ProjectWrap = styled.section``;
const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 19px 0 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
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
