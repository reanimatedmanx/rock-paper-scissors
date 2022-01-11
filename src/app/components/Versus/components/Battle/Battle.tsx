import { Typography } from '@mui/material';
import { Animation } from '../../../../shared/components/Animation';
import { ESticker, EGameState } from '../../../../shared/enums';
import { Sticker } from '../Sticker';
import { S } from './Battle.styled';
import { Highlight } from './components/Highlight';

export type BattleProps = {
   gameState: EGameState;
   playerPick: ESticker;
   housePick: ESticker;
};

const PlayerStickerSwitcher = (
   gameState: EGameState,
   playerPick: ESticker
): JSX.Element | null => {
   if (gameState === EGameState.PLAYER_WON) {
      return (
         <>
            <Highlight />
            <Sticker type={playerPick} />
         </>
      );
   }

   return <Sticker type={playerPick} />;
};

const HouseStickerSwitcher = (
   gameState: EGameState,
   housePick: ESticker
): JSX.Element | null => {
   switch (gameState) {
      case EGameState.UNVEIL_STARTED:
         return <S.StickerUnknown />;
      case EGameState.HOUSE_WON:
         return (
            <>
               <Highlight />
               <Sticker type={housePick} />
            </>
         );
      default:
         return (
            <Animation duration={1} animation="fadeIn">
               <Sticker type={housePick} />
            </Animation>
         );
   }
};

export const Battle = ({
   gameState,
   playerPick,
   housePick,
}: BattleProps): JSX.Element => (
   <S.Battle as={Animation} duration={1} animation="bounceInDown">
      <S.BattlePick>
         <S.BattlePickSticker data-testid="Your pick">
            {PlayerStickerSwitcher(gameState, playerPick)}
         </S.BattlePickSticker>
         <Typography color="primary" textAlign="center">
            YOU PICKED
         </Typography>
      </S.BattlePick>
      <S.BattlePick>
         <S.BattlePickSticker data-testid="House pick">
            {HouseStickerSwitcher(gameState, housePick)}
         </S.BattlePickSticker>
         <Typography color="primary" textAlign="center">
            THE HOUSE PICKED
         </Typography>
      </S.BattlePick>
   </S.Battle>
);
