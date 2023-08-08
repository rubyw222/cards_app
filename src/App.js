import React from 'react';
import Title from './components/title';
import Description from './components/description';
import Cards from './components/cards';
import ShuffleBtn from './components/shuffleBtn';
import DealBtn from './components/dealBtn';

function App() {
  return (
    <div className="App">
      <Title />
      <Description />
      <Cards />
      <ShuffleBtn />
      <DealBtn />
    </div>
  );
}

export default App;
