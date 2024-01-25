import BoxWithStyledComponents, {
  StyledBox,
} from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;

  flex-direction: row;
`;

export default function HomePage({}) {
  return (
    <div>
      <FlexContainer>
        <StyledBox $variant="black"></StyledBox>
        <StyledBox $variant="green"></StyledBox>
        <StyledBox $variant="black"></StyledBox>
        <StyledBox $variant="green"></StyledBox>
      </FlexContainer>
    </div>
  );
}
