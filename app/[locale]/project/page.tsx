import { ILocale } from "../(home)/page";
import { useTranslations } from "next-intl";
import Project from "./Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로덕트 마켓 핏을 만들어보세요!",
  description: "코드스페이스 - 프로덕트 마켓 핏을 찾아보세요! 혁신적인 솔루션과 맞춤 전략으로 비즈니스를 향상시키세요.",
};

const ProjectPage = ({ params: { locale } }: { params: { locale: ILocale } }) => {
  const t = useTranslations("Projects");
  return <Project locale={locale} translation={{ title: t.rich("title", { br: () => <br /> }) }} />;
};

export default ProjectPage;
