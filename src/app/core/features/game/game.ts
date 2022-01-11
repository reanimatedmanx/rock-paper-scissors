import { createSlice } from '@reduxjs/toolkit';
import { compose, prop } from 'ramda';
import { ESticker, EGameState } from '../../../shared/enums';
import { getRandomSticker } from '../../../utils/getRandomNumber';

export interface IGame {
   score: number;
   playerPick: ESticker | null;
   housePick: ESticker | null;
   gameState: EGameState;
}

export interface IGameReducer {
   gameReducer: IGame;
}

const initialState: IGame = {
   score: 0,
   playerPick: null,
   housePick: null,
   gameState: EGameState.PICK,
};

const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      stickerPicked: (state, action) => {
         state.gameState = EGameState.BATTLE;
         state.playerPick = action.payload;
      },
      unveilStarted: state => {
         state.gameState = EGameState.UNVEIL_STARTED;
      },
      unveilFinished: state => {
         state.gameState = EGameState.UNVEIL_FINISHED;

         // TODO Extract to state.
         const picks = [ESticker.ROCK, ESticker.PAPER, ESticker.SCISSORS];

         state.housePick = getRandomSticker(picks);
      },
      playerWon: state => {
         state.gameState = EGameState.PLAYER_WON;
         state.score += 1;
         console.log('WE WON!!');
      },
      houseWon: state => {
         state.gameState = EGameState.HOUSE_WON;
         if (state.score <= 0) {
            console.log('PLAYER LOST!!');
            return state;
         }
         state.score -= 1;
         console.log('PLAYER LOST!!');
      },
      playerDraw: state => {
         state.gameState = EGameState.DRAW;
         console.log('DRAWW!!');
      },
   },
});

const getReducer = prop<keyof IGameReducer, IGame>('gameReducer');

export const selectors = {
   getScore: compose(prop('score'), getReducer),
   getPlayerPick: compose(prop('playerPick'), getReducer),
   getHousePick: compose(prop('housePick'), getReducer),
   getGameState: compose(prop('gameState'), getReducer),
};

export const actions = gameSlice.actions;

export default gameSlice.reducer;
