"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { css, keyframes, styled } from "styled-components";
import { ProjectProps } from "@/app/projects";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
interface StyleProp {
  $isView: boolean;
}

const fadeIn = keyframes`
    from {
      opacity: 30%;
      transform: translate(0px, 10%) scale(0.98);
    }
  
    to {
      opacity: 1;
      transform: translate(0px, 0px)  scale(1);
    }
  `;
const CategoryContainer = styled.ul`
  opacity: 0;
  transition: opacity 0.5s ease;
  margin-top: 4px;

  @media (min-width: 1280px) {
    margin-top: 12px;
  }
  @media (min-width: 1920px) {
    margin-top: 10px;
  }
`;
const Container = styled.li`
  &:first-child,
  &:nth-child(2) {
    padding-top: 0px;
  }
  ${CategoryContainer} {
    opacity: 1;
  }

  padding-bottom: 60px;
  @media (min-width: 768px) {
    ${CategoryContainer} {
      opacity: 0;
    }
    &:hover {
      ${CategoryContainer} {
        opacity: 1;
      }
    }
    padding-bottom: 0px;
  }
  @media (min-width: 1280px) {
    padding-left: 57px;
    padding-right: 57px;
  }
  @media (min-width: 1920px) {
    padding-left: 63px;
    padding-right: 63px;
  }
`;
const ContainerA = styled(Container)`
  @media (min-width: 768px) {
    width: calc(50% - 35.5px);
    margin-right: 35.5px;
    padding-top: 27px;
  }
  @media (min-width: 1280px) {
    width: calc(50%);
    padding-top: 167px;
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (min-width: 1920px) {
    padding-top: 200px;
    padding-bottom: 177px;
  }
`;
const ContainerB = styled(ContainerA)`
  @media (min-width: 768px) {
    margin-left: 35.5px;
    margin-right: 0px;
    padding-top: 0px;
  }
  @media (min-width: 1280px) {
    padding-top: 98px;
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (min-width: 1920px) {
    padding-top: 140px;
    padding-bottom: 62px;
  }
`;
const ContainerC = styled(Container)`
  @media (min-width: 768px) {
    width: 88%;
    padding-top: 148px;
    padding-bottom: 158px;
  }
  @media (min-width: 1280px) {
    width: calc(80% + 114px);
    padding-top: 151px;
    padding-bottom: 53px;
  }
  @media (min-width: 1920px) {
    width: calc(81.3% + 126px);
    padding-top: 60px;
    padding-bottom: 62px;
  }
`;
const ContainerAprime = styled(ContainerA)`
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    margin-left: 35.5px;
    margin-right: 0px;
  }
  @media (min-width: 1280px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const ContainerBprime = styled(ContainerB)`
  margin-left: 0px;
  margin-right: 0px;
  @media (min-width: 768px) {
    margin-left: 0px;
    margin-right: 35.5px;
  }

  @media (min-width: 1280px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const floatingUp = css`
  animation: ${fadeIn} 0.6s ease forwards;
`;

const CategoryItem = styled.li`
  font-size: 14px;
  display: inline;
  list-style: none outside none;
  position: relative;
  color: #8f99aa;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19.2px;
  }
  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 21.6px;
  }
  &:not(:last-child) {
    position: relative;
    padding-right: 15px;
    @media (min-width: 768px) {
      padding-right: 36px;
    }
  }
  &:not(:last-child)::before {
    content: "";
    position: absolute;
    right: 6px;
    top: 8.5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #637695;
    @media (min-width: 768px) {
      right: 16px;
      top: 8.5px;
      width: 4px;
      height: 4px;
    }
  }
`;

const SubProjectContainer = styled.div<StyleProp>`
  opacity: 0;
  ${({ $isView }) => $isView && floatingUp}
`;
const VideoWrap = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    img {
      transition: transform 1.5s ease;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
const ProjectVideo = styled.video`
  display: block;
  width: 100%;
  object-fit: cover;

  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const InfoWrap = styled.div`
  margin-top: 16px;
  padding-left: 24px;
  @media (min-width: 768px) {
    padding-left: 0px;
  }
  @media (min-width: 1280px) {
    margin-top: 20px;
  }
`;
const Title = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  color: #000;

  @media (min-width: 1280px) {
    font-size: 30px;
    line-height: 36px;
  }
  @media (min-width: 1920px) {
    font-size: 36px;
    line-height: 43.2px;
  }
`;

const Description = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 1280px) {
    margin-top: 8px;
    font-size: 16px;
  }
  @media (min-width: 1920px) {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const ProjectItems = styled.ul`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1280px) {
    max-width: 1244px;
    margin: 0 auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (min-width: 1920px) {
    max-width: 1662px;
  }
`;
const ThumbnailImage = styled(Image)`
  display: block;
`;

const CategoryItems = ({ categories }: { categories: string[] }) => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => {
        return <CategoryItem key={index}>{category}</CategoryItem>;
      })}
    </CategoryContainer>
  );
};
const ProjectItem = ({ index, children }: { index: number; children: React.ReactNode }) => {
  const isCaseA = index === 0 || index % 6 === 0;
  const isCaseB = index === 1 || index % 6 === 1;
  const isCaseC = index === 2 || index % 6 === 2;
  const isCaseD = index === 3 || index % 6 === 3;
  const isCaseE = index === 4 || index % 6 === 4;
  const isCaseF = index === 5 || index % 6 === 5;

  if (isCaseA) {
    return <ContainerA>{children}</ContainerA>;
  } else if (isCaseB) {
    return (
      <ContainerB>
        <ScrollInteractionContainer>{children}</ScrollInteractionContainer>
      </ContainerB>
    );
  } else if (isCaseC) {
    return <ContainerC>{children}</ContainerC>;
  } else if (isCaseD) {
    return <ContainerBprime>{children}</ContainerBprime>;
  } else if (isCaseE) {
    return (
      <ContainerAprime>
        <ScrollInteractionContainer>{children}</ScrollInteractionContainer>
      </ContainerAprime>
    );
  } else if (isCaseF) {
    return <ContainerC style={{ marginLeft: "auto" }}>{children}</ContainerC>;
  }
};

const ScrollInteractionContainer = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div style={{ y: isWideScreen ? videoScale : undefined }} ref={ref}>
      {children}
    </motion.div>
  );
};

//@TODO: 상세페이지들 워딩 다 나오면 href 조치 @Thor
const ProjectCard = ({
  src: {
    videoSrc,
    image: { src, src1280 },
    title,
    description,
    categories,
  },
}: {
  src: ProjectProps;
}) => {
  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ref = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const handleMouseOut = () => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };

  return (
    <SubProjectContainer ref={ViewRef} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} $isView={inView}>
      <VideoWrap>
        <ThumbnailImage src={isWideScreen ? src1280 : src} alt="" sizes="(max-width: 767px) 100vw, (max-width: 1919px) 1992px, 2708px" />
      </VideoWrap>
      <InfoWrap>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CategoryItems categories={categories} />
      </InfoWrap>
    </SubProjectContainer>
  );
};
const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <ProjectItems>
      {projects.map((project, index) => {
        return (
          <ProjectItem key={index} index={index}>
            {/* 
            //@TODO: 잠시 상세페이지 이동 기능은 없애고 디자인 나오면 주석해제
            {project.details ? (
              <Link href={`/project/${project.id}`} style={{ cursor: "pointer" }}>
                <ProjectCard src={project} />
              </Link>
            ) : ( */}
            <ProjectCard src={project} />
            {/* )} */}
          </ProjectItem>
        );
      })}
    </ProjectItems>
  );
};

export default Projects;
