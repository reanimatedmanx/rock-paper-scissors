import { Rock } from './components/Rock';
import { Paper } from './components/Paper';
import { Scissors } from './components/Scissors';
import { Lizard } from './components/Lizard';
import { Spock } from './components/Spock';

export enum ESticker {
   ROCK,
   PAPER,
   SCISSORS,
   LIZARD,
   SPOCK,
}

export type StickerProps = {
   type: ESticker;
};

const StickerTypeSwitcher = (type: ESticker) => {
   switch (type) {
      case ESticker.ROCK:
         return <Rock />;
      case ESticker.PAPER:
         return <Paper />;
      case ESticker.SCISSORS:
         return <Scissors />;
      case ESticker.LIZARD:
         return <Lizard />;
      case ESticker.SPOCK:
         return <Spock />;
      default:
         return <Rock />;
   }
};

export const Sticker = ({ type }: StickerProps): JSX.Element => (
   <>{StickerTypeSwitcher(type)}</>
);
