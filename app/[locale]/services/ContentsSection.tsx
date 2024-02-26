"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ILocale } from "../(home)/page";
import { IContent, contents } from "@/app/data/services";
import ContentItem from "./components/ContentItem";

const getContents = (locale: string): IContent[] => {
  if (locale === "en") return contents.en;
  if (locale === "ko") return contents.ko;
  return contents.en;
};

// styled-components

const Wrap = styled.article`
  margin-top: 100px;
  @media (min-width: 768px) {
    margin: 120px 40px 80px;
  }
  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 160px auto 80px;
  }
  @media (min-width: 1920px) {
    max-width: 1536px;
    margin: 100px auto 100px;
  }
`;

const ContentsSection = ({ locale }: { locale: ILocale }) => {
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
    <Wrap>
      <ul>
        {getContents(locale).map((content, index) => {
          return <ContentItem isRspPc={isRspPc} idx={index} content={content} key={index} />;
        })}
      </ul>
    </Wrap>
  );
};
export default ContentsSection;
