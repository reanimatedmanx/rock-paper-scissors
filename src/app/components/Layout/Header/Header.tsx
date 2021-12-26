import React from 'react';
import { S } from './Header.styled';

export type HeaderProps = {
   children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps): JSX.Element => (
   <S.Header data-testid="Header">{children}</S.Header>
);
