import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import ContentsSection from "./ContentsSection";
import HeaderSection from "./HeaderSection";
import SwiperSection from "./SwiperSection";
import { ILocale } from "../(home)/page";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Section from "../project/[projectID]/Section";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Services" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}

function Services({ params: { locale } }: { params: { locale: ILocale } }) {
  const t = useTranslations("Services");
  HeaderSection;
  ContentsSection;
  SwiperSection;
  const HeaderSectionTranslation = {
    title: t.rich("HeaderSection.title", { br: () => <br /> }),
    description: t.rich("HeaderSection.description", { br: () => <br /> }),
  };
  const SwiperSectionTranslation = {
    title: t.rich("SwiperSection.title", { br: () => <br /> }),
  };
  return (
    <Section>
      <Layout>
        <HeaderSection translation={HeaderSectionTranslation} />
      </Layout>
      <ContentsSection locale={locale} />
      {/* <SwiperSection translation={SwiperSectionTranslation} /> */}
    </Section>
  );
}

export default Services;
