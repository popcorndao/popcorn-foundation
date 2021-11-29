import React from "react";
import styled from "styled-components";
import FrostedGlass from '../Surfaces/FrostedGlass';

export const WidgetContainer = styled.div<{visible?: boolean; float?: 'right' | 'left'}>`
    flex-direction: row;
    margin-right: 2em;
    margin-left: 1.5em;
    ${({float}) => float ? '' : 'margin: 0 auto;'}
    margin-top: auto;
    height: 400px;
    width: 400px;
    display: ${({visible}) => visible ? 'inline-block' : 'none'};
    ${({float}) => float === 'left' ? `margin-right: auto` : float === 'right' ?  'margin-left: auto' : ''};
`;

const StyledWidget = styled(FrostedGlass)`
  min-height: 30px;
  height: 100%;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;

export interface WidgetProps {
  visible?: boolean;
  children?: React.ReactElement; 
  float?: "right" | "left";
}

export const Widget: React.FC<WidgetProps> = ({visible, children, float}) => {
  return (
  <WidgetContainer float={float} visible={visible||false}>
    <StyledWidget>
      {children}
    </StyledWidget>
  </WidgetContainer>)
};

export default Widget;