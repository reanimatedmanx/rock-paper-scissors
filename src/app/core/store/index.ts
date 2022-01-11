import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game';

export default configureStore({
   reducer: { gameReducer },
});
