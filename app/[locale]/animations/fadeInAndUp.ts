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
// export const fadeInAndUp = css`
//   animation: ${fadeInKeyframe} 1s ease;
// `;

const createFadeInAndUpAnimation = (duration: number, delay: number) => css`
  animation: ${duration}s ${fadeInKeyframe} ${delay}s ease forwards;
`;

export const fadeInAndUp = createFadeInAndUpAnimation(0.5, 0.5);
export const fadeInAndUp2Sec = createFadeInAndUpAnimation(0.5, 1);
export const fadeInAndUp3Sec = createFadeInAndUpAnimation(0.5, 1.5);
