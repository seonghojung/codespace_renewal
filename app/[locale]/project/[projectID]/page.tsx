import { notFound } from "next/navigation";
import Banner from "./Banner";
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import styled from "styled-components";
import BottomContent from "./BottomContent";
const data = {
  src: "/videos/thumbnail_chartin.mp4",
  title: "AIRKID",
  description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹 ",
  categories: ["UI/UX", "Web", "3D", "Enterprise"],
  date: "Jul, 2020",
};

const data2 = {
  title: "프로젝트에 대한 설명이 대제목으로 들어가는 위치",
  description:
    "프로젝트에 대한 간단 설명이 들어가는 위치입니다. 프로젝트에 대한 간단 설명이 들어가는 위치입니다. 프로젝트에 대한 간단 설명이 들어가는 위치입니다.프로젝트에 대한 간단 설명이 들어가는 위치입니다. 프로젝트에 대한 간단 설명이 들어가는 위치입니다",
};

const middleImages = ["/images/projects/a.png", "/images/projects/b.png", "/images/projects/c.png", "/images/projects/d.png"];
const bottomImages = ["/images/projects/e.png", "/images/projects/f.png", "/images/projects/g.png"];

const ProjectDetail = ({ params: { projectID } }: { params: { projectID: string; locale: string } }) => {
  if (projectID !== "airkid") return notFound();

  return (
    <>
      <Banner title={data.title} date={data.date} />
      <TopContent title={data2.title} description={data2.description} />
      <MiddleContent title={data2.title} description={data2.description} images={middleImages} />
      <BottomContent title={data2.title} description={data2.description} images={bottomImages} />
    </>
  );
};

export default ProjectDetail;
