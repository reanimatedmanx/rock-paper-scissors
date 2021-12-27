import React from 'react';
import { S } from './Logo.styled';

// TODO Find a  matching font and remove this svgs.
import LogoSvg from './img/logo.svg';
import LogoBonusSvg from './img/logo-bonus.svg';

export enum ELogoVariant {
   SIMPLE,
   BONUS,
}

export type LogoProps = {
   variant: ELogoVariant;
};

export const Logo = ({ variant }: LogoProps): JSX.Element => (
   <S.Logo data-testid="Logo">
      {variant === ELogoVariant.SIMPLE ? (
         <img src={LogoSvg} alt="rock-paper-scissors" />
      ) : (
         <img src={LogoBonusSvg} alt="rock-paper-scissors-lizard-spock" />
      )}
   </S.Logo>
);
