import { Button, Typography } from '@mui/material';
import { EGameState } from '../../../../../../shared/enums';
import { Animation } from '../../../../../../shared/components/Animation';
import { S } from './Retry.styled';

export type RetryProps = {
   gameState: EGameState;
   onClick?: () => void;
};

const getText = (gameState: EGameState): string => {
   switch (gameState) {
      case EGameState.PLAYER_WON:
         return 'YOU WIN';
      case EGameState.HOUSE_WON:
         return 'YOU LOSE';
      case EGameState.DRAW:
         return 'DRAW';
      default:
         return '';
   }
};

export const Retry = ({ gameState, onClick }: RetryProps): JSX.Element => (
   <S.Retry as={Animation} duration={0.5} animation="fadeIn">
      <Typography color="primary" variant="h2">
         {getText(gameState)}
      </Typography>
      <Button
         variant="contained"
         sx={{
            borderRadius: 2,
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 5,
            paddingRight: 5,
         }}
         onClick={onClick}
      >
         Play again
      </Button>
   </S.Retry>
);
