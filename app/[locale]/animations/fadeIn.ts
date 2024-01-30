import { keyframes, css } from "styled-components";

const fadeInKeyframe = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const fadeIn = css`
  animation: ${fadeInKeyframe} 1s ease;
`;
