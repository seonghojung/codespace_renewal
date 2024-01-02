import MainVisual from "./MainVisual";
import MainProject from "./MainProject";
import MainBanner from "./MainBanner";
import MainSwiper from "./MainSwiper";
import SwiperCarousel from "./SwiperCarousel";
import FAQ from "./FAQ";

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
  {
    src: "images/bg_col.png",
    alt: "이미지 6",
    width: 234,
    height: 300,
  },
  {
    src: "images/bg_row.png",
    alt: "이미지 7",
    width: 300,
    height: 234,
  },
  {
    src: "images/bg_col.png",
    alt: "이미지 8",
    width: 234,
    height: 300,
  },
];

function Home() {
  return (
    <>
      <MainVisual />
      <MainProject />
      <MainBanner />
      <MainSwiper slideImgs={swiperImgs} />
      {/* <SwiperCarousel slideImgs={swiperImgs} /> */}
      <FAQ />
    </>
  );
}

export default Home;
