"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
const SectionWrap = styled.section`
  padding-bottom: 20px;

  @media (min-width: 1200px) {
    padding-left: 120px;
    padding-right: 120px;
    padding-bottom: 271px;
  }
`;
const ContentItems = styled.ul``;

interface IContent {
  image: string;
  subtitle: string;
  h3: string;
  description: string;
  techDescription: string[];
}
const contents: IContent[] = [
  {
    image: "/",
    subtitle: "WEBSITES",
    h3: "어디서든 다양한 경험의 확장이 가능하도록",
    description:
      "웹사이트 개발에 대한 기술적 내용을 넣어주세요. 이 부분은 벤틀리가항목과 함께 간단한 설명이 들어갈 수 있는 위치로 본문 텍스트 역할을하는 영역으로 봐주시면 됩니다. 최대 3줄 안에 들어갈 수 있는게 좋습니다.",
    techDescription: ["기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치"],
  },
  {
    image: "/",
    subtitle: "APPLICATION",
    h3: "고객의 손에 우리의 서비스가 구현 되는 것을 도와주는",
    description:
      "앱 개발에 대한 기술적 내용을 넣어주세요. 이 부분은 벤틀리가 항목과 함께 간단한 설명이 들어갈 수 있는 위치로 본문 텍스트 역할을 하는 영역으로 봐주시면 됩니다. 최대 3줄 안에 들어갈 수 있는게 좋습니다.",
    techDescription: ["기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치"],
  },
  {
    image: "/",
    subtitle: "MANAGEMENT",
    h3: "올바른 서비스로 발전할 수 있도록 함께 노력하는",
    description:
      "앱 개발에 대한 기술적 내용을 넣어주세요. 이 부분은 벤틀리가 항목과 함께 간단한 설명이 들어갈 수 있는 위치로 본문 텍스트 역할을 하는 영역으로 봐주시면 됩니다. 최대 3줄 안에 들어갈 수 있는게 좋습니다.",
    techDescription: ["기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치"],
  },
  {
    image: "/",
    subtitle: "APPLICATION",
    h3: "고객의 행동을 예측하고 비주얼 시스템을 통해 이끌어내는",
    description:
      "사용자 패턴을 기반으로 파트너가 바라보는 산업에 알맞는 사용자 경험 설계를 기반으로 한 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것이 아닌 향후 전개될 비즈니스의 확장을 고려한 전략을 제공하고 있습니다.",
    techDescription: ["UI/UX Market Research", "Product Iconography", "UX Stretegy", "User Interface", "Product Launcher Icon", "SNS Design"],
  },
  {
    image: "/",
    subtitle: "CMS SOLUTION",
    h3: "자체적으로 제품의 고도화를 이어갈 수 있도록 도와주는",
    description:
      "앱 개발에 대한 기술적 내용을 넣어주세요. 이 부분은 벤틀리가 항목과 함께 간단한 설명이 들어갈 수 있는 위치로 본문 텍스트 역할을 하는 영역으로 봐주시면 됩니다. 최대 3줄 안에 들어갈 수 있는게 좋습니다.",
    techDescription: ["기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치", "기술에 대해 설명이 들어가는 위치"],
  },
];

interface Prop {
  content: IContent;
  isLeftImage: boolean;
  idx: number;
}

interface IContentImg {
  $scrollY: number;
  $minValue?: number;
  $maxValue?: number;
}

const ContentImg = styled(Image)<IContentImg>`
  will-change: transform;
  /* transform: translateY(${(props) => props.$scrollY}px); translateY에 스크롤 값 적용 */
  /* transform: translateY(${(props) => Math.min(Math.max(props.$scrollY))}px); */

  transform: translateY(clamp(${(props) => props.$minValue}px, ${(props) => props.$scrollY}px, ${(props) => props.$maxValue}px));
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); // 부드러운 애니메이션을 위한 트랜지션
  display: block;
  width: 100%;
  height: 400px;
  background: #d9d9d9;
  @media (min-width: 1200px) {
    width: 580px;
    height: 460px;
    border-radius: 20px;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 1200px) {
    &:not(:first-child) {
      margin-top: 160px;
    }
    display: flex;
  }
`;

