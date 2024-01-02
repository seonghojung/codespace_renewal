import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface SwiperCarouselProps {
  slideImgs: {
    src: string;
    alt: string;
  }[];
}

interface SlideProps {
  width: number;
  pcwidth: number;
  mt: number;
  pcmt: number;
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
        const slidePCWidth = isEven ? 540 : 420;
        const slideMarginTop = isEven ? 33 : 0;
        const slidePCMarginTop = isEven ? 60 : 0;

        return (
          <Slide key={`carousel${i}`} width={slideWidth} pcwidth={slidePCWidth} mt={slideMarginTop} pcmt={slidePCMarginTop}>
            <Carousel src={img.src} alt={img.alt} />
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

    @media (min-width: 1200px) {
      width: ${({ pcwidth }) => `${pcwidth}px`};
      margin-top: ${({ pcmt }) => `${pcmt}px`};
    }
  }
`;

const Carousel = styled.img`
  width: 100%;
  height: 100%;
`;
