import React from 'react';
import User from './User';
import Counter from './Counter';

const App = () => {
  return <div className="container">
    <Counter/>
    <User/>
  </div>;
};

export default App;