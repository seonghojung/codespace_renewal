"use client";

// clay 경우 총 11개의 슬라이드이미지가 있음

import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import swiper0 from "../../../../public/images/home/swiper_0.png";
import swiper1 from "../../../../public/images/home/swiper_1.png";
import swiper2 from "../../../../public/images/home/swiper_2.png";
import swiper3 from "../../../../public/images/home/swiper_3.png";
import swiper4 from "../../../../public/images/home/swiper_4.png";
import swiper5 from "../../../../public/images/home/swiper_5.png";
import Image from "next/image";

const CarouselContainer = styled.div`
  position: relative;
`;
const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
  }
`;
const SlideWrap = styled.ul`
  display: flex;
  will-change: transform;
`;
const Slide = styled.div`
  display: flex;
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 0;

  @media (min-width: 1280px) {
    width: 486px;
    padding: 0 32px;
  }
`;

const Carousel = () => {
  const hoverStartTime = useRef<null | number>(null);
  const [isPrevHovering, setIsPrevHovering] = useState(false);
  const [isNextHovering, setIsNextHovering] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  // PrevBtn 관련 로직
  const prevHoverHandler = () => {
    setIsPrevHovering(true);
  };
  const unPrevhoverHandler = () => {
    setIsPrevHovering(false);
  };
  useEffect(() => {
    let interval: any;

    if (isPrevHovering) {
      hoverStartTime.current = performance.now();

      let speed = 0;
      const acceleration = 0.01;
      const maxSpeed = 3;
      interval = setInterval(() => {
        if (speed < maxSpeed) {
          speed += acceleration;
          setTranslateX((prevTranslateX) => prevTranslateX + speed);
        } else {
          setTranslateX((prevTranslateX) => prevTranslateX + maxSpeed);
        }
      }, 1);
    } else {
      let hoverDuration = 0;
      if (hoverStartTime.current) {
        hoverDuration = performance.now() - hoverStartTime.current;
      }
      let speed = hoverDuration < 800 ? 0.5 : 2.2;

      const deceleration = 0.01;
      interval = setInterval(() => {
        if (speed > 0) {
          speed -= deceleration;
          setTranslateX((prevTranslateX) => prevTranslateX + speed);
        } else {
          clearInterval(interval);
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isPrevHovering]);

  // NextBtn 관련 로직
  const nextHoverHandler = () => {
    if (innerWidth > 1279) {
      setIsNextHovering(true);
    }
  };
  const unNexthoverHandler = () => {
    setIsNextHovering(false);
  };

  useEffect(() => {
    let interval: any;
    if (isNextHovering) {
      hoverStartTime.current = performance.now();
      let speed = 0;
      const acceleration = 0.01;
      const maxSpeed = 3;
      interval = setInterval(() => {
        if (speed < maxSpeed) {
          speed += acceleration;
          setTranslateX((prevTranslateX) => prevTranslateX - speed);
        } else {
          setTranslateX((prevTranslateX) => prevTranslateX - maxSpeed);
        }
      }, 1);
    } else {
      let hoverDuration = 0;
      if (hoverStartTime.current) {
        hoverDuration = performance.now() - hoverStartTime.current;
      }
      let speed = hoverDuration < 800 ? 0.5 : 2.2;
      const deceleration = 0.01;
      interval = setInterval(() => {
        if (speed > 0) {
          speed -= deceleration;
          setTranslateX((prevTranslateX) => prevTranslateX - speed);
        } else {
          clearInterval(interval);
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isNextHovering]);
  return (
    <div style={{ marginTop: "100px" }}>
      <CarouselContainer>
        <PrevBtn type="button" onMouseEnter={prevHoverHandler} onMouseLeave={unPrevhoverHandler}></PrevBtn>
        <CarouselWrapper>
          <SlideWrap style={{ transform: `translateX(${translateX}px)` }}>
            <SlideImgs />
            <SlideImgs />
            <SlideImgs />
          </SlideWrap>
        </CarouselWrapper>
        <NextBtn type="button" onMouseEnter={nextHoverHandler} onMouseLeave={unNexthoverHandler}></NextBtn>
      </CarouselContainer>
    </div>
  );
};

export default Carousel;

//-------------------------------------------------------------------------------------------

// 스타일드컴포넌트 주석은 작업이 끝나고 모두 지울 예정
const DefaultImage = styled(Image)`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Slide1 = styled(DefaultImage)`
  display: block;
  max-width: 100%;
  height: auto;
  /* width: 246px; */
  /* height: 246px; */
  @media (min-width: 768px) {
    /* width: 256px; */
    /* height: 256px; */
  }
  @media (min-width: 1280px) {
    /* width: 422px; */
    /* height: 422px; */
  }
  @media (min-width: 1920px) {
    /* width: 574px; */
    /* height: 574px; */
  }
`;
export const Slide2 = styled(DefaultImage)`
  /* width: 246px; */
  /* height: 197px; */
  @media (min-width: 768px) {
    /* width: 256px; */
    /* height: 205px; */
  }
  @media (min-width: 1280px) {
    /* width: 422px; */
    /* height: 338px; */
  }
  @media (min-width: 1920px) {
    /* width: 574px; */
    /* height: 460px; */
  }
`;
export const Slide3 = styled(DefaultImage)`
  /* width: 246px; */
  /* height: 307px; */
  @media (min-width: 768px) {
    /* width: 256px; */
    /* height: 320px; */
  }
  @media (min-width: 1280px) {
    /* width: 422px; */
    /* height: 527px; */
  }

  @media (min-width: 1920px) {
    /* width: 574px; */
    /* height: 720px; */
  }
`;

const PrevBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  z-index: 5;
  width: 30%;
  height: 100%;
  @media (min-width: 1280px) {
    display: block;
    &&& {
      cursor: url("/svgs/arrow-left.svg"), auto;
    }
  }
`;

const NextBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 30%;
  height: 100%;

  @media (min-width: 1280px) {
    display: block;
    &&& {
      cursor: url(/svgs/arrow-right.svg), auto;
    }
  }
`;

const SlideImgs = () => {
  const images = [
    <Slide1 alt="swiper0" src={swiper0} key={0} />,
    <Slide2 alt="swiper1" src={swiper1} key={1} />,
    <Slide3 alt="swiper2" src={swiper2} key={2} />,
    <Slide1 alt="swiper3" src={swiper3} key={3} />,
    <Slide2 alt="swiper4" src={swiper4} key={4} />,
    <Slide3 alt="swiper5" src={swiper5} key={5} />,
  ];

  return (
    <div style={{ display: "flex" }}>
      {images.map((item, index) => {
        return (
          <li key={index} style={{ display: "flex" }}>
            <Slide>
              <ImgWrap>{item}</ImgWrap>
            </Slide>
          </li>
        );
      })}
    </div>
  );
};
