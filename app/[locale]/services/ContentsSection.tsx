"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

const SectionWrap = styled.section`
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;
const ContentItems = styled.ul`
  @media (min-width: 768px) {
    padding-bottom: 140px;
  }
`;

interface IContent {
  thumbnail: string;
  subtitle: string;
  h3: string;
  description: string;
  descriptionMb: string;
  techDescription: string[];
}
const contents: IContent[] = [
  {
    thumbnail: "/videos/service/web.mp4",
    subtitle: "WEB",
    h3: `어떤 환경에서나 
유연한 웹사이트`,
    description:
      "다양한 디바이스, 브라우저에서도 유연한 웹사이트를 통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성 고려, SEO 최적화 텐츠 가독성 향상이 모바일과 PC 등 다양한 환경에서 올바르게 보여질 수 있도록 제공하고 있습니다.",
    descriptionMb: `다양한 디바이스, 브라우저에서도 유연한 웹사이트를
통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성
고려, SEO 최적화 콘텐츠 가독성 향상이 모바일과 PC 등
다양한 환경에서 올바르게 보여질 수 있도록
제공하고 있습니다.`,
    techDescription: [
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
    ],
  },
  {
    thumbnail: "/videos/service/app.mp4",
    subtitle: "APP",
    h3: "핵심 기능이 담긴 애플리케이션",
    description:
      "비즈니스에 필요한 핵심 기능만 올바르게 담긴 애플리케이션을 개발하여 합리적인 가격으로 투자에 대한 최대 가치를 제공하고 있습니다. 서비스의 품질과 목표를 동시에 달성하는 앱 개발의 여정을 코드스페이스와 함께하세요.",

    descriptionMb: `비즈니스에 필요한 핵심 기능만 올바르게 담긴
애플리케이션을 개발하여 합리적인 가격으로 투자에 대한
최대 가치를 제공하고 있습니다. 서비스의 품질과 목표를 동시에
달성하는 앱 개발의 여정을 코드스페이스와 함께하세요.`,
    techDescription: [
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
    ],
  },
  {
    thumbnail: "/videos/service/ui.mp4",
    subtitle: "UI/UX",
    h3: `감각적인 UX을 통해
만들어지는 매력적인 UI`,
    description:
      "사용자 패턴을 분석하여 파트너가 바라보는 산업에 알맞는 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것이 아닌 향후 전개될 비즈니스 확장을 고려하여 서비스를 제공하고 있습니다.",

    descriptionMb: `사용자 패턴을 분석하여 파트너가 바라보는 산업에 알맞
    는 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것
    이 아닌  향후 전개될 비즈니스 확장을 고려하여 서비스를
    제공하고 있습니다.`,
    techDescription: [
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
    ],
  },
  {
    thumbnail: "/videos/service/cms.mp4",
    subtitle: "CMS SOLUTION",
    h3: `사용자 친화적인 
CMS 솔루션`,
    description:
      "모두가 쉽게 제작할 수 있도록 제작 된 강력한 CMS 솔루션으로 콘텐츠를 혁신적으로 관리하고 고객 관리의 효율성을 높일 수 있는 운영에 필요한 개발 서비스를 제공하고 있습니다.",
    descriptionMb: `모두가 쉽게 제작할 수 있도록 제작 된 강력한 CMS 솔루
션으로 콘텐츠를 혁신적으로 관리하고 고객 관리의 효율
성을 높일 수 있는 운영에 필요한 개발 서비스를 
제공하고 있습니다.`,
    techDescription: [
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
    ],
  },
  {
    thumbnail: "/videos/service/seo.mp4",
    subtitle: "SEO",
    h3: `핵심적인 키워드로 만나는
