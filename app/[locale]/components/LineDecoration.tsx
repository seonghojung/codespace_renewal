import { styled } from "styled-components";

const DecorationLine = styled.span`
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background-color: black;
  opacity: 0.45;

  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: right center;
  transform: scaleX(0);

  &.active {
    transform-origin: left center;
    transform: scaleX(1);
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: auto;

  &:hover {
    ${DecorationLine} {
      transform-origin: left center;
      transform: scaleX(1);
    }
  }

  &.active {
    ${DecorationLine} {
      transform-origin: left center;
      transform: scaleX(1);
    }
  }
`;

const LineDecoration = ({ children, color = "black", active }: { children: React.ReactNode; color?: string; active?: boolean }) => {
  return (
    <Container>
      {children}
      <DecorationLine style={{ backgroundColor: `${color}` }} className={active ? "active" : ""} />
    </Container>
  );
};

export default LineDecoration;
