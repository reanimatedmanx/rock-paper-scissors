import IconScissors from './img/icon-scissors.svg';
import { BaseSticker } from '../BaseSticker/BaseSticker';

export const Scissors = (): JSX.Element => (
   <BaseSticker color={'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))'}>
      <img src={IconScissors} alt="Scissors Sticker Icon" />
   </BaseSticker>
);
