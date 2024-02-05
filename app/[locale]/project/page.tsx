import { ILocale } from "../(home)/page";
import { useTranslations } from "next-intl";
import Project from "./Project";

const ProjectPage = ({ params: { locale } }: { params: { locale: ILocale } }) => {
  const t = useTranslations("Projects");
  return <Project locale={locale} translation={{ title: t.rich("title", { br: () => <br /> }) }} />;
};

export default ProjectPage;
