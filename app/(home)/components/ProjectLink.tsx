"use client";

import { styled } from "styled-components";
import Link from "next/link";
import { LinkSVG, LinkWhiteSVG } from "@/app/components/icons";

interface ProjectLinkProps {
  color: string;
}
const ProjectLink = ({ color }: ProjectLinkProps) => {
  return (
    <LinkWrap>
      <Link href="/project">
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
const LinkIcon = styled(LinkSVG)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;
const LinkWhiteIcon = styled(LinkWhiteSVG)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;
