import IconRock from './img/icon-rock.svg';
import { BaseSticker } from '../BaseSticker/BaseSticker';

export const Rock = (): JSX.Element => (
   <BaseSticker
      color={'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'}
   >
      <img src={IconRock} alt="Rock Sticker Icon" />
   </BaseSticker>
);
