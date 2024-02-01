import MainBanner from "./MainBanner";
import Swiper from "./Swiper";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";
import TopBanner from "./TopBanner";
import MiddleBanner from "./MiddleBanner";
import Projects from "./Projects";
import LogoMetaIcon from "./icon/LogoMetaIcon";
import Logo from "./Logo";

export default function Home() {
  const t = useTranslations("Home");
  const MainVisualTranslate = { title: t("MainVisual.title"), subTitle: t("MainVisual.subTitle"), moreBtn: t("Component.moreBtn") };
  return (
    <>
      <TopBanner />
      <Logo />
      <MiddleBanner />
      <Projects />
      <MainBanner />
      <Swiper />
      <FAQ />
    </>
  );
}
