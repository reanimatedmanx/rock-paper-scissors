import { Rock } from './components/Rock';
import { Paper } from './components/Paper';
import { Scissors } from './components/Scissors';
import { Lizard } from './components/Lizard';
import { Spock } from './components/Spock';
import { ESticker } from '../../../../shared/enums';
import { Box } from '@mui/material';

export type StickerProps = {
   type: ESticker;
   onClick?: (type: ESticker) => void;
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

export const Sticker = ({ type, onClick }: StickerProps): JSX.Element => (
   <Box
      sx={{
         display: 'flex',
         width: 'inherit',
         height: 'inherit',
      }}
      onClick={() => onClick && onClick(type)}
   >
      {StickerTypeSwitcher(type)}
   </Box>
);
