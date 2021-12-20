import { bool, func } from "prop-types";
import React from "react";
import styled from "styled-components";

interface StyledBurgerProps {
  open: boolean;
}

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  return (
    <StyledBurger
      aria-label="PopCorn Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;

export const StyledBurger = styled.button<StyledBurgerProps>`
  position: fixed;
  top: ${({ open }) => (open ? "32px" : "32px")};
  right: ${({ open }) => (open ? "32px" : "32px")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ open }) => (open ? "2rem" : "2rem")};
    height: ${({ open }) => (open ? "0.25rem" : "0.25rem")};
    background: ${({ theme, open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: transform 0.7s;
    position: relative;
    transform-origin: 1px;

    ${({ open }) =>
      open &&
      `
      animation: hidden .5s;
      `}

    @keyframes hidden {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    :first-child {
      background: ${({ open }) => (open ? "#fff" : "#000")};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      background: ${({ open }) => (open ? "#fff" : "#000")};
      visibility: ${({ open }) => (open ? "hidden" : "visible")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      background: ${({ open }) => (open ? "#fff" : "#000")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
