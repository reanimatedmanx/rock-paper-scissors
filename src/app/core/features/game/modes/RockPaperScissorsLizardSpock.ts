import { ESticker } from '../../../../shared/enums';

const { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } = ESticker;

export const ROCK_PAPER_SCISSORS_LIZARD_SPOCK_MODE = [
   [SCISSORS, PAPER],
   [PAPER, ROCK],
   [ROCK, LIZARD],
   [LIZARD, SPOCK],
   [SPOCK, SCISSORS],
   [SCISSORS, LIZARD],
   [LIZARD, PAPER],
   [PAPER, SPOCK],
   [SPOCK, ROCK],
   [ROCK, SCISSORS],
];
