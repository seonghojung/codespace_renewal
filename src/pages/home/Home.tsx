import MainVisual from "./MainVisual";
import MainProject from "./MainProject";
import MainBanner from "./MainBanner";
import SwiperCarousel from "./SwiperCarousel";
import FAQ from "./FAQ";

function Home() {
  return (
    <>
      <MainVisual />
      <MainProject />
      <MainBanner />
      <SwiperCarousel slideImgs={swiperImgs} />
      <FAQ />
    </>
  );
}

export default Home;

const swiperImgs = [
  {
    src: "images/bg_row.png",
    alt: "이미지 1",
    width: 300,
    height: 234,
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 2",
    width: 234,
    height: 300,
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 3",
    width: 300,
    height: 234,
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 4",
    width: 234,
    height: 300,
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 5",
    width: 300,
    height: 234,
  },
];
