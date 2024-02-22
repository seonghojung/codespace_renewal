import { ILocale } from "../(home)/page";
import { useTranslations } from "next-intl";
import Project from "./Project";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}

const ProjectPage = ({ params: { locale } }: { params: { locale: ILocale } }) => {
  const t = useTranslations("Projects");
  return <Project locale={locale} translation={{ title: t.rich("title", { br: () => <br /> }) }} />;
};

export default ProjectPage;
