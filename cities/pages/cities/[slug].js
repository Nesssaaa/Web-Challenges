import { useRouter } from "next/router";
import Link from "next/link";
import { cities } from "@/lib/data";
import styled from "styled-components";

export default function CityPage() {
  const router = useRouter();

  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);
  const pageIndex = cities.findIndex((city) => city.slug === slug);
  const previousPage = cities[pageIndex - 1];
  const nextPage = cities[pageIndex + 1];

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
      <BackLink>
        <StyledLink href="/cities">
          <strong>Back to all cities</strong>{" "}
        </StyledLink>
      </BackLink>
      <br></br>
      <PrevLink>
        {previousPage && (
          <StyledLink href={`/cities/${previousPage.slug}`}>
            ⬅️ Previous Page: {previousPage.name}
          </StyledLink>
        )}
      </PrevLink>
      <NextLink>
        {nextPage && (
          <StyledLink href={`/cities/${nextPage.slug}`}>
            Next Page: {nextPage.name} ➡️
          </StyledLink>
        )}
      </NextLink>
    </>
  );
}

const PrevLink = styled.button`
  border: 1px solid #9d9de9;
  background-color: #9d9de9;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
`;

const NextLink = styled.button`
  border: 1px solid #8dc3a2;
  background-color: #8dc3a2;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
  float: right;
`;

const BackLink = styled.button`
  border: 1px solid #6e8175;
  background-color: #6e8175;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
    background-color: black;
  }
`;
