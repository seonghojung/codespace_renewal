"use client";

import { styled } from "styled-components";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";

interface ProjectLinkProps {
  color: string;
}
const ProjectLink = ({ color }: ProjectLinkProps) => {
  return (
    <LinkWrap>
      <Link href="/project">
        <LinkText color={color}>More</LinkText>
        {color === "#fff" ? <LinkIcon color="white" /> : <LinkIcon />}
      </Link>
    </LinkWrap>
  );
};

export default ProjectLink;

const LinkWrap = styled.div``;

const LinkText = styled.span<ProjectLinkProps>`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  color: ${({ color }) => color};

  &:hover {
    color: pink;
  }
`;
const LinkIcon = styled(ArrowIcon)`
  margin-left: 5px;
  width: 18px;
  height: 18px;
`;
