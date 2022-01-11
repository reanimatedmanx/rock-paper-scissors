import { S } from './Versus.styled';
import { Pick } from './components/Pick/Pick';
import { Battle } from './components/Battle/Battle';
import { ESticker, EGameState } from '../../shared/enums';

export type VersusProps = {
   gameState: EGameState;
   playerPick: ESticker | null;
   housePick: ESticker | null;
   onStickerPicked?: (type: ESticker) => void;
};

export const Versus = ({
   gameState,
   playerPick,
   housePick,
   onStickerPicked,
}: VersusProps): JSX.Element => (
   <S.Versus data-testid="Versus">
      {gameState === EGameState.PICK ? (
         <Pick onStickerPicked={onStickerPicked} />
      ) : (
         <Battle
            gameState={gameState}
            playerPick={playerPick || ESticker.ROCK}
            housePick={housePick || ESticker.ROCK}
         />
      )}
   </S.Versus>
);
