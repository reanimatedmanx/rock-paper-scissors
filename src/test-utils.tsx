/* eslint-disable */

/**
 * TODO Add this file to be accessible via @testing/utils alias to avoid going back in the directory tree like ../../test-utils.
 * Fix linter & ts warnings / add proper typing.
 */

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gameReducer from './app/core/features/game';

function render(
   ui: React.ReactElement<
      unknown,
      string | React.JSXElementConstructor<unknown>
   >,
   {
      //@ts-ignore
      preloadedState,
      store = configureStore({ reducer: { gameReducer }, preloadedState }),
      ...renderOptions
   } = {}
) {
   //@ts-ignore
   function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>;
   }
   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
