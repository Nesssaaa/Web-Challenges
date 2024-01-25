import { useRouter } from "next/router";
import Link from "next/link";
import { cities } from "@/lib/data";

export default function CityPage() {
  const router = useRouter();

  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <>
      <h2>{city.name}</h2>
      <h3>Country: {city.country}</h3>
      <span>
        <h4>Population: </h4>
        {city.population}
      </span>
      <article>
        <h4>Description:</h4>
        {city.description}
      </article>
      <br></br>
      <br></br>
      <Link href="/cities">Back to all cities</Link>
    </>
  );
}
