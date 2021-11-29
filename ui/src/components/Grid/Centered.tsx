import styled from "styled-components";

export const Centered = styled.div<{width?: string; height?: string}>`
  margin: 0 auto;
  ${props => props.width ? props.width : '' };
  ${props => props.height ? props.height : '' };
`;

export default Centered;