import React from 'react';
import { S } from './Wrapper.styled';

export type WrapperProps = {
   children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps): JSX.Element => (
   <S.Wrapper data-testid="Wrapper">{children}</S.Wrapper>
);
