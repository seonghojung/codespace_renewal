import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  color: #000;
  display: inline-block;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const Address = styled.div`
  align-items: center;
  text-decoration-line: none;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 1;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    z-index: 0;
    background-color: #bbc4d2;
    transform: scaleX(1);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: 0 50%;
  }
  &:hover:before {
    transform: scaleX(1);
  }
`;

const UnderLineText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Address>{children}</Address>
    </Container>
  );
};

export default UnderLineText;
