import IconLizard from './img/icon-lizard.svg';
import { BaseSticker } from '../BaseSticker/BaseSticker';

export const Lizard = (): JSX.Element => (
   <BaseSticker
      color={'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))'}
   >
      <img src={IconLizard} alt="Lizard Sticker Icon" />
   </BaseSticker>
);
