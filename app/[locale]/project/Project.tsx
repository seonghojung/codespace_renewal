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
    // KIA EV6 Unplugged
    {
      src: "thumbnail_kia",
      title: "KIA EV6 Unplugged",
      description: "KIA EV6 Unplugged Experience Center Introduction & Reservation Responsive Website",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
      // TODO: images
      details: {
        titles: [
          "Effectively deliver product information and focus on test drive reservation services",
          "Ensuring the product's visuals are well-suited for the digital environment",
          "Anytime, anywhere on your phone",
        ],
        descriptions: [
          "The Kia Unplugged EV6 project has been designed as a responsive website to introduce offline facilities where customers can test drive and experience the vehicle firsthand at each location. The design and planning were carried out to accurately inform customers not only about the details of newly released vehicles but also to convey information from an experiential perspective, including test drive reservations and courses.",
          "The EV6's electric category seamlessly integrates into eco, style, and trend elements, creating images that naturally blend and consider the customer's perspective to depict the satisfaction they can envision when making a purchase.",
          "The design emphasizes the proper communication of the planning direction to customers in the mobile environment, ensuring that the identity of the product is well conveyed through the positioning and arrangement of assets. Various courses, events, and ongoing activities are integrated to showcase a dynamic and engaging presentation, ensuring the essence of the product is effectively captured in the mobile environment compared to the PC setting.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Dr.full
    {
      src: "thumbnail_drFull",
      title: "Dr.full",
      description: "Companion Plant Management & Community Platform",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
      // TODO: images
      details: {
        titles: [
          "**A plant community where we grow together Plant Doctor",
          "Expanding beyond a simple community to encompass O2O integration",
          "Ensuring accurate weather information is delivered to the customers",
        ],
        descriptions: [
          "Plant Doctor goes beyond individual plant care, unlike existing platforms. It is a plant community platform where people share their plants and explore information under the same local weather conditions. We understood the business structure of existing plant platforms, developed a business model suitable for the current market, and proceeded with the beta service design, planning, and development accordingly.",
          "Plant Doctor goes beyond exchanging information on plant care to suggest products for better growth, taking into account sales items and local weather conditions. We considered extending the design and planning to the O2O realm, where users can encounter even better information.",
          "The key focus of this development was to provide accurate weather information for users residing in different locations. Weather was identified as a crucial development element to optimize convenience and increase revisit rates by delivering a consistent service without delays or errors in weather updates.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // UFO Coffee
    {
      src: "thumbnail_ufo",
      title: "UFO Coffee",
      description: "Coffee Roasting Brand Website with CMS design",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // +X+
    {
      src: "thumbnail_txt",
      title: "+X+",
      description: "Regional Daily Chat-base Community Platform",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Oct, 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // TetherMax
    {
      src: "thumbnail_chartin",
      title: "TetherMax",
      description: "Cryptocurrency Futures Transaction Fee Payback Service",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: [
          "TetherMax, a commission reward platform where users share transaction benefits",
          "Highlighting participating users and achieving goals for a visible rewards system.",
          "System for comprehensive customer management",
        ],
        descriptions: [
          "TetherMax is a platform that rewards users in the form of commissions for the frequent cryptocurrency transactions they engage in. It is designed to provide users with useful information and experience the benefits of rewards while conducting transactions.",
          "The advantage of transaction fees is that they offer more benefits when multiple users participate compared to one participant. The wow factor in this design focuses on convenience by displaying information in a way that builds trust among users and encourages active participation, ensuring that more benefits can be gained through collaboration.",
          "The system is designed to allow administrators to accurately analyze customer actions from the moment they choose a cryptocurrency exchange, proceed with authentication and payment, and receive rewards. This involves simultaneous development of both front-end and back-end components, with consideration for maintenance-oriented management functions, ensuring seamless business benefits continuation.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Fuleaf
    {
      src: "thumbnail_chartin",
      title: "Fuleaf",
      description: "Plant Encyclopedia & Curation Service",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
      // TODO: images
      details: {
        titles: ["Easy plant care with Fuleaf Plant platform", "A space where diverse magazines and stories can coexist", "To enable expansion with more services"],
        descriptions: [
          "Fuleaf is a comprehensive plant platform starting with a fast and accurate plant search platform that provides information for anyone curious about plant care. It expands into a B2B, B2C integrated plant platform where various plant-related products can be purchased.",
          "Beyond searching for a plant encyclopedia, Fuleaf goes further by collaborating with affiliated writers to share content in a magazine format. The design and planning were centered around allowing users to subscribe and continuously enjoy their plant life, and development was carried out based on this concept.",
          "To create a community and market within the platform, catering to plant enthusiasts, we comprehensively reviewed various IA scenarios in different situations on the information-providing platform. This approach ensures that when development continues in the future, diverse sub-objects can be seamlessly integrated to make the product even more robust.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Richgo
    {
      src: "thumbnail_lichgo",
      title: "Richgo",
      description: "Real Estate Platform where Real Estate Information is updated in real time",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Kick-off
    {
      src: "thumbnail_chartin",
      title: "Kick-off",
      description: "Global Outsourcing Matching Platform",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Aug, 2021",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Chart-in
    {
      src: "thumbnail_chartin",
      title: "Chart-in",
      description: "Music Platform that Matches Musicians with Experts",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // MarkHoly
    {
      src: "thumbnail_chartin",
      title: "MarkHoly",
      description: "CTA-centered Responsive Website with Detailed Product Information ",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Find Nomusa
    {
      src: "thumbnail_help",
      title: "Find Nomusa",
      description: "Labor Attorney Matching & Consulting Platform",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2022",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // AIRKID
    {
      src: "thumbnail_chartin",
      title: "AIRKID",
      description: "Air Kid, Helmet Designed for Kids, Introduction Responsive Website",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // DOOSIL
    {
      src: "thumbnail_doosil",
      title: "DOOSIL",
      description: "Real Estate Interior Brokerage O2O Platform",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // City Hoppers
    {
      src: "thumbnail_chartin",
      title: "City Hoppers",
      description: "Travel Magazine & Community Platform",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
      src: "thumbnail_chartin",
      title: "3.3 DESIGN SPACE",
      description: "Interior Company Introduction & Quote Responsive Website",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Nine Ark
    {
      src: "thumbnail_nineark",
      title: "Nine Ark",
      description: "Kakao’s Mobile Game Developers Introduction Responsive Website",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // BTBG
    {
      src: "thumbnail_btbg",
      title: "BTBG",
      description: "Luxury Vehicle Export Company Introduction Responsive Website",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Second White
    {
      src: "thumbnail_chartin",
      title: "Second White",
      description: "Product Design Agency Introduction Responsive Website",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Aware
    {
      src: "thumbnail_chartin",
      title: "Aware",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "Finance/Investment Journal Magazine Responsive Website",
      date: "Nov, 2022",
    },
    // Digital MBTI Curation
    {
      src: "thumbnail_chartin",
      title: "Digital MBTI Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Digital New Way of Life MBTI Test",
      date: "Sep, 2022",
    },
    // Meta Character
    {
      src: "thumbnail_chartin",
      title: "Meta Character",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "Global Character Content Marketing Servive",
      date: "Nov, 2022",
    },
    // Ubiocean
    {
      src: "thumbnail_chartin",
      title: "Ubiocean",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "Water Sports Companies Introduction Responsive Website based on Google Maps",
      date: "Aug, 2022",
    },
    // Invenconn
    {
      src: "thumbnail_chartin",
      title: "Invenconn",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "Inter-company Used Goods Trading Platform",
      date: "Jan, 2022",
    },
    // Aliquor Plus
    {
      src: "thumbnail_chartin",
      title: "Aliquor Plus",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "Baking Class Online Lecture Platform",
      date: "Jul, 2021",
    },
    // Beum
    {
      src: "thumbnail_chartin",
      title: "Beum",
      categories: ["Web", "App", "CMS", "Video"],
      description: "Online Lecture & Crowdfunding Platform",
      date: "Aug, 2021",
    },
    // Gradation
    {
      src: "thumbnail_chartin",
      title: "Gradation",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Visual Design Graduation Work Exhibition Responsive Website",
      date: "Dec, 2021",
    },
    // Contents Garden
    {
      src: "thumbnail_chartin",
      title: "Contents Garden",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "Online Magazine Subscription Responsive Web Publishing",
      date: "Jan, 2021",
    },
    // Cell My Brain
    {
      src: "thumbnail_chartin",
      title: "Cell My Brain",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "Lawyers Matching Platform specialized for Property Rights",
      date: "Mar, 2021",
    },
    // Aniverything
    {
      src: "thumbnail_chartin",
      title: "Aniverything",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "Animation Information Sharing Community Responsive Website",
      date: "Feb, 2021",
    },
    // Coreana Curation
    {
      src: "thumbnail_chartin",
      title: "Coreana Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Coreana Product Curation & MBTI Test",
      date: "Jan, 2021",
    },
    // HYID
    {
      src: "thumbnail_chartin",
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Industrial Design Graduation Work Exhibition Responsive Website",
      date: "Nov, 2020",
    },
    // IZE U VIDEO
    {
      src: "thumbnail_chartin",
      title: "IZE U VIDEO",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "Video Production Company Introduction Responsive Website",
      date: "Oct, 2020",
    },
    // nJobs
    {
      src: "thumbnail_chartin",
      title: "nJobs",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "Recruitment Platform Specialized in IT industry",
      date: "Aug, 2020",
    },
    // Ahha Asset
    {
      src: "thumbnail_chartin",
      title: "Ahha Asset",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Asset Management Experts Introduction Responsive Website",
      date: "Nov, 2019",
    },
    // The Lead Law
    {
      src: "thumbnail_chartin",
      title: "The Lead Law",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Law Firm Introduction Responsive Website",
      date: "Sep, 2019",
    },
    // Shortudy
    {
      src: "thumbnail_chartin",
      title: "Shortudy",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "Problem Solving & Editing Platform",
      date: "Sep, 2019",
    },
    // Refeed
    {
      src: "thumbnail_chartin",
      title: "Refeed",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "BIO Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    // Soom
    {
      src: "thumbnail_chartin",
      title: "Soom",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "Medical Device Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    // The CI Mall
    {
      src: "thumbnail_chartin",
      title: "The CI Mall",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "Inter Company Mall for Corporate Welfare Responsive Website",
      date: "Aug, 2019",
    },
    // The CI Group
    {
      src: "thumbnail_chartin",
      title: "The CI Group",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "CI Group Introduction Responsive Website",
      date: "Jun, 2019",
    },
    // Next Challenge
    {
      src: "thumbnail_chartin",
      title: "Next Challenge",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "Global Accelerater Introduction Responsive Website",
      date: "May, 2019",
    },
    // Mitdembauhaus
    {
      src: "thumbnail_chartin",
      title: "Mitdembauhaus",
      categories: ["Web", "CMS", "Ecommerce", "B2B"],
      description: "Furniture & Lighting Company Imports from Germany Introduction & Purchasing Responsive Website",
      date: "Apr, 2019",
    },
  ],
  ko: [
    // KIA
    {
      src: "thumbnail_kia",
      title: "KIA EV6 언플러그드",
      description: "기아 EV6 언플러그드 체험관 소개 예약 반응형 웹",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
      // TODO: 이미지
      details: {
        titles: ["제품의 정보를 잘 전달하고 시승 예약 서비스에 집중", "제품의 비주얼이 디지털 환경에서 잘 보일 수 있도록", "언제 어디서나모바일로 간편하게 방문"],
        descriptions: [
          "기아 언플러그드 EV6 프로젝트는 각 지점별 시승 및 차량 경험이 가능한 오프라인 시설을 소개하기 위한 반응형 웹 사이트로 제작이 되었습니다. 고객들이 새롭게 출시되는 차량에 대한 정보를 제대로 인지하는 것과 더불어 시승 예약, 코스 등 경험 관점의 정보를 제대로 전달하기 위해 디자인 / 기획을 진행하였습니다.",
          "EV6의 전기 카테고리를 활용한 에코, 스타일, 트랜드에 자연스럽게 녹아들며 실질적으로 구매 시 고객이 얻는 만족감을 상상할 수 있는 이미지 등을 고객의 시선 방향에 고려하여 제작 표현되었습니다.",
          "PC 환경보다 모바일 환경에서 기획 방향이 제대로 고객에게 전달이 될 수 있도록 에셋들간의 위치 배열 등 소개하고자 하는 제품의 정체성이 잘 담겨지도록 설계하였으며 다양한 코스, 이벤트 등이 지속적으로 운영되어 보여질 수 있도록 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 풀박사
    {
      src: "thumbnail_drFull",
      title: "풀박사",
      description: "반려식물 관리 및 커뮤니티 플랫폼",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
      // TODO: 이미지
      details: {
        titles: ["함께 키우는 식물 커뮤니티 풀박사", "단순한 커뮤니티를 넘어 O2O까지 확장이 되도록", "정확한 날씨 정보가 고객에게 전달 될 수 있도록"],
        descriptions: [
          "풀박사는 기존에 플랫폼들과 달리 혼자 키우는 식물을 넘어서 사람들끼리 같은 지역 날씨 환경 아래 자신들의 식물을 공유하고 정보를 탐색하는 식물 커뮤니티 플랫폼입니다. 기존 식물 플랫폼의 비즈니스 구조를 이해하고 현 시장에 알맞는 비즈니스 구조를 함께 설계를 하였고 이에 따른 베타 서비스 디자인, 기획, 개발을 진행하였습니다.",
          "풀박사는 식물을 키우는 정보를 교류하는 것을 넘어 더 잘 키우기 위해서 접하는 판매 제품 및 지역별 날씨를 제안하고 더 좋은 정보를 만날 수 있는 O2O 영역까지의 확장을 고려하며 디자인 및 기획 설계를 진행하였습니다.",
          "이번 개발의 핵심은 모두가 다른 지역에 거주하면서 각자 위치의 날씨 정보를 정확하게 제공 받는 것이었습니다. 개발 요소 중 날씨가 딜레이 & 오차 없이 일정한 서비스를 제공하여 편의성, 재방문률을 높일 수 있는 개발 요소의 최적화를 목표로 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // ufo
    {
      src: "thumbnail_ufo",
      title: "UFO Coffee",
      description: "커피 로스팅 브랜드 쇼핑몰 및 CMS 설계",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // +X+
    {
      src: "thumbnail_txt",
      title: "+X+",
      description: "지역간 데일리 채팅 기반 커뮤니티 플랫폼",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Oct, 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // tethermax
    {
      src: "thumbnail_chartin",
      title: "테더맥스",
      description: "코인 선물 거래수수료 페이백 서비스",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: ["고객에게 거래 혜택을 공유할 수 있는 수수료 리워드 플랫폼 테더맥스", "달성 목표와 리워드 참여 유저가 잘 보일 수 있도록", "전체 고객관리가 체계적으로 이뤄질 수 있는 관리 시스템 구축"],
        descriptions: [
          "테더맥스는 많은 사람들이 수시로 거래되는 가상화폐 거래 시 발생하는 수수료를 리워드 형식으로 제공하는 플랫폼입니다. 많은 고객들이 거래를 하는데 있어서 더 좋은 정보를 얻고 리워드 편익을 온전히 느낄 수 있도록 제작되었습니다.",
          "거래 수수료는 한명이 아닌 다수가 참여를 했을 때 더 많은 혜택을 줄 수 있다는 장점이 존재를 합니다. 이번 디자인의 와우 포인트는 여러 유저들이 신뢰할 수 있고 더 많은 혜택을 여러 사람들과 적극적으로 참여할 수 있도록 정보를 보여주는 편의성에 집중하여 제작되었습니다.",
          "어떤 유저가 거래소를 선택을 하였고, 결제를 진행 하는 것에 대해 인증을 하고 리워드가 지급이 되었는지 관리자 시점에서 정확하게 고객의 행동을 분석하고 비즈니스 편익을 이어갈 수 있도록 프론트와 백앤드 개발과 동시에 유지보수 개념의 관리 기능까지 고려하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // fuleaf
    // TODO: 썸네일이미지
    {
      src: "thumbnail_chartin",
      title: "플립 [Fuleaf]",
      description: "식물 도감 및 큐레이션 서비스",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
      // TODO: images
      details: {
        titles: ["누구나 식물이 쉽게 식물 정보 플랫폼 플립", "다양한 매거진과 이야기 거리가 공존할 수 있도록", "더 많은 서비스로 확장할 수 있도록"],
        descriptions: [
          "플립은 식물을 키우는 누구나 궁금해하는 정보를 빠르고 정확하게 전달받을 수 있는 식물 검색 플랫폼을 시작으로 다양한 식물 관련 제품을 구매할 수 있는 B2B, B2C 종합 식물 플랫폼입니다.",
          "플립은 식물 도감을 검색하는 것을 넘어 제휴 작가와 함께 콘텐츠를 매거진 형식으로 공유하고 사용자가 구독자가 되어 식물 라이프를 지속적으로 향유할 수 있는 것을 중심으로 설계 된 디자인과 기획을 바탕으로 개발을 진행하였습니다.",
          "정보를 제공하는 플랫폼에서 식물을 좋아하는 매니아층이 모여 하나의 커뮤니티와 마켓을 만들 수 있도록 여러 상황의 IA를 종합적으로 검토하여 훗날에도 개발을 진행 하였을 때 다양한 서브 오브젝트들이 붙어 더욱 강력한 프로덕트가 될 수 있도록 개발을 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 리치고
    {
      src: "thumbnail_lichgo",
      title: "리치고",
      description: "부동산 정보를 실시간 데이터로 확인할 수 있는 부동산데이터 플랫폼",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
      // TODO: images
      details: {
        titles: ["데이터를 통한 실거래가와 미래가격 예측 부동산 플랫폼, 리치고", "거주자 관점, 투자자 관점 양쪽을 고려한 기획 설계", "다양한 정보가 복잡하지 않게 한눈에 보일 수 있도록"],
        descriptions: [
          "리치고는 데이터 기반으로 만들어지는 실거주자, 실거래, 상권분석 등의 정보를 지역별 부동산 정보를 제공하는 종합 부동산 플랫폼으로 부동산을 투자하는 고객과 실거주를 목표로 하는 고객 모두가 자신의 상황에 맞게 부동산을 탐색할 수 있도록 도와주는 플랫폼입니다.",
          "모든 부동산 플랫폼이 대부분 투자에 포커스를 두고 있지만 이번 리치고에서는 거주자 관점을 더욱 집중하여 주변 학군을 비롯해 편의시설, 의료시설 등 실질적으로 거주 시 얻을 수 있는 주변 시설의 환경까지 한눈에 확인할 수 있도록 제작되었습니다.",
          "데이터라는 것은 기본적으로 보여지도록 만들기도 어려울 뿐더러 읽는 사람에게도 어려움을 동반할 수 있는 카테고리입니다. 이번 제작에는 데이터가 더욱 쉽고 인포그래픽을 활용하여 고객에게 잘 전달될 수 있도록 디자인 요소와 페이지 마다의 집중 요소를 면밀히 체크하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 킥오프
    {
      src: "thumbnail_chartin",
      title: "킥오프",
      description: "글로벌 외주 매칭 플랫폼",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Aug, 2021",
      // TODO: images
      details: {
        titles: ["누구나 자유롭게 자신의 프로젝트를 찾고 프로젝트를 믿고 맡길 수 있도록", "가장 빠르게 만들어진 MVP 서비스", "IP사업까지 고려하여 제작된 비주얼 아이덴티티 디자인"],
        descriptions: [
          "킥오프는 프로젝트를 수주하는 전문가와 일을 맡겨야하는 파트너간의 연결을 도와주는 아웃소싱 O2O 플랫폼입니다. 기존의 아웃소싱 플랫폼이 가지고 있었던 과도한 정보와 허위 정보를 잡고 전문성으로 만들어진 파트너 정보를 합리적인 가격으로 이용이 될 수 있도록 제작되었습니다.",
          "킥오프는 양방향 O2O 플랫폼으로 파트너와 전문가가 상시 교류를 해야하는 서비스입니다. 그러므로 다양한 페이지가 존재하고 과정이 있는 것이 다반사이지만 이번 플랫폼에서는 최대한 대부분의 기능은 CMS를 통해 자동화로 진행이 될 수 있도록 제작이 되었고 이 과정을 통해 시장에 더욱 빠르게 제품을 선보일 수 있는 최적의 작업 기간으로 진행하였습니다.",
          "O2O 플랫폼이면서 다양한 전문가를 담고 있는 킥오프는 그만큼 다양한 직군과 성향의 고객들을 맞이하는 서비스 중 하나입니다. 이러한 고객들이 더욱 킥오프라는 서비스를 기억하고 다시금 방문할 수 있도록 통일화된 아이덴티티를 구축함과 동시에 고유 IP 사업 기획까지 진행하여 폭 넓은 서비스가 될 수 있는 발판을 마련하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 차트인
    {
      src: "thumbnail_chartin",
      title: "차트인",
      description: "뮤지션과 전문가를 매칭해주는 음악 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
      // TODO: images
      details: {
        titles: ["글로벌 뮤직 포트폴리오 플랫폼 차트인", "더욱 전문적일 수 있도록 핵심 컬러에만 집중", "여러 경우의 수를 파악하며 진행 된 개발 환경"],
        descriptions: [
          "차트인은 음악을 좋아하는 사람, 음악을 찾고 싶은 사람 모두가 즐길 수 있는 음악 커뮤니티 플랫폼 서비스입니다. 다수의 사람들이 자신을 PR하고 더 나아가 현재 트랜드로 자리잡고 있는 음악 등을 함께 듣고 평가하고 평가를 받을 수 있는 서비스의 특징을 담고 있습니다.",
          "음악을 만드는 사람들이 방 안에서 자신의 음악에 집중하며 마주하는 컬러처럼 어두운 다크 배경에 핵심적인 컬러가 UI에 작용할 수 있도록 제작되었습니다. 전체적인 분위기나 비주얼 벨런스를 통해 고객이 더욱 차트인에서 활동하며 전문성을 키울 수 있도록 하였습니다.",
          "차트인은 음악을 올리고 평가를 받아 실제로 데뷔 무대까지 이어질 수 있는 플랫폼으로 단순히 자신의 작업물을 올리는 것에 그치는 것이 아닌 실제로 평가를 받아 사람들에게 공개가 되는 종합 플랫폼의 모습을 띄고 있습니다. 이러한 과정이 원활하게 상호작용 될 수 있도록 개발 환경을 구축, 제작 되었습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 마크홀리
    {
      src: "thumbnail_chartin",
      title: "마크홀리",
      description: "제품의 상세 내용을 확인할 수 있는 CTA 중심 반응형 웹",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    {
      src: "thumbnail_help",
      title: "구해줘 노무사",
      description: "노무사 매칭 및 상담 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Dec, 2022",
      // TODO: images
      details: {
        titles: [
          "빠르고 정확하게 노무 Q&A 도움이 가능한 O2O 플랫폼",
          "노무사는 더욱 자신을 명확하게 알리고 고객은 더욱 자신을 명확하게 말하도록",
          "자신의 진행 상황을 정확하게 체크할 수 있도록 모니터링 시스템 개발",
        ],
        descriptions: [
          "구해줘 노무사는 노무사와 고객사 모두가 노무에 대한 업무를 온라인에서 진행할 수 있는 노무 종합 O2O 플랫폼입니다. 다양한 법적인 문제부터 빠르게 체크하며 진행되어야 하는 노무의 특성이 온라인에서 제약 없이 서비스 진행이 될 수 있도록 제작되었습니다.",
          "노무사는 자신들의 포트폴리오와 고객 상담 등을 자유롭게 받으며 업무에 플러스가 될 수 있도록 제작을 하였고 더불어 고객들은 자신의 상황을 빠르게 여러 노무사들에게 상담 받을 수 있도록 전체 상황을 고려한 기획, 설계, 디자인에 초점을 맞춰 진행하였습니다.",
          "구해줘 노무사는 상담을 진행하는 노무사, 파트너 둘 다 자신이 어디까지 진행을 하고 있고 어떤 상담 등을 진행하고 있는지 서비스 운영 관리와 별도로 개별 모니터링 시스템이 필요한 플랫폼입니다. O2O를 경험하는 모든 고객들이 자신의 서비스 상황을 정확하게 인지하고 빠르게 다음 서비스로 이어갈 수 있도록 최적화된 개발 환경을 구축하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // airkid
    {
      src: "thumbnail_chartin",
      title: "AIRKID",
      description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹 ",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
      // TODO: details
      details: {
        titles: ["제품을 온라인에서 자유롭게 확인할 수 있는 PDP 반응형 웹사이트", "스크롤마다 제품의 다각도 모습이 잘 전달될 수 있도록", "브랜드 아이덴티티의 핵심이 GUI에 잘 녹아들 수 있게"],
        descriptions: [
          "AIRKID는 유아용 헬맷 브랜드인 Legit이 개발한 제품으로 당시에는 생소한 유아용 헬멧을 고객에게 올바르게 전달할 수 있는 웹을 구축하는 것이 목표였습니다. 그로인해 모델링이 자유 각도로 보여지고 세부적인 기술이 어떻게 들어가며 제작이 되었는지 고객에게 어렵지 않게 보여지는 것을 목표로 제작되었습니다.",
          "고해상도 모델링 이미지가 실제 스크롤을 내리면서 고객에게 보여졌을 때 최적화된 용량으로 버벅임 없이 전달될 수 있도록 이미지 데이터를 최적화하는 개발을 함과 동시에 스크롤 마다 프레임이 올바르게 보여질 수 있는 개발 기술을 통해 고객이 스크롤을 올리고 내리는 모든 과정에 자연스러운 인터렉션이 구동될 수 있는 개발 환경을 구축하였습니다.",
          "브랜드와 제품 모두가 시장에 처음 선보이는 상황을 감안하여 고객들이 향후에도 브랜드를 더욱 잘 기억하며 재방문을 통한 구매 과정에 도움이 될 수 있는 그래픽 인터페이스, 브랜드 정체성을 고려하여 제작되었습니다. 캐릭터부터 전체적인 브랜드 컬러까지 강조점이 명확히 보여질 수 있는 방향을 집중하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },

    // DOOSIL
    {
      src: "thumbnail_doosil",
      title: "DOOSIL",
      description: "부동산 인테리어 중개 O2O 플랫폼",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
      // TODO: images
      details: {
        titles: ["나에게 딱 맞는 집을 찾는 인테리어 중개 플랫폼 두꺼비실장", "다양한 태그가 복잡하게 보이지 않고 이해되기 쉽도록", "웹 브라우저부터 모바일 애플리케이션까지"],
        descriptions: [
          "두꺼비실장은 다양한 라이프 스타일 태그를 통해 내가 소비하고 마주하는 브랜드가 무엇인지 그렇다면 내가 살고 있는 집 공간은 어떤 모습으로 인테리어가 되는 것이 좋은지 다양한 홈 인테리어 정보를 제공함과 동시에 직접 시공하고 인테리어를 진행 할 수록 도와주는 인테리어 O2O 플랫폼입니다.",
          "지금까지 인테리어 플랫폼은 과하게 공백, 여백을 만들거나 기존 쇼핑몰 사이트와 같은 UI 환경으로 구성이 되어있는 것이 시장의 공통된 모습이였습니다. 두꺼비실장은 고객이 자신의 라이프 스타일 태그를 찾고 서치하는 것과 더불어 라이프 매거진을 읽는 느낌을 얻을 수 있도록 다방면 스크롤, 페이지 뎁스 등을 고려하여 기획, 디자인하고자 노력하였습니다.",
          "두꺼비실장은 인테리어를 수시로 확인하며 진행하는 파트너와 시공사, 고객 등이 언제나 제약없는 환경에서 자유롭게 방문이 필요한 서비스입니다. 이러한 상황에 편의성이 더해질 수 있도록 모든 디바이스에서 각 환경에 맞춰진 개발 환경, 가이드를 제공하여 고객의 서비스 편의성을 높이고자 노력하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 시티호퍼스
    {
      src: "thumbnail_chartin",
      title: "시티호퍼스",
      description: "여행 매거진 및 커뮤니티 플랫폼",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
      src: "thumbnail_chartin",
      title: "3.3 DESIGN SPACE",
      description: "인테리어 회사 소개 및 견적 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    {
      src: "thumbnail_nineark",
      title: "나인아크",
      description: "카카오 산하 모바일 게임 개발사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
      // TODO: images
      details: {
        titles: ["제작사의 의도와 제작 방향이 잘 보여질 수 있도록", "다양한 크루가 모인 나인아크 각자의 개성 또한 뚜렷하게", "실시간 뉴스가 보는 이들에게 잘 전달될 수 있도록"],
        descriptions: [
          "나인아크는 카카오게임즈 산하 게임 개발 제작사로 다양한 게임을 퍼블리싱함과 동시에 자신들의 게임 자산을 출시하는 기업입니다. 이번 웹은 나인아크의 비전과 신념이 잘 보여질 수 있도록 현재 진행 중인 게임의 아이덴티티와 기업의 아이덴티티가 잘 보일 수 있는 환경을 구축하고자 노력하였습니다.",
          "나인아크는 여러 게임 제작 크루를 보유한 형태의 기업구조로 하나의 개발사의 모습을 보여줌과 동시에 다양한 크루들의 활동까지 보여줘야하는 제작 기업의 형태를 띄고 있습니다. 이번 웹 환경을 구축할 때도 모든 아이덴티티가 하나의 지붕 아래에서 잘 보여질 수 있는 디자인, 기획을 중요하게 바라보며 제작하였습니다.",
          "기업 소개 사이트에서 가장 많이 사용되는 뉴스 레이아웃은 마우스만 올려도 전체 맥락과 내용을 한눈에 확인할 수 있도록 빠른 정보 제공을 목표로 하여 개발되었으며 올리는 관리자 또한 링크와 제목을 상황에 따라 빠르게 적용하고 보여질 수 있는 환경을 고려하여 제작되었습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // BTBG
    {
      src: "thumbnail_btbg",
      title: "BTBG",
      description: "고급 차량 수출 회사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 세컨드 화이트
    {
      src: "thumbnail_chartin",
      title: "세컨드 화이트",
      description: "프로덕트 디자인 에이전시 회사 소개 반응형 웹",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 어웨어
    {
      src: "thumbnail_chartin",
      title: "어웨어",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "금융/투자 저널 매거진 반응형 웹",
      date: "Nov, 2022",
    },
    // 디지털 갓생 살기
    {
      src: "thumbnail_chartin",
      title: "디지털 갓생 살기",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "디지털 갓생 살기 MBTI 테스트",
      date: "Sep, 2022",
    },
    // 메타 캐릭터
    {
      src: "thumbnail_chartin",
      title: "메타 캐릭터",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "글로벌 캐릭터 콘텐츠 마케팅 서비스",
      date: "Nov, 2022",
    },
    // 유비오션
    {
      src: "thumbnail_chartin",
      title: "유비오션",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "구글맵 기반 수상 레저 업체 소개 반응형 웹",
      date: "Aug, 2022",
    },
    // 인벤컨
    {
      src: "thumbnail_chartin",
      title: "인벤컨",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "기업간 중고 물품 거래 플랫폼",
      date: "Jan, 2022",
    },
    // 올리커 플러스
    {
      src: "thumbnail_chartin",
      title: "올리커 플러스",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "베이킹 클래스 온라인 강의 플랫폼",
      date: "Jul, 2021",
    },
    // 배움
    {
      src: "thumbnail_chartin",
      title: "배움",
      categories: ["Web", "App", "CMS", "Video"],
      description: "온라인 강의 및 크라우드 펀딩 플랫폼",
      date: "Aug, 2021",
    },
    // 그라데이션
    {
      src: "thumbnail_chartin",
      title: "그라데이션",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 시각디자인과 졸업 작품 전시 반응형 웹",
      date: "Dec, 2021",
    },
    // 콘텐츠 가든
    {
      src: "thumbnail_chartin",
      title: "콘텐츠 가든",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "온라인 매거진 구독 반응형 웹 퍼블리싱",
      date: "Jan, 2021",
    },
    // 셀 마이 브레인
    {
      src: "thumbnail_chartin",
      title: "셀 마이 브레인",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "지식재산권 관련 변호사 매칭 플랫폼",
      date: "Mar, 2021",
    },
    // 애니브리띵
    {
      src: "thumbnail_chartin",
      title: "애니브리띵",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "애니메이션 정보 공유 커뮤니티 반응형 웹",
      date: "Feb, 2021",
    },
    // 코리아나 큐레이션
    {
      src: "thumbnail_chartin",
      title: "코리아나 큐레이션",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "코리아나 제품 큐레이션 MBTI 테스트",
      date: "Jan, 2021",
    },
    // HYID
    {
      src: "thumbnail_chartin",
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 산업디자인과 학생들의 졸업 작품 전시 반응형 웹 **[Jennifer 번역 필요]**",
      date: "Nov, 2020",
    },
    // 아이즈 유 비디오
    {
      src: "thumbnail_chartin",
      title: "아이즈 유 비디오",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "영상 제작 회사 소개 반응형 웹",
      date: "Oct, 2020",
    },
    // 엔잡스
    {
      src: "thumbnail_chartin",
      title: "엔잡스",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "IT 분야 특화 채용 플랫폼",
      date: "Aug, 2020",
    },
    // 아하 에셋 자산운용
    {
      src: "thumbnail_chartin",
      title: "아하 에셋 자산운용",
      categories: ["Web", "CMS", "Enterprise"],
      description: "자산운용사의 소개 반응형 웹",
      date: "Nov, 2019",
    },
    // 더 리드 법률사무소
    {
      src: "thumbnail_chartin",
      title: "더 리드 법률사무소",
      categories: ["Web", "CMS", "Enterprise"],
      description: "법무법인의 소개 반응형 웹",
      date: "Sep, 2019",
    },
    // 숏터디
    {
      src: "thumbnail_chartin",
      title: "숏터디",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "시험 문제 풀이 및 첨삭 플랫폼",
      date: "Sep, 2019",
    },
    // 뤼피드
    {
      src: "thumbnail_chartin",
      title: "뤼피드",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "바이오 회사 소개 반응형 웹",
      date: "Jul, 2019",
    },
    // 숨
    {
      src: "thumbnail_chartin",
      title: "숨",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "의료기기 회사 소개 반응형 웹",
      date: "Jul, 2019",
    },
    // 씨아이 그룹 자사몰
    {
      src: "thumbnail_chartin",
      title: "씨아이 그룹 자사몰",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "기업 내부 복지를 위한 자사몰 반응형 웹",
      date: "Aug, 2019",
    },
    // 씨아이 그룹 자사웹
    {
      src: "thumbnail_chartin",
      title: "씨아이 그룹 자사웹",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "씨아이 그룹 소개 반응형 웹",
      date: "Jun, 2019",
    },
    // 넥스트 챌린지
    {
      src: "thumbnail_chartin",
      title: "넥스트 챌린지",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "글로벌 액셀러레이터 소개 반응형 웹",
      date: "May, 2019",
    },
    // 미뗌바우하우스
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
