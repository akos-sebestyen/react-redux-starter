import React from 'react';
import {increment} from './reducer';
import {connect} from 'react-redux';

const CounterBase = ({count, increment}) => {
  return <div className="container">
    <h1>Hello Counter</h1>
    <p>{count.toString()}</p>
    <button onClick={increment}>Increment</button>
  </div>
};

const Counter = connect(
  (state) => ({count:state.counter.count}),
  {increment}
)(CounterBase);

export default Counter;
