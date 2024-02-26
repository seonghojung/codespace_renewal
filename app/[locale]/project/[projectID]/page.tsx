import { notFound } from "next/navigation";
import Banner from "./Banner";
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import BottomContent from "./BottomContent";
import { getProject } from "@/app/projects";
import Section from "./Section";

const middleImages = ["/images/projects/a.png", "/images/projects/b.png", "/images/projects/c.png", "/images/projects/d.png"];
const bottomImages = ["/images/projects/e.png", "/images/projects/f.png", "/images/projects/g.png"];

const ProjectDetail = ({ params: { projectID, locale } }: { params: { projectID: string; locale: string } }) => {
  const Project = getProject(locale).find(({ id }) => id === projectID);
  if (!Project || !Project.details) return notFound();
  return (
    <Section>
      <Banner title={Project.title} subTitle={Project.details.titles[0]} description={Project.details.descriptions[0]} />
      <TopContent title={Project.details.titles[1]} description={Project.details.descriptions[1]} />
      <MiddleContent title={Project.details.titles[2]} description={Project.details.descriptions[2]} images={middleImages} />
      <BottomContent images={bottomImages} />
    </Section>
  );
};

export default ProjectDetail;
