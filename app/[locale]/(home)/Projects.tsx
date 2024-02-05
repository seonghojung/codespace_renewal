"use client";

import styled from "styled-components";
import { Layout } from "../components/navigation";
import Projects, { ProjectProps } from "../components/Projects";
import { VideoLayout } from "./MainBanner";
import { ILocale } from "./page";

export interface IMainProject {
  subTitle: string;
  moreBtn: string;
}

const Section = styled.section`
  margin-top: 120px;
`;
interface IVideos {
  en: ProjectProps[];
  ko: ProjectProps[];
}
const videos: IVideos = {
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
  ],
};
const getVideos = (locale: string): ProjectProps[] => {
  if (locale === "en") return videos.en;
  if (locale === "ko") return videos.ko;
  return videos.en;
};
const SectionProjects = ({ locale }: { locale: ILocale }) => {
  return (
    <Section>
      <VideoLayout>
        <Projects projects={getVideos(locale)} />
      </VideoLayout>
    </Section>
  );
};

export default SectionProjects;
