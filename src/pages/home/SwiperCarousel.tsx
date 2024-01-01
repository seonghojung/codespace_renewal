import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    <Container
      className="mySwiper"
      slidesPerView={"auto"}
      spaceBetween={34}
      autoplay={{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }}
      speed={6000}
      loop
      modules={[Autoplay]}
    >
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
    </Container>
  );
};

export default SwiperCarousel;

const Container = styled(Swiper)`
  &&& {
    margin-top: 40px;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

const Slide = styled(SwiperSlide)<SlideProps>`
  &&& {
    width: ${({ width }) => `${width}px`};
    margin-top: ${({ mt }) => `${mt}px`};
  }
`;

const Carousel = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
