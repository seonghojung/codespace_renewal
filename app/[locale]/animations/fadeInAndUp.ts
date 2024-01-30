import { keyframes, css } from "styled-components";

const fadeInKeyframe = keyframes`
  from {
    transform: translate(0px, 20%);
    opacity: 0;
  }

  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;
export const fadeInAndUp = css`
  animation: ${fadeInKeyframe} 1s ease;
`;
