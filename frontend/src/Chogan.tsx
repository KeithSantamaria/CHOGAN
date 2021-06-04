import React from 'react';
import { Counter } from './redux/Counter';
import './Chogan.css';
import AddToFolder from './components/AddToFolder';

function Chogan() {
  return (
    <div className="App">
      <Counter />
      {/*this is for debugging*/}
      <AddToFolder/>
    </div>
  );
}

export default Chogan;
