import MainBanner from "./MainBanner";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";
import TopBanner from "./TopBanner";
import Projects from "./MainProjects";
import Logo from "./Logo";
import { ReactElement, JSXElementConstructor, ReactNodeArray } from "react";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n";
import { Metadata } from "next";

export type IRich = string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray;
export interface ITranslation {
  [property: string]: IRich;
}
export type ILocale = (typeof locales)[number];

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}

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
