import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Versus as UI } from '../../components/Versus/Versus';
import { selectors, actions } from '../../core/features/game/game';
import { pickWinner } from '../../core/features/game/helpers';
import { ROCK_PAPER_SCISSORS_MODE } from '../../core/features/game/modes';
import { ESticker } from '../../shared/enums';

const { getGameState, getPlayerPick, getHousePick } = selectors;
const {
   stickerPicked,
   unveilStarted,
   unveilFinished,
   playerWon,
   houseWon,
   playerDraw,
   playAgainRequested,
} = actions;

export const VersusContainer = (): JSX.Element => {
   const gameState = useSelector(getGameState);
   const playerPick = useSelector(getPlayerPick);
   const housePick = useSelector(getHousePick);
   const dispatch = useDispatch();

   // Main game loop

   // 1. Player triggers the game start
   const handleStickerPicked = useCallback(
      (type: ESticker) => dispatch(stickerPicked(type)),
      [dispatch]
   );

   // 2. Game starts the unveiling of the house pick
   // 3. Game reveals house pick
   useEffect(() => {
      if (playerPick === null) {
         return;
      }

      dispatch(unveilStarted());

      setTimeout(() => {
         dispatch(unveilFinished());
      }, 1500);
   }, [dispatch, playerPick]);

   // 4. Based on the game mode strategy it is a win/lose/draw
   useEffect(() => {
      if (playerPick === null || housePick === null) {
         return;
      }

      setTimeout(() => {
         const result = pickWinner(
            playerPick,
            housePick
         )(ROCK_PAPER_SCISSORS_MODE);

         if (result === true) {
            dispatch(playerWon());
            return;
         }

         if (result === false) {
            dispatch(houseWon());
            return;
         }

         if (result === Infinity) {
            dispatch(playerDraw());
            return;
         }
      }, 2000);
   }, [dispatch, playerPick, housePick]);

   // 5. Player might play again preserving the score.
   const handleRetryClicked = useCallback(
      () => dispatch(playAgainRequested()),
      [dispatch]
   );

   return (
      <UI
         gameState={gameState}
         playerPick={playerPick}
         housePick={housePick}
         onStickerPicked={handleStickerPicked}
         onRetryClicked={handleRetryClicked}
      />
   );
};
