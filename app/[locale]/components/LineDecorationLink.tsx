import { styled } from "styled-components";
import LineDecoration from "./LineDecoration";
import RightArrowIcon from "../(home)/icon/RightArrowIcon";
const LinkContainer = styled.div`
  position: relative;
  svg {
    width: 15%;
    height: 100%;
    position: absolute;
    margin-left: 5px;
    opacity: 0.5;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;
const LineDecorationLink = ({ children, color }: { children: React.ReactNode; color?: string }) => {
  return (
    <LineDecoration color={color}>
      <LinkContainer>
        {children} <RightArrowIcon />
      </LinkContainer>
    </LineDecoration>
  );
};

export default LineDecorationLink;
