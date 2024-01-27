import MainVisual from "./MainVisual";
import MainProject from "./MainProject";
import MainBanner from "./MainBanner";
import MainSwiper from "./MainSwiper";
import FAQ from "./FAQ";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const a = t("title");
  return (
    <>
      <h1>{a}</h1>
      <MainVisual />
      <MainProject />
      <MainBanner />
      <MainSwiper slideImgs={swiperImgs} />
      <FAQ />
    </>
  );
}

/* fixme. 이미지 경로 및 대체 텍스트 수정 */
const swiperImgs = [
  {
    src: "images/bg_row.png",
    alt: "이미지 1",
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 2",
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 3",
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 4",
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 5",
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 6",
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 7",
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 8",
  },
];
