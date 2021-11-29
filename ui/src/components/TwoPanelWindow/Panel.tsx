import styled from 'styled-components';

export const Panel = styled.div<{ minHeight?: number; minWidth?: number }>`
  min-height: ${(props) => (props.minHeight ? props.minHeight + 'px': '')};
  min-width: ${(props) => (props.minWidth ? props.minWidth + 'px': '')};
`;


