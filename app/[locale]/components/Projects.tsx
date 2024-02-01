import Link from "next/link";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { css, keyframes, styled } from "styled-components";
interface StyleProp {
  $isView: boolean;
}
export interface ProjectProps {
  src: string;
  title: string;
  description: string;
  categories: string[];
  date: string;
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
  margin-top: 10px;
`;
const Container = styled.li`
  padding-top: 24px;
  padding-bottom: 40px;
  ${CategoryContainer} {
    opacity: 1;
  }
  @media (min-width: 768px) {
    padding: 40px 0;
    margin: 0 35.5px;
    ${CategoryContainer} {
      opacity: 0;
    }
    &:hover {
      ${CategoryContainer} {
        opacity: 1;
      }
    }
  }
`;
const ContainerA = styled(Container)`
  @media (min-width: 768px) {
    width: calc(50% - 71px);
  }
`;
const ContainerB = styled(ContainerA)`
  @media (min-width: 768px) {
    padding-top: 160px;
  }
`;
const ContainerC = styled(Container)`
  @media (min-width: 768px) {
    width: 80.1%;
  }
`;

const floatingUp = css`
  animation: ${fadeIn} 0.6s ease forwards;
`;

const CategoryItem = styled.li`
  font-size: 16px;
  display: inline;
  list-style: none outside none;
  position: relative;
  color: #637695;

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
  &:hover {
  }
`;
const ProjectVideo = styled.video`
  aspect-ratio: 1;
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  cursor: pointer;
  @media (min-width: 768px) {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;
const InfoWrap = styled.div`
  margin-top: 20px;
  padding-left: 15px;
  @media (min-width: 768px) {
    padding-left: 0px;
  }
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #000;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
`;
const ProjectItems = styled.ul`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -35.5px;
  }
`;
const ProjectLayout = styled.div`
  @media (min-width: 768px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  margin-left: 0px;
  margin-right: 0px;
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
    return <ContainerB>{children}</ContainerB>;
  } else if (isCaseC) {
    return <ContainerC>{children}</ContainerC>;
  } else if (isCaseD) {
    return <ContainerB>{children}</ContainerB>;
  } else if (isCaseE) {
    return <ContainerA>{children}</ContainerA>;
  } else if (isCaseF) {
    return <ContainerC style={{ marginLeft: "auto" }}>{children}</ContainerC>;
  }
};

//@TODO: href 조치 @Thor
const ProjectCard = ({ src: { src, title, description, categories }, href = "airkid" }: { src: ProjectProps; href?: string }) => {
  const [ViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    <Link href={`/project/${href}`}>
      <SubProjectContainer ref={ViewRef} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} $isView={inView}>
        <VideoWrap>
          <ProjectVideo src={src} ref={ref} muted loop preload="" />
        </VideoWrap>
        <InfoWrap>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CategoryItems categories={categories} />
        </InfoWrap>
      </SubProjectContainer>
    </Link>
  );
};

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <ProjectLayout>
      <ProjectItems>
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index}>
            <ProjectCard src={project} />
          </ProjectItem>
        ))}
      </ProjectItems>
    </ProjectLayout>
  );
};

export default Projects;
