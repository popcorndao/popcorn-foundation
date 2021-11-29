import styled from 'styled-components';

export interface FrostedGlassProps {
  width?: string;
  height?: string;
  variant?: 'outline';
  square?: boolean;
  elevation?: 'none';
  rounded?: 'left' | 'right';
}

export const FrostedPaper = styled.div<FrostedGlassProps>`
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(20px);
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
  ${(props) =>
    props.variant === 'outline'
      ? `border: 1px solid ${props.theme.palette.divider};`
      : ''}
  border-radius: ${(props) =>
    props.square ? '0' : `${props.theme.shape.borderRadius}`}px;
  ${(props) =>
    props.rounded
      ? props.rounded == 'left'
        ? `border-top-left-radius:  ${props.theme.shape.borderRadius}px;
     border-bottom-left-radius: ${props.theme.shape.borderRadius}px;
     `
        : props.rounded == 'right'
        ? `border-top-right-radius:  ${props.theme.shape.borderRadius}px;
     border-bottom-right-radius: ${props.theme.shape.borderRadius}px; `
        : ''
      : ''}
      
`;

export default FrostedPaper;