const ContentWrap = styled.div`
  padding: 40px 10px 140px;
  span {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
  h2 {
    margin-top: 12px;
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    word-break: keep-all;
  }
  p {
    margin-top: 22px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }
  @media (min-width: 1200px) {
    flex: 1;
  }
`;
const ContentWrapLeft = styled(ContentWrap)`
  @media (min-width: 1200px) {
    padding: 56px 0px 57px 160px;
  }
`;
const ContentWrapRight = styled(ContentWrap)`
  @media (min-width: 1200px) {
    padding: 56px 121px 57px 40px;
  }
`;

const TechDescItems = styled.ul`
  margin-top: 28px;
`;
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Line = styled.span`
  margin-right: 14px;
  display: block;
  width: 26px;
  height: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const TechDescItem = styled.li`
  color: rgba(0, 0, 0, 0.8);
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 1200px) {
    font-size: 16px;
    font-weight: 600;
  }
`;
const ContentItem = ({ content, isLeftImage, idx }: Prop) => {
  const [scrollY, setScrollY] = useState(85.91);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const minValue = -66; // 최소값
  const maxValue = 85.91; // 최대값

  console.log(scrollY);
  console.log(prevScrollY);

  const handleScroll = () => {
    // if (window.scrollY < 150) {
    //   const newScrollY = Math.max(-66, 85.91 - window.scrollY);
    //   setScrollY(newScrollY);
    // }
    let currentScrollY = window.scrollY;

    // 이전 스크롤 위치와 현재 스크롤 위치의 차이 계산
    let deltaY = currentScrollY - prevScrollY;

    // 이동한 거리를 콘솔에 출력
    console.log("이동한 거리:", deltaY);

    // 새로운 스크롤 위치 계산 및 적용
    let newScrollY = Math.max(-66, Math.min(85.91, scrollY - deltaY));
    setScrollY(newScrollY);

    // 이전 스크롤 위치 업데이트
    setPrevScrollY(currentScrollY);

    // const newScrollY = Math.max(minValue, Math.min(maxValue, scrollY - currentScrollY));
    // setScrollY(newScrollY);
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 스크롤 이벤트를 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되면 이벤트를 제거하여 메모리 누수 방지
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLeftImage) {
    return (
      <Wrapper>
        <ContentImg $scrollY={scrollY} $minValue={minValue} $maxValue={maxValue} src={content.image} alt={""} width={100} height={100} data-imgid={`img-${idx}`} />
        <ContentWrapLeft>
          <h2>{content.subtitle}</h2>
          <h3>{content.h3}</h3>
          <p>{content.description}</p>
          <TechDescItems>
            {content.techDescription.map((techDescItem, index) => {
              return (
                <ItemWrap key={index}>
                  <Line />
                  <TechDescItem>{techDescItem}</TechDescItem>
                </ItemWrap>
              );
            })}
          </TechDescItems>
        </ContentWrapLeft>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ContentWrapRight>
          <h2>{content.subtitle}</h2>
          <h3>{content.h3}</h3>
          <p>{content.description}</p>
          <TechDescItems>
            {content.techDescription.map((techDescItem, index) => {
              return (
                <ItemWrap key={index}>
                  <Line />
                  <TechDescItem>{techDescItem}</TechDescItem>
                </ItemWrap>
              );
            })}
          </TechDescItems>
        </ContentWrapRight>
        <ContentImg $scrollY={scrollY} $minValue={minValue} $maxValue={maxValue} src={content.image} alt={""} width={100} height={100} data-imgid={`img-${idx}`} />
      </Wrapper>
    );
  }
};

const ContentsSection = () => {
  const [isRspPc, setIsRspPc] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.clientWidth;
      setIsRspPc(bodyWidth > 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionWrap>
      <ContentItems>
        {contents.map((content, index) => {
          return <ContentItem idx={index} content={content} isLeftImage={isRspPc ? (index + 1) % 2 !== 0 : true} key={index} />;
        })}
      </ContentItems>
    </SectionWrap>
  );
};
export default ContentsSection;
