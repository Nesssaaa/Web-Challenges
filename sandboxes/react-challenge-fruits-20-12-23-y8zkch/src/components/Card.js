import "./Card.css";

export default function Card({ fruit }) {
  return (
    <p className={`card card--${fruit.color.toLowerCase()}`}>{fruit.name}</p>
  );
}
