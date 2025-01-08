import { useState } from 'react'
import React from 'react';
import Result from './Result';
const Counter = () => {

  let [counter, setCounter] = useState(0);
  let increase = () => {
    setCounter(++counter);
  };
  let decrease = () => {
    if(counter>0){
    setCounter(--counter);}
  };
  let reset = () => {
    setCounter(0);
  }


  return (
    <div>

      <Result count={counter} inc={increase} dec={decrease} reset={reset} />

    </div>
  )
}

export default Counter
