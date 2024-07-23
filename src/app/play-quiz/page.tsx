import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function page() {
  const code = `const arr = [1, 2, 3];
  arr.push(arr[0]);
  console.log(arr);`;
  return (
    <div className="min-h-screen bg-black-100">
      <div className="pt-48">
        <h2>Q1. Guess the correct output ?</h2>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
