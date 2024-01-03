import { styled } from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const SectionWrap = styled.section`
  padding-bottom: 160px;

  h2 {
    color: #000;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
  }

  .swiper {
    margin-top: 80px;
    .swiper-wrapper {
      -webkit-transition-timing-function: linear !important;
      -o-transition-timing-function: linear !important;
      transition-timing-function: linear !important;
      display: flex;
      align-items: center;
      .swiper-slide {
        width: auto;
      }
    }
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 42px;
      line-height: 48px;
    }
  }
`;

type ImageURLs = string;
const SwiperItems: ImageURLs[] = ["A", "B", "C", "D", "E"];

const SlideImgVertical = styled.img`
  border-radius: 12px;
  background-color: #d9d9d9;

  width: 234px;
  height: 300px;
  margin-right: 33px;
  @media (min-width: 1200px) {
    width: 420px;
    height: 540px;
    margin-right: 60px;
  }
`;
const SlideImgHorizontal = styled.img`
  border-radius: 12px;
  background-color: #d9d9d9;

  width: 300px;
  height: 234px;
  margin-right: 33px;
  @media (min-width: 1200px) {
    width: 540px;
    height: 420px;
    margin-right: 60px;
  }
`;
const SwiperSection = () => {
  return (
    <SectionWrap>
      <h2>
        플랫폼 비즈니스의 시작 <br />
        코드스페이스와 함께하세요
      </h2>
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }}
        speed={6000}
        loop
        modules={[Autoplay]}
      >
        {SwiperItems.map((item, index) => {
          const isVertical = (index + 1) % 2 !== 0;
          return <SwiperSlide key={index}>{isVertical ? <SlideImgVertical /> : <SlideImgHorizontal />}</SwiperSlide>;
        })}
      </Swiper>
    </SectionWrap>
  );
};
export default SwiperSection;
