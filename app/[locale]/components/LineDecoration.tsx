import { keyframes, styled } from "styled-components";

const DecorationLine = styled.span`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background-color: black;
  opacity: 1;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
  &:hover {
    ${DecorationLine} {
      transform-origin: left center;
      transform: scaleX(1);
      transition: transform 0.2s ease-out;
    }
  }
  &:not(:hover) {
    ${DecorationLine} {
      transform-origin: right center;
      transform: scaleX(0);
      transition: transform 0.2s ease-out;
    }
  }
`;

const LineDecoration = ({ children, color = "black" }: { children: React.ReactNode; color?: string }) => {
  return (
    <Container>
      {children}
      <DecorationLine style={{ backgroundColor: `${color}` }} />
    </Container>
  );
};

export default LineDecoration;
