import styled from "styled-components";

export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <StyledList>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>
              ⭐️ {review.rating}/5:
              <p>{review.text}</p>
            </p>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
