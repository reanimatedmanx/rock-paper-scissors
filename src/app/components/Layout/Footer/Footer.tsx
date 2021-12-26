import React from 'react';
import { S } from './Footer.styled';

export type FooterProps = {
   children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps): JSX.Element => (
   <S.Footer data-testid="Footer">{children}</S.Footer>
);
