import React from 'react';
import { Box } from '@mui/material';
import { S } from './GameHeader.styled';
import { Logo, ELogoVariant } from './components/Logo/Logo';
import { Score } from './components/Score/Score';

export type GameHeaderUIProps = {
   score: number;
};

export const GameHeader = ({ score }: GameHeaderUIProps): JSX.Element => (
   <S.GameHeader variant="outlined" elevation={0} data-testid="GameHeader">
      <Box sx={{ display: 'flex' }}>
         <Logo variant={ELogoVariant.SIMPLE} />
         <Score score={score} />
      </Box>
   </S.GameHeader>
);
