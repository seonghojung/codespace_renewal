import { forwardRef, useState, useEffect, RefObject, useRef } from "react";
import styled from "styled-components";

interface SubProjectProps {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  categories?: string[];
}

const ProjectCard = ({ src: { src, alt, title, description } }: { src: SubProjectProps }) => {
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
    <SubProjectContainer onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
      <ProjectVideo src={src} alt={alt} ref={ref} muted loop preload="" />
      <ProjectTextWrap>
        <ProjectName>{title}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectTextWrap>
    </SubProjectContainer>
  );
};

export default ProjectCard;

const SubProjectContainer = styled.div<SubProjectProps>`
  @media (min-width: 1200px) {
  }
`;

const ProjectVideo = styled.video<SubProjectProps>`
  width: 100%;
  height: 420px;
  object-fit: cover;

  cursor: pointer;

  @media (min-width: 1200px) {
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.04);
    }
  }
`;

const ProjectTextWrap = styled.div`
  margin: 14px 78px 0 10px;
`;

const ProjectName = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: #000;
`;

const ProjectDescription = styled.p`
  margin-top: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  color: rgba(0, 0, 0, 0.8);
`;
