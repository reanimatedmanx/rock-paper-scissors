import React from 'react';
import { S } from './Playground.styled';

export type PlaygroundProps = {
   children: React.ReactNode;
};

export const Playground = ({ children }: PlaygroundProps): JSX.Element => (
   <S.Playground data-testid="Playground">{children}</S.Playground>
);
