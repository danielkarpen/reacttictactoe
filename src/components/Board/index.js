import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [char, setChar] = useState("X");
  const [contents, setContents] = useState(Array.from({ length: 9 }, () => ""));

  function handleClick(ev) {
    console.log(ev.target.dataset.num);
    setContents((prevContents) => {
      const newContents = [...prevContents];
      newContents[ev.target.dataset.num] = char;
      return newContents;
    });

    setChar((prevChar) => (prevChar === "X" ? "O" : "X"));
  }

  function renderSquares(contents) {
    return contents.map((content, index) => (
      <Square key={index} num={index} content={content} handler={handleClick} />
    ));
  }

  return (
    <main className="container mx-auto w-96">{renderSquares(contents)}</main>
  );
};

export default Board;
