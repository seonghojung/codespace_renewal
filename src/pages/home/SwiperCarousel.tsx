import styled from "styled-components";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SwiperCarouselProps {
  slideImgs: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

interface SlideProps {
  width: number;
  mt: number;
}

const SwiperCarousel = ({ slideImgs }: SwiperCarouselProps) => {
  return (
    <Swiper className="mySwiper" slidesPerView={2} spaceBetween={34} mousewheel>
      {slideImgs.map((img, i) => {
        const isEven = i % 2 === 0;
        const slideWidth = isEven ? 300 : 234;
        const slideMarginTop = isEven ? 33 : 0;

        return (
          <Slide key={`carousel${i}`} width={slideWidth} mt={slideMarginTop}>
            {/* fixme. 이미지속성 추가 및 수정 (src={img.src}) */}
            <Carousel src={img.src} alt={img.alt} width={img.width} height={img.height} />
          </Slide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCarousel;

const Slide = styled(SwiperSlide)<SlideProps>`
  width: ${({ width }) => `${width}px`} !important;
  margin-top: ${({ mt }) => `${mt}px`};
`;

const Carousel = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
