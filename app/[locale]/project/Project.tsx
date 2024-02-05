"use client";

import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Projects, { ProjectProps } from "../components/Projects";
import { Layout } from "../components/navigation";
import { VideoLayout } from "../(home)/MainBanner";
import { ILocale, ITranslation } from "../(home)/page";
import { useTranslations } from "next-intl";

interface IVideos {
  en: ProjectProps[];
  ko: ProjectProps[];
}
const allProjects: IVideos = {
  en: [
    {
      src: "thumbnail_kia",
      title: "KIA EV6 Unplugged",
      description: "KIA EV6 Unplugged Experience Center Introduction & Reservation Responsive Website",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
    },
    {
      src: "thumbnail_drFull",
      title: "Dr.full",
      description: "Companion Plant Management & Community Platform",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
    },
    {
      src: "thumbnail_ufo",
      title: "UFO Coffee",
      description: "Coffee Roasting Brand Website with CMS design",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
    },
    {
      src: "thumbnail_txt",
      title: "+X+",
      description: "Regional Daily Chat-base Community Platform",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Oct, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "TetherMax",
      description: "Cryptocurrency Futures Transaction Fee Payback Service",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
    },
    {
      src: "thumbnail_chartin",
      title: "Fuelaf",
      description: "Plant Encyclopedia & Curation Service",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
    },
    {
      src: "thumbnail_lichgo",
      title: "Richgo",
      description: "Real Estate Platform where Real Estate Information is updated in real time",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "Kick-off",
      description: "Global Outsourcing Matching Platform",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Aug, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Chart-in",
      description: "Music Platform that Matches Musicians with Experts",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "MarkHoly",
      description: "CTA-centered Responsive Website with Detailed Product Information ",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2023",
    },
    {
      src: "thumbnail_help",
      title: "Find Nomusa",
      description: "Labor Attorney Matching & Consulting Platform",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "AIRKID",
      description: "Air Kid, Helmet Designed for Kids, Introduction Responsive Website",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
    },
    {
      src: "thumbnail_doosil",
      title: "DOOSIL",
      description: "Real Estate Interior Brokerage O2O Platform",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "City Hoppers",
      description: "Travel Magazine & Community Platform",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "3.3 DESIGN SPACE",
      description: "Interior Company Introduction & Quote Responsive Website",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
    },
    {
      src: "thumbnail_nineark",
      title: "Nine Ark",
      description: "Kakao’s Mobile Game Developers Introduction Responsive Website",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
    },
    {
      src: "thumbnail_btbg",
      title: "BTBG",
      description: "Luxury Vehicle Export Company Introduction Responsive Website",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
    },
    {
      src: "thumbnail_chartin",
      title: "Second White",
      description: "Product Design Agency Introduction Responsive Website",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "Aware",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "Finance/Investment Journal Magazine Responsive Website",
      date: "Nov, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "Digital MBTI Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Digital New Way of Life MBTI Test",
      date: "Sep, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "Meta Character",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "Global Character Content Marketing Servive",
      date: "Nov, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "Ubiocean",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "Water Sports Companies Introduction Responsive Website based on Google Maps",
      date: "Aug, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "Invenconn",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "Inter-company Used Goods Trading Platform",
      date: "Jan, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "Aliquor Plus",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "Baking Class Online Lecture Platform",
      date: "Jul, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Beum",
      categories: ["Web", "App", "CMS", "Video"],
      description: "Online Lecture & Crowdfunding Platform",
      date: "Aug, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Gradation",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Visual Design Graduation Work Exhibition Responsive Website",
      date: "Dec, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Contents Garden",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "Online Magazine Subscription Responsive Web Publishing",
      date: "Jan, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Cell My Brain",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "Lawyers Matching Platform specialized for Property Rights",
      date: "Mar, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Aniverything",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "Animation Information Sharing Community Responsive Website",
      date: "Feb, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "Coreana Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Coreana Product Curation & MBTI Test",
      date: "Jan, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Industrial Design Graduation Work Exhibition Responsive Website",
      date: "Nov, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "IZE U VIDEO",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "Video Production Company Introduction Responsive Website",
      date: "Oct, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "nJobs",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "Recruitment Platform Specialized in IT industry",
      date: "Aug, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "Ahha Asset",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Asset Management Experts Introduction Responsive Website",
      date: "Nov, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "The Lead Law",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Law Firm Introduction Responsive Website",
      date: "Sep, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "Shortudy",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "Problem Solving & Editing Platform",
      date: "Sep, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "Refeed",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "BIO Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "Soom",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "Medical Device Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "The CI Mall",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "Inter Company Mall for Corporate Welfare Responsive Website",
      date: "Aug, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "The CI Group",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "CI Group Introduction Responsive Website",
      date: "Jun, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "Next Challenge",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "Global Accelerater Introduction Responsive Website",
      date: "May, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "Mitdembauhaus",
      categories: ["Web", "CMS", "Ecommerce", "B2B"],
      description: "Furniture & Lighting Company Imports from Germany Introduction & Purchasing Responsive Website",
      date: "Apr, 2019",
    },
  ],
  ko: [
    {
      src: "thumbnail_kia",
      title: "KIA EV6 언플러그드",
      description: "기아 EV6 언플러그드 체험관 소개 예약 반응형 웹",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
    },
    {
      src: "thumbnail_drFull",
      title: "풀박사",
      description: "반려식물 관리 및 커뮤니티 플랫폼",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
    },
    {
      src: "thumbnail_ufo",
      title: "UFO Coffee",
      description: "커피 로스팅 브랜드 쇼핑몰 및 CMS 설계",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
    },
    {
      src: "thumbnail_txt",
      title: "+X+",
      description: "지역간 데일리 채팅 기반 커뮤니티 플랫폼",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Oct, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "테더맥스",
      description: "코인 선물 거래수수료 페이백 서비스",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
    },
    {
      src: "thumbnail_chartin",
      title: "플립 [Fuelaf]",
      description: "식물 도감 및 큐레이션 서비스",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
    },
    {
      src: "thumbnail_lichgo",
      title: "리치고",
      description: "부동산 정보를 실시간 데이터로 확인할 수 있는 부동산데이터 플랫폼",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "킥오프",
      description: "글로벌 외주 매칭 플랫폼",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Aug, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "차트인",
      description: "뮤지션과 전문가를 매칭해주는 음악 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "마크홀리",
      description: "제품의 상세 내용을 확인할 수 있는 CTA 중심 반응형 웹",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2023",
    },
    {
      src: "thumbnail_help",
      title: "구해줘 노무사",
      description: "노무사 매칭 및 상담 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "AIRKID",
      description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹 ",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
    },
    {
      src: "thumbnail_doosil",
      title: "DOOSIL",
      description: "부동산 인테리어 중개 O2O 플랫폼",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "시티호퍼스",
      description: "여행 매거진 및 커뮤니티 플랫폼",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "3.3 DESIGN SPACE",
      description: "인테리어 회사 소개 및 견적 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
    },
    {
      src: "thumbnail_nineark",
      title: "나인아크",
      description: "카카오 산하 모바일 게임 개발사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
    },
    {
      src: "thumbnail_btbg",
      title: "BTBG",
      description: "고급 차량 수출 회사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
    },
    {
      src: "thumbnail_chartin",
      title: "세컨드 화이트",
      description: "프로덕트 디자인 에이전시 회사 소개 반응형 웹",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "어웨어",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "금융/투자 저널 매거진 반응형 웹",
      date: "Nov, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "디지털 갓생 살기",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "디지털 갓생 살기 MBTI 테스트",
      date: "Sep, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "메타 캐릭터",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "글로벌 캐릭터 콘텐츠 마케팅 서비스",
      date: "Nov, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "유비오션",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "구글맵 기반 수상 레저 업체 소개 반응형 웹",
      date: "Aug, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "인벤컨",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "기업간 중고 물품 거래 플랫폼",
      date: "Jan, 2022",
    },
    {
      src: "thumbnail_chartin",
      title: "올리커 플러스",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "베이킹 클래스 온라인 강의 플랫폼",
      date: "Jul, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "배움",
      categories: ["Web", "App", "CMS", "Video"],
      description: "온라인 강의 및 크라우드 펀딩 플랫폼",
      date: "Aug, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "그라데이션",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 시각디자인과 졸업 작품 전시 반응형 웹",
      date: "Dec, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "콘텐츠 가든",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "온라인 매거진 구독 반응형 웹 퍼블리싱",
      date: "Jan, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "셀 마이 브레인",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "지식재산권 관련 변호사 매칭 플랫폼",
      date: "Mar, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "애니브리띵",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "애니메이션 정보 공유 커뮤니티 반응형 웹",
      date: "Feb, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "코리아나 큐레이션",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "코리아나 제품 큐레이션 MBTI 테스트",
      date: "Jan, 2021",
    },
    {
      src: "thumbnail_chartin",
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 산업디자인과 학생들의 졸업 작품 전시 반응형 웹 **[Jennifer 번역 필요]**",
      date: "Nov, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "아이즈 유 비디오",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "영상 제작 회사 소개 반응형 웹",
      date: "Oct, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "엔잡스",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "IT 분야 특화 채용 플랫폼",
      date: "Aug, 2020",
    },
    {
      src: "thumbnail_chartin",
      title: "아하 에셋 자산운용",
      categories: ["Web", "CMS", "Enterprise"],
      description: "자산운용사의 소개 반응형 웹",
      date: "Nov, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "더 리드 법률사무소",
      categories: ["Web", "CMS", "Enterprise"],
      description: "법무법인의 소개 반응형 웹",
      date: "Sep, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "숏터디",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "시험 문제 풀이 및 첨삭 플랫폼",
      date: "Sep, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "뤼피드",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "바이오 회사 소개 반응형 웹",
      date: "Jul, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "숨",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "의료기기 회사 소개 반응형 웹",
      date: "Jul, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "씨아이 그룹 자사몰",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "기업 내부 복지를 위한 자사몰 반응형 웹",
      date: "Aug, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "씨아이 그룹 자사웹",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "씨아이 그룹 소개 반응형 웹",
      date: "Jun, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "넥스트 챌린지",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "글로벌 액셀러레이터 소개 반응형 웹",
      date: "May, 2019",
    },
    {
      src: "thumbnail_chartin",
      title: "미뗌바우하우스",
      categories: ["Web", "CMS", "Ecommerce", "B2B"],
      description: "독일 직수입 조명 가구 소개 및 판매 반응형 웹",
      date: "Apr, 2019",
    },
  ],
};
const getVideos = (locale: string): ProjectProps[] => {
  if (locale === "en") return allProjects.en;
  if (locale === "ko") return allProjects.ko;
  return allProjects.en;
};
const Project = ({ locale, translation }: { locale: ILocale; translation: ITranslation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortedProjects, setSortedProjects] = useState<ProjectProps[]>(getVideos(locale));

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "" || category === "Management") {
      return setSortedProjects(getVideos(locale));
    }
    setSortedProjects(getVideos(locale).filter((project) => project.categories.includes(category)));
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
