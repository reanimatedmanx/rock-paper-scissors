import { Sticker } from '../Sticker';
import { ESticker } from '../../../../shared/enums';
import { Picker } from './components/Picker/Picker';

export type PickerProps = {
   onStickerPicked?: (type: ESticker) => void;
};

export const Pick = ({ onStickerPicked }: PickerProps): JSX.Element => (
   <Picker>
      <Sticker type={ESticker.PAPER} onClick={onStickerPicked} />
      <Sticker type={ESticker.SCISSORS} onClick={onStickerPicked} />
      <Sticker type={ESticker.ROCK} onClick={onStickerPicked} />
      {/* <Sticker type={ESticker.LIZARD} />
      <Sticker type={ESticker.SPOCK} /> */}
   </Picker>
);
