import { cities } from "@/lib/data";
import Link from "next/link";
import styled from "styled-components";

export default function CitiesInfo() {
  return (
    <>
      <h1>Cities</h1>
      <Ul>
        {cities.map((city) => (
          <StyledList key={city.id}>
            <StyledLink href={`cities/${city.slug}`}>{city.name}</StyledLink>
          </StyledList>
        ))}
        <br></br>
        <br></br>
      </Ul>
      <BackLink>
        <StyledLink href="/">Back to HomePage</StyledLink>
      </BackLink>
    </>
  );
}

const StyledList = styled.li`
  list-style: none;
  margin: 1rem;
  border: 2px solid black;
  border-radius: 15px;
  width: 10rem;
  height: 2.2rem;
  text-align: center;
  background-color: #40e07d;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const BackLink = styled.button`
  border: 2px solid #242d27;
  background-color: #bfd3c5;
  border-radius: 35px;
  padding: 1rem;
  margin: 1rem;
`;
