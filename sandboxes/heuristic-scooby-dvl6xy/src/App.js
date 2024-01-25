import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Save me!</Button>
      <Button>Click me!</Button>
      <Button>Send me!</Button>
      <Button>Delete me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
