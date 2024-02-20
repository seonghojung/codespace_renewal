import styled from "styled-components";

const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  circle {
    stroke: currentColor;
  }
  path {
    stroke: currentColor;
  }
`;

const RightArrowIcon = () => {
  return (
    <Svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.5" />
      <path d="M9.52495 5.5L13.2 9.175L9.52495 12.85" />
      <path d="M13.2 9.17505L4.44995 9.17505" />
    </Svg>
  );
};
export default RightArrowIcon;
