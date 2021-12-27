import IconPaper from './img/icon-paper.svg';
import { BaseSticker } from '../BaseSticker/BaseSticker';

export const Paper = (): JSX.Element => (
   <BaseSticker
      color={'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'}
   >
      <img src={IconPaper} alt="Paper Sticker Icon" />
   </BaseSticker>
);
