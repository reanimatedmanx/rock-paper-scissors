import React from 'react';
import { S } from './Versus.styled';
import { Pick } from './components/Pick/Pick';
import { Results } from './components/Results/Results';
import { Unveil } from './components/Unveil/Unveil';

export enum EVersusState {
   PICK,
   UNVEIL,
   RESULTS,
}

const VersusStateSwitcher = (state: EVersusState): JSX.Element => {
   switch (state) {
      case EVersusState.PICK:
         return <Pick />;
      case EVersusState.UNVEIL:
         return <Unveil />;
      case EVersusState.RESULTS:
         return <Results />;
      default:
         return <Pick />;
   }
};

export const Versus = (): JSX.Element => (
   <S.Versus data-testid="Versus">
      {VersusStateSwitcher(EVersusState.PICK)}
   </S.Versus>
);
