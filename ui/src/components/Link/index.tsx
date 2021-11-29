import { Link as MUILink } from "@material-ui/core";
import styled from "styled-components";

export const Link = styled(MUILink)`
  font-family: ${({theme}) => theme.typography.fontFamily};
  :hover {
    color: ${({theme}) => theme.palette.secondary.active};
    text-decoration: underline;
  }
  cursor: pointer;
  color: ${({theme}) => theme.palette.secondary.main};
`;
export default Link;