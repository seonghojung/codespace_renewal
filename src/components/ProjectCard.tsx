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

const ProjectCard = ({ mt, ml, src, alt, width, height, title, description }: SubProjectProps) => {
  return (
    <>
      <SubProjectContainer mt={mt} ml={ml}>
        <ProjectImg src={src} alt={alt} width={width} height={height} />
        <ProjectTextWrap>
          <ProjectName>{title}</ProjectName>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectTextWrap>
      </SubProjectContainer>
    </>
  );
};

export default ProjectCard;

const SubProjectContainer = styled.div<SubProjectProps>`
  margin-top: ${({ mt }) => mt}px;

  @media (min-width: 1200px) {
    margin-top: 0px;
    margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0px")};
  }
`;

const ProjectImg = styled.img<SubProjectProps>`
  width: 375px;
  height: 400px;

  @media (min-width: 1200px) {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
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
