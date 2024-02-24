import { notFound } from "next/navigation";
import Banner from "./Banner";
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import BottomContent from "./BottomContent";
const data = {
  src: "/videos/thumbnail_chartin.mp4",
  title: "AIRKID",
  description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹 ",
  categories: ["UI/UX", "Web", "3D", "Enterprise"],
  date: "Jul, 2020",
};

const data2 = {
  title: "어떤 환경에서나 유연한 웹사이트",
  description:
    "다양한 디바이스, 브라우저에서도 유연한 웹사이트를 통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성 고려, SEO 최적화 콘텐츠 가독성 향상이 모바일과 PC 등 다양한 환경에서 올바르게 보여질 수 있도록 제공하고 있습니다.",
};

const middleImages = ["/images/projects/a.png", "/images/projects/b.png", "/images/projects/c.png", "/images/projects/d.png"];
const bottomImages = ["/images/projects/e.png", "/images/projects/f.png", "/images/projects/g.png"];

const ProjectDetail = ({ params: { projectID } }: { params: { projectID: string; locale: string } }) => {
  if (projectID !== "airkid") return notFound();

  return (
    <>
      <Banner title={data.title} description={data2.description} />
      <TopContent title={data2.title} description={data2.description} />
      <MiddleContent title={data2.title} description={data2.description} images={middleImages} />
      <BottomContent title={data2.title} description={data2.description} images={bottomImages} />
    </>
  );
};

export default ProjectDetail;
