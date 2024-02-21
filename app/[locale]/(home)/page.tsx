import MainBanner from "./MainBanner";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";
import TopBanner from "./TopBanner";
import Projects from "./MainProjects";
import Logo from "./Logo";
import { ReactElement, JSXElementConstructor, ReactNodeArray } from "react";
import { locales } from "@/i18n";
import { Metadata } from "next";

export type IRich = string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray;
export interface ITranslation {
  [property: string]: IRich;
}
export type ILocale = (typeof locales)[number];

export const metadata: Metadata = {
  title: "상상하는 서비스를 현실로 만들어내는 혁신적인 기술 파트너",
  description:
    "코드스페이스 - 세상을 바꾸는 당신의 아이디어를 놀라운 수준으로 끌어올립니다. 현실적이고 효과적이며 대중적인 서비스를 제작하고 성장하세요",
};

export default function Home({ params: { locale } }: { params: { locale: ILocale } }) {
  const t = useTranslations("Home");
  const TopBannerTranslation = {
    title: t.rich("TopBanner.title", { br: () => <br /> }),
    subTitle: t.rich("TopBanner.subTitle", { br: () => <br /> }),
    moreBtn: t.rich("Component.moreBtn", { br: () => <br /> }),
  };
  const MainBannerTranslation = {
    topDescription: t.rich("MainBanner.topDescription", { br: () => <br /> }),
    bottomDescription: t.rich("MainBanner.bottomDescription", { br: () => <br /> }),
    requestBtn: t.rich("MainBanner.requestBtn", { br: () => <br /> }),
  };
  return (
    <>
      <TopBanner translation={TopBannerTranslation} />
      <Logo />
      <Projects locale={locale} />
      <MainBanner translation={MainBannerTranslation} />
      <FAQ locale={locale} />
    </>
  );
}
