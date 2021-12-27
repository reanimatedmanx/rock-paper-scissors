import IconSpock from './img/icon-spock.svg';
import { BaseSticker } from '../BaseSticker/BaseSticker';

export const Spock = (): JSX.Element => (
   <BaseSticker
      color={'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))'}
   >
      <img src={IconSpock} alt="Spock Sticker Icon" />
   </BaseSticker>
);
