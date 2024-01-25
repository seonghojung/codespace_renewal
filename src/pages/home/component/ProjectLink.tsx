import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as LinkImg } from "../../../svgs/arrow_icon.svg";
import { ReactComponent as LinkWhiteImg } from "../../../svgs/arrow_icon-white.svg";

interface ProjectLinkProps {
  color: string;
}

const ProjectLink = ({ color }: ProjectLinkProps) => {
  return (
    <LinkWrap>
      <Link to="/project">
        <LinkText color={color}>More</LinkText>
        {color === "#fff" ? <LinkWhiteIcon /> : <LinkIcon />}
      </Link>
    </LinkWrap>
  );
};

export default ProjectLink;

const LinkWrap = styled.div`
  margin-top: 40px;
  @media (min-width: 1200px) {
    margin-top: 60px;
  }
`;

const LinkText = styled.span<ProjectLinkProps>`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  color: ${({ color }) => color};

  &:hover {
    color: pink;
  }
`;
const LinkIcon = styled(LinkImg)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;
const LinkWhiteIcon = styled(LinkWhiteImg)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;
