import MainBanner from "./MainBanner";
import Swiper from "./Swiper";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";
import TopBanner from "./TopBanner";
import MiddleBanner from "./MiddleBanner";
import Projects from "./Projects";
import Logo from "./Logo";
import { ReactElement, JSXElementConstructor, ReactNodeArray } from "react";
import { locales } from "@/i18n";

export type IRich = string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray;
export interface ITranslation {
  [property: string]: IRich;
}
export type ILocale = (typeof locales)[number];

export default function Home({ params: { locale } }: { params: { locale: ILocale } }) {
  const t = useTranslations("Home");
  const TopBannerTranslation = {
    title: t.rich("TopBanner.title", { br: () => <br /> }),
    subTitle: t.rich("TopBanner.subTitle", { br: () => <br /> }),
    moreBtn: t.rich("Component.moreBtn", { br: () => <br /> }),
  };
  const MiddleBannerTranslation = {
    description: t.rich("MiddleBanner.description", { br: () => <br /> }),
    moreBtn: t.rich("Component.moreBtn", { br: () => <br /> }),
  };
  const MainBannerTranslation = {
    description: t.rich("MainBanner.description", { br: () => <br /> }),
    requestBtn: t.rich("MainBanner.requestBtn", { br: () => <br /> }),
  };
  return (
    <>
      <TopBanner translation={TopBannerTranslation} />
      <Logo />
      <MiddleBanner translation={MiddleBannerTranslation} />
      <Projects locale={locale} />
      <MainBanner translation={MainBannerTranslation} />
      <Swiper />
      <FAQ locale={locale} />
    </>
  );
}
