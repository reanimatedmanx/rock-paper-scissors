import React from 'react';
import { S } from './Logo.styled';

import { Typography } from '@mui/material';

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
         <>
            <Typography
               variant="h6"
               color="primary"
               lineHeight="0.8"
               letterSpacing="1px"
            >
               ROCK
            </Typography>
            <Typography
               variant="h6"
               color="primary"
               lineHeight="0.8"
               letterSpacing="1px"
            >
               PAPER
            </Typography>
            <Typography
               variant="h6"
               color="primary"
               lineHeight="0.8"
               letterSpacing="1px"
            >
               SCISSORS
            </Typography>
         </>
      ) : (
         <div>TODO</div>
      )}
   </S.Logo>
);
