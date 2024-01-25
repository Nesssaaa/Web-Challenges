import CitiesInfo from "./cities";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Cities-App</h1>
      <Link href="/cities">Show the cities</Link>
    </div>
  );
}
