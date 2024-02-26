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

export const createFadeInAndUpAnimation = (duration: number, delay: number) => css`
  animation: ${duration}s ${fadeInKeyframe} ${delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const fadeInAndUp = createFadeInAndUpAnimation(0.5, 0.5);
export const fadeInAndUp2Sec = createFadeInAndUpAnimation(0.5, 0.75);
export const fadeInAndUp3Sec = createFadeInAndUpAnimation(0.5, 1);

const imageFadeInKeyframe = keyframes`
  from {
    transform: translate(0px, 15px);
    opacity: 0;
  }

  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

const imageFadeInAndUpAnimation = (duration: number, delay: number) => css`
  animation: ${duration}s ${imageFadeInKeyframe} ${delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const imageFadeInAndUp = imageFadeInAndUpAnimation(0.5, 1);
