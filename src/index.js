import { h, render } from 'preact';
import { useReducer } from 'preact/hooks';

const Counter = () => {
  const [val, inc] = useReducer(x => x + 1, 0);
  return <p onClick={inc}>Click to increment: {val}</p>;
};

render(h(Counter), document.body);
