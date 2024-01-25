import { cities } from "@/lib/data";
import Link from "next/link";

export default function CitiesInfo() {
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
        <br></br>
        <br></br>
        <Link href="/">Back to HomePage</Link>
      </ul>
    </>
  );
}
