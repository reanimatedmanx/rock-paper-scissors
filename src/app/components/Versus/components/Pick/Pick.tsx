import { ESticker, Sticker } from '../Sticker';
import { Picker } from './components/Picker/Picker';

export const Pick = (): JSX.Element => (
   <Picker>
      <Sticker type={ESticker.PAPER} />
      <Sticker type={ESticker.SCISSORS} />
      <Sticker type={ESticker.ROCK} />
      <Sticker type={ESticker.LIZARD} />
      <Sticker type={ESticker.SPOCK} />
   </Picker>
);
