import { S } from './Versus.styled';
import { Pick } from './components/Pick/Pick';
import { Battle } from './components/Battle/Battle';
import { ESticker, EGameState } from '../../shared/enums';
import { Box } from '@mui/material';
import { Retry } from './components/Battle/components/Retry';

export type VersusProps = {
   gameState: EGameState;
   playerPick: ESticker | null;
   housePick: ESticker | null;
   onStickerPicked?: (type: ESticker) => void;
   onRetryClicked?: () => void;
};

export const Versus = ({
   gameState,
   playerPick,
   housePick,
   onStickerPicked,
   onRetryClicked,
}: VersusProps): JSX.Element => (
   <S.Versus data-testid="Versus">
      {gameState === EGameState.PICK ? (
         <Pick onStickerPicked={onStickerPicked} />
      ) : (
         <Box>
            <Battle
               gameState={gameState}
               playerPick={playerPick || ESticker.ROCK}
               housePick={housePick || ESticker.ROCK}
            />
            {[
               EGameState.PLAYER_WON,
               EGameState.HOUSE_WON,
               EGameState.DRAW,
            ].includes(gameState) && (
               <Retry gameState={gameState} onClick={onRetryClicked} />
            )}
         </Box>
      )}
   </S.Versus>
);
