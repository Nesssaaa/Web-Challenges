import Card from "./components/Card";

const fruits = [
  { id: 1, name: "🍎 Apple", color: "red" },
  { id: 2, name: "🍌 Banana", color: "yellow" },
  { id: 3, name: "🍊 Orange", color: "orange" },
  { id: 4, name: "🍇 Grapes", color: "PURPLE" },
  { id: 5, name: "🍓 Strawberry", color: "red" },
  // Add more fruits as needed
];

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        console.log(fruit);
        return <Card key={fruit.id} fruit={fruit} />;
      })}
    </div>
  );
}
