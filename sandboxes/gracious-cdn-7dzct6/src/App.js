import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {sum}
    </div>
  );
}

export default function App() {
  return (
    <h1>
      <Sum valueA={5} valueB={8} />
    </h1>
  );
}
