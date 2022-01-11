import { curry, any } from 'ramda';
import { ESticker } from '../../../../shared/enums';

/**
 * When user pick wins over house pick, returns true, otherwise return false.
 * In case of a draw, returns Infinity
 */
export const pickWinner = curry(
   (
      playerPick: ESticker,
      housePick: ESticker,
      mode: ESticker[][]
   ): boolean | typeof Infinity => {
      if (playerPick === housePick) {
         return Infinity;
      }

      return any<ESticker[]>((combination: ESticker[]) => {
         const [left, right] = combination;

         return playerPick === left && housePick === right;
      })(mode);
   }
);
