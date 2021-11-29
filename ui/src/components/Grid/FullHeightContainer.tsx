import styled from "styled-components";

export const FullHeightContainer = styled.div<{width?: number; hidden?: boolean}>`
  width:${props => props.width ? props.width : '100'}%;
  display: ${props => props.hidden ? 'none' : 'flex'};
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
`;

export default FullHeightContainer;