import React from "react";
import { Clear, InfoOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import FrostedGlass from "../Surfaces/FrostedGlass";

const FrostedNotification = styled(FrostedGlass)<{ visible?: boolean }>`
  width: 100%;
  min-height: 2em;
  min-width: 14em;
  margin: 1em auto;
  z-index: 2;
  max-width: 28em; 
  position: relative;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled.div<{ ["text-align"]?: string, width?: string, secondary?: boolean; }>`
  flex: ${props => props.width ? props.width : "33%"};
  text-align: ${(props) =>
    props["text-align"] ? props["text-align"] : "left"};
  color: ${props => props.secondary ? props.theme.palette.secondary.main : props.theme.palette.primary.main};
  :hover {
    color: ${props => props.secondary ? props.theme.palette.secondary.active : props.theme.palette.primary.active};
  }
  margin: 8px 8px 0px 8px;
`;

export const Body = styled.div<{ ["text-align"]?: string, width?: string }>`
  flex: ${props => props.width ? props.width : "33%"};
  text-align: ${(props) =>
    props["text-align"] ? props["text-align"] : "left"};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CloseModal = styled.div`
  float: right;
  margin-top: 8px;
  margin-right:10px;
  flex: 5%;
  text-align: ${(props) =>
    props["text-align"] ? props["text-align"] : "left"};
`;

const ClearIcon = styled(Clear)`
  cursor: pointer;
  color: ${props => props.theme.palette.primary.dark};
  :hover {
    color: ${props => props.theme.palette.action.hover};
  }
`;

export interface NotificationSlimProps {
  visible: boolean,
  children: React.ReactElement,
  type?: "info" | "warn",
  onClick?: Function; 
}

export const NotificationSlim: React.FC<NotificationSlimProps> = ({ visible, children, type, onClick }) => {
  return (
    <FrostedNotification visible={visible}>
      <Icon text-align="left" width="10%" secondary>
        <InfoOutlined></InfoOutlined>
      </Icon>
      <Body text-align="left" width="80%">{children}</Body>
      <CloseModal onClick={() => {onClick && onClick()}}>
        <ClearIcon fontSize="small" />
      </CloseModal>
    </FrostedNotification>
  );
};

export default NotificationSlim;
