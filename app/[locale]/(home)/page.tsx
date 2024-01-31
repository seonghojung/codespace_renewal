import MainVisual from "./TopBanner";
import MainProject from "./Projects";
import MainBanner from "./MainBanner";
import MainSwiper from "./MainSwiper";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";
import TopBanner from "./TopBanner";
import MiddleBanner from "./MiddleBanner";
import Projects from "./Projects";

export default function Home() {
  const t = useTranslations("Home");
  const MainVisualTranslate = { title: t("MainVisual.title"), subTitle: t("MainVisual.subTitle"), moreBtn: t("Component.moreBtn") };
  return (
    <>
      <TopBanner />
      <MiddleBanner />
      <Projects />
      <MainBanner />
      <MainSwiper />
      <FAQ />
    </>
  );
}
