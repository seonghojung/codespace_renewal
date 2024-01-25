import { forwardRef, useState, useEffect, RefObject } from "react";
import styled from "styled-components";

interface SubProjectProps {
  mt?: number;
  ml?: number;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  description?: string;
}

const ProjectCard = forwardRef<HTMLVideoElement, SubProjectProps>(({ mt, ml, src, alt, width, height, title, description }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoRef = ref as RefObject<HTMLVideoElement>;

    const handleMouseOver = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    videoRef.current?.addEventListener("canplay", handleMouseOver);

    return () => {
      videoRef.current?.removeEventListener("canplay", handleMouseOver);
    };
  }, [ref]);

  return (
    <>
      <SubProjectContainer mt={mt} ml={ml}>
        <ProjectVideo src={src} alt={alt} width={width} height={height} ref={ref} muted loop preload="" />
        <ProjectTextWrap>
          <ProjectName>{title}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectTextWrap>
      </SubProjectContainer>
    </>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

const SubProjectContainer = styled.div<SubProjectProps>`
  margin-top: ${({ mt }) => mt}px;

  @media (min-width: 1200px) {
    margin-top: 0px;
    margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0px")};
  }
`;

const ProjectVideo = styled.video<SubProjectProps>`
  width: 100%;
  height: 420px;
  object-fit: cover;

  cursor: pointer;

  /* 비디오 넣으면 삭제 */
  border: 1px solid #ccc;

  @media (min-width: 1200px) {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.04);
    }
  }
`;

const ProjectTextWrap = styled.div`
  margin: 14px 78px 0 10px;
`;

const ProjectName = styled.p`
  /* margin-top: 14px; */
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
