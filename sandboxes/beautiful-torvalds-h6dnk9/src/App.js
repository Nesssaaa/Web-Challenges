import { D6Button } from "./components/D6Button";
import History from "./components/History";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });
  return (
    <div className="app">
      <main className="app__main">
        <D6Button />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
