import React from 'react';
import { Box, Typography } from '@mui/material';
import { S } from './Score.styled';

export type ScoreProps = {
   score: number;
};

export const Score = ({ score }: ScoreProps): JSX.Element => (
   <S.Score data-testid="Score">
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
         }}
      >
         <Typography variant="body2">SCORE</Typography>
         <Typography variant="h2">{score}</Typography>
      </Box>
   </S.Score>
);
