import MainVisual from "./MainVisual";
import MainProject from "./MainProject";
import MainBanner from "./MainBanner";
import MainSwiper from "./MainSwiper";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const MainVisualTranslate = { title: t("MainVisual.title"), subTitle: t("MainVisual.subTitle"), moreBtn: t("Component.moreBtn") };
  return (
    <>
      <MainVisual translate={MainVisualTranslate} />
      <MainProject />
      <MainBanner />
      <MainSwiper />
      <FAQ />
    </>
  );
}
