import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickBtn = (event) => {
    const btnName = event.currentTarget.textContent;
    const result = calculate({ total, next, operation }, btnName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const getResult = () => next || (total || '0');

  return (
    <main className="wrapper">
      <div className="screen">{getResult()}</div>
      <div className="buttonBox">
        <button className="button" onClick={onClickBtn}>AC</button>
        <button className="button" onClick={onClickBtn}>+/-</button>
        <button className="button" onClick={onClickBtn}>%</button>
        <button className="button opt" onClick={onClickBtn}>+</button>
        <button className="button" onClick={onClickBtn}>7</button>
        <button className="button" onClick={onClickBtn}>8</button>
        <button className="button" onClick={onClickBtn}>9</button>
        <button className="button opt" onClick={onClickBtn}>x</button>
        <button className="button" onClick={onClickBtn}>4</button>
        <button className="button" onClick={onClickBtn}>5</button>
        <button className="button" onClick={onClickBtn}>6</button>
        <button className="button opt" onClick={onClickBtn}>-</button>
        <button className="button" onClick={onClickBtn}>1</button>
        <button className="button" onClick={onClickBtn}>2</button>
        <button className="button" onClick={onClickBtn}>3</button>
        <button className="button opt" onClick={onClickBtn}>+</button>
        <button className="button zero" onClick={onClickBtn}>0</button>
        <button className="button" onClick={onClickBtn}>.</button>
        <button className="button equals" onClick={onClickBtn}>=</button>
      </div>
    </main>
  );
};

export default Calculator;
