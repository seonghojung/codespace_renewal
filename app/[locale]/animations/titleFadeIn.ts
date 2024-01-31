import { keyframes, css } from "styled-components";

const fadeInKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const createTitleFadeInAndUpAnimation = (duration: number, delay: number) => css`
  animation: ${duration}s ${fadeInKeyframe} ${delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const enTitleFadeIn = createTitleFadeInAndUpAnimation(0.9, 0.7);
export const koTitleFadeIn = createTitleFadeInAndUpAnimation(0.9, 1);
export const koSubTitleFadeIn = createTitleFadeInAndUpAnimation(0.9, 1.3);
