import MainVisual from "./MainVisual";
import MainProject from "./MainProject";
import MainBanner from "./MainBanner";
import MainSwiper from "./MainSwiper";
import FAQ from "./FAQ";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { styled } from "styled-components";

interface MainProjectWrapProps {
  $isView: boolean;
}

const MainProjectWrap = styled.div<MainProjectWrapProps>`
  opacity: ${(props) => (props.$isView ? 1 : 0)};
`;

function Home() {
  const [isView, setIsView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3, // 가시성이 50% 이상일 때 트리거
    onChange: (inView) => {
      if (inView) {
        console.log("h2");
        setIsView(true);
      }
    },
  });

  return (
    <>
      <MainVisual />
      <MainProjectWrap ref={ref} $isView={isView}>
        <MainProject />
      </MainProjectWrap>
      <MainBanner />
      <MainSwiper slideImgs={swiperImgs} />
      <FAQ />
    </>
  );
}

export default Home;

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
