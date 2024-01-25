import "./styles.css";

function Greeting({ name }) {
  return <h1>Hello, {name === "Roland" ? "Coach" : name}!</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Roland" />
      <Greeting name="Lukas" />
    </div>
  );
}
