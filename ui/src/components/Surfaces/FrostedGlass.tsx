import styled from 'styled-components';

export interface FrostedGlassProps {
  width?: string;
  height?: string;
  variant?: 'no-outline';
  square?: boolean;
  elevation?: 'none';
}

export const FrostedGlass = styled.div<FrostedGlassProps>`
  background: ${({theme}) => theme.palette.background.default};
  backdrop-filter: blur(20px);
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
  ${(props) =>
    props.variant === 'no-outline'
      ? ''
      : `border: 1px solid ${props.theme.palette.divider};`}
  border-radius: ${(props) => (props.square ? '0' : `${props.theme.shape.borderRadius}`)}px;
  ${(props) =>
    props.elevation == 'none'
      ? ''
      : 'box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.32);'}
`;

export default FrostedGlass;