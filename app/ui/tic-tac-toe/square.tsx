'use client';

export default function Square({ value, onSquareClick } : {value:number, onSquareClick:any}) {
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>;
}