핵심 서비스 고객`,
    description:
      "플랫폼의 검색 가시성을 극대화하고 발전하는 기술과 트렌드를 활용하여 파트너의 서비스가 핵심 고객에게 올바르게 보여질 수 있도록 검색 트래픽 최적화 서비스를 제공하고 있습니다.",

    descriptionMb: `플랫폼의 검색 가시성을 극대화하고 발전하는 기술과 트
    렌드를 활용하여 파트너의 서비스가 핵심 고객에게 올바
    르게 보여질 수 있도록 검색 트래픽 최적화 서비스를 제공
    하고 있습니다.`,
    techDescription: [
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
      "UI/UX Market Research",
      "UX Stretegy",
      "Product Launcher Icon",
    ],
  },
];

interface Prop {
  content: IContent;
  isLeftImage: boolean;
  idx: number;
  isRspPc: boolean;
}

interface IContentImg {
  $scrollY: number;
  $minValue?: number;
  $maxValue?: number;
}

const ContentImg = styled.video<IContentImg>`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  background: #d9d9d9;
  @media (min-width: 768px) {
    max-width: 630px;
    width: 48.7%;
    /* height: 100%; */
    aspect-ratio: 0.768;
    border-radius: 10px;
    will-change: transform;
    /* transform: translateY(${(props) => props.$scrollY}px); translateY에 스크롤 값 적용 */
    /* transform: translateY(${(props) => Math.min(Math.max(props.$scrollY))}px); */
    /* transform: translateY(clamp(${(props) => props.$minValue}px, ${(props) => props.$scrollY}px, ${(props) => props.$maxValue}px)); */
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); // 부드러운 애니메이션을 위한 트랜지션
  }
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContentWrap = styled.div`
  padding: 60px 10px 140px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.25;
    color: #000;
    word-break: keep-all;
  }
  h3 {
    margin-top: 20px;
    font-size: 26px;
    line-height: 1.615;
    font-weight: 500;
    word-break: keep-all;
  }
  p {
    margin-top: 40px;
    font-size: 16px;
    line-height: 1.625;
    color: rgba(0, 0, 0, 0.8);
    white-space: pre-wrap;
  }
  @media (min-width: 768px) {
    width: calc((100% + 50px) / 12 * 5 - 16px);
    padding: 60px 0;

    h2 {
      font-size: clamp(32px, 4.166vw, 64px);
    }

    h3 {
      font-size: clamp(32px, 4.166vw, 64px);
      font-weight: 500;
      line-height: 1.31;
      color: #000;
      white-space: pre-wrap;
    }

    p {
      margin-top: 20px;
      font-size: clamp(16px, 2.083vw, 26px);
      line-height: 1.625;
      color: rgba(0, 0, 0, 0.8);
      word-break: keep-all;
    }
  }
`;
const ContentWrapLeft = styled(ContentWrap)`
  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;
const ContentWrapRight = styled(ContentWrap)`
  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

const TechDescItems = styled.ul`
  margin-top: 28px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 6px;
  }
`;

const Line = styled.span`
  margin-right: 10px;
  display: block;
  width: 13px;
  height: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const TechDescItem = styled.li`
  color: rgba(0, 0, 0, 0.8);
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 16px;
    font-size: clamp(16px, 2.083vw, 20px);
    font-weight: 600;
  }
`;
const ContentItem = ({ content, isLeftImage, idx, isRspPc }: Prop) => {
  const [scrollY, setScrollY] = useState(85.91);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const minValue = -66; // 최소값
  const maxValue = 85.91; // 최대값

  const handleScroll = () => {
    // if (window.scrollY < 150) {
    //   const newScrollY = Math.max(-66, 85.91 - window.scrollY);
    //   setScrollY(newScrollY);
    // }
    let currentScrollY = window.scrollY;

    // 이전 스크롤 위치와 현재 스크롤 위치의 차이 계산
    let deltaY = currentScrollY - prevScrollY;

    // 이동한 거리를 콘솔에 출력

    // 새로운 스크롤 위치 계산 및 적용
    // let newScrollY = Math.max(-66, Math.min(85.91, scrollY - deltaY));
    // setScrollY(newScrollY);

    // 이전 스크롤 위치 업데이트
    // setPrevScrollY(currentScrollY);

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
        <ContentImg $scrollY={scrollY} $minValue={minValue} $maxValue={maxValue} src={content.thumbnail} muted autoPlay loop />
        <ContentWrapLeft>
          <h2>{content.subtitle}</h2>
          <h3>{content.h3}</h3>
          <p>{isRspPc ? content.description : content.descriptionMb}</p>
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
        <ContentImg
          $scrollY={scrollY}
          $minValue={minValue}
          $maxValue={maxValue}
          src={content.thumbnail}
          width={740}
          height={460}
          data-imgid={`img-${idx}`}
          muted
          autoPlay
          loop
        />
      </Wrapper>
    );
  }
};

const ContentsSection = () => {
  const [isRspPc, setIsRspPc] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = window.innerWidth;
      setIsRspPc(bodyWidth > 767);
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
          return <ContentItem isRspPc={isRspPc} idx={index} content={content} isLeftImage={isRspPc ? (index + 1) % 2 !== 0 : true} key={index} />;
        })}
      </ContentItems>
    </SectionWrap>
  );
};
export default ContentsSection;
