import React from 'react';
import { Wrapper } from './components/Layout/Wrapper/Wrapper';
import { Footer } from './components/Layout/Footer/Footer';
import { Header } from './components/Layout/Header/Header';
import { Playground } from './components/Layout/Playground/Playground';
import { GameHeader } from './components/GameHeader/GameHeader';
import { Versus } from './components/Versus/Versus';

const App = (): JSX.Element => (
   <Wrapper>
      <Header>
         <GameHeader />
      </Header>
      <Playground>
         <Versus />
      </Playground>
      <Footer>
         <div>Test</div>
      </Footer>
   </Wrapper>
);

export default App;
