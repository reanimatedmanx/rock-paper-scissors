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
            height: '100%',
         }}
      >
         <Typography
            variant="caption"
            color="#48517c"
            lineHeight="1"
            letterSpacing="1px"
         >
            SCORE
         </Typography>
         <Typography variant="h3" lineHeight="1">
            {score}
         </Typography>
      </Box>
   </S.Score>
);
