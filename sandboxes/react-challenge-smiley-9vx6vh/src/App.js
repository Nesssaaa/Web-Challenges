import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  const happySmiley = <span aria-label="happy-Smiley">😀</span>;
  const sadSmiley = <span aria-label="sad-Smiley">😒</span>;
  return <div>I'm {isHappy ? happySmiley : sadSmiley}</div>;
}

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
    </h1>
  );
}
