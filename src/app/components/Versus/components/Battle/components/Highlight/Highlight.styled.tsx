import styled from 'styled-components';

export type HightlightRingProps = {
   offset: number;
   width: number;
   color: string;
   opacity: number;
};

const Highlight = styled.div`
   position: absolute;
   width: inherit;
   height: inherit;
`;

const HighlightRing = styled.div<HightlightRingProps>`
   position: absolute;
   width: calc(100% + ${({ offset }) => offset}px);
   height: calc(100% + ${({ offset }) => offset}px);
   top: 50%;
   left: 50%;
   transform: translateY(-50%) translateX(-50%);
   border: ${({ width }) => width}px solid ${({ color }) => color};
   border-radius: 100%;
   opacity: ${({ opacity }) => opacity};
`;

export const S = {
   Highlight,
   HighlightRing,
};
