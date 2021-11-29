import { Button, Color } from '@material-ui/core';
import styled from 'styled-components';

export interface ButtonProps {
  color?: any;
}
export interface ButtonPropsStyled {
  primary?: boolean;
  secondary?: boolean;
}

export const ButtonOriginal = styled.button<ButtonPropsStyled>`
  background: ${(props) =>
    props.primary
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  ${(props) => (props.secondary ? 'background: rgba(0, 0, 0, 0.4)' : '')};
  border-radius: 12px;
  backdrop-filter: blur(20px);
  cursor: pointer;
  padding: 0.76em 1.23em;
  color: #fff;
  font-size: 0.9em;
  margin: 1em;
`;

const StyledButton = styled(Button)`
  font-weight: 200 !important;
`;

export { StyledButton };

export default StyledButton;
