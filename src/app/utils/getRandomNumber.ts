import { ESticker } from '../shared/enums';

export function getRandomSticker(stickers: ESticker[]): ESticker {
   const random = Math.floor(Math.random() * stickers.length - 1) + 1;

   return stickers[random];
}
