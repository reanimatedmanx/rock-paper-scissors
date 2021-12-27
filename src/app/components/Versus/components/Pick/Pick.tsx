import { ESticker, Sticker } from '../Sticker';

export const Pick = (): JSX.Element => (
   <div>
      <Sticker type={ESticker.PAPER} />
      <Sticker type={ESticker.SCISSORS} />
      <Sticker type={ESticker.ROCK} />
      <Sticker type={ESticker.LIZARD} />
      <Sticker type={ESticker.SPOCK} />
   </div>
);
