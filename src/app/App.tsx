import React from 'react';
import { Wrapper } from './components/Layout/Wrapper/Wrapper';
import { Footer } from './components/Layout/Footer/Footer';
import { Header } from './components/Layout/Header/Header';
import { Playground } from './components/Layout/Playground/Playground';
import { Menu } from './components/Menu/Menu';
import { VersusContainer } from './containers/VersusContainer/VersusContainer';
import { GameHeaderContainer } from './containers/GameHeaderContainer/GameHeaderContainer';

const App = (): JSX.Element => (
   <Wrapper>
      <Header>
         <GameHeaderContainer />
      </Header>
      <Playground>
         <VersusContainer />
      </Playground>
      <Footer>
         <Menu />
      </Footer>
   </Wrapper>
);

export default App;
