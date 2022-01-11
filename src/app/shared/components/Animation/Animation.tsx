import styled, { css, keyframes } from 'styled-components';
import { fadeIn, fadeInDown, bounceInDown } from 'react-animations';

export type BaseAnimationProps = {
   duration: number;
   animation: 'fadeIn' | 'fadeInDown';
};

const ANIMATIONS = {
   fadeIn: keyframes`${fadeIn}`,
   fadeInDown: keyframes`${fadeInDown}`,
   bounceInDown: keyframes`${bounceInDown}`,
};

export const Animation = styled.div<BaseAnimationProps>`
   display: flex;
   width: inherit;
   height: inherit;
   animation: ${({ duration, animation }) =>
      css`
         ${duration}s ${ANIMATIONS[animation]}
      `};
`;
