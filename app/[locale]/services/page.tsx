import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import ContentsSection from "./ContentsSection";
import HeaderSection from "./HeaderSection";
import SwiperSection from "./SwiperSection";
import { ILocale } from "../(home)/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "비즈니스 목표달성과 오랜 시간 함께, 지속가능한 성장을위한 솔루션",
  description:
    "코드스페이스 - 감각적인 UX로 만들어진 UI를 담은 유연한 웹과 핵심기능을 담은 앱을 사용자 친화적인 CMS를 통해 관리하는 기능을 제공하고 SEO로 검색 가시성을 극대화 합니다.",
};

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
    <>
      <Layout>
        <HeaderSection translation={HeaderSectionTranslation} />
      </Layout>
      <ContentsSection locale={locale} />
      <SwiperSection translation={SwiperSectionTranslation} />
    </>
  );
}

export default Services;
