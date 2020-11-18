import React from "react";
import styled, { css } from "styled-components";

type Variants = "primary" | "light";

type Props = {
  variant?: Variants;
};

const PRIMARY_COLOR = "#4eae4a";
const LIGHT_COLOR = "#ffffff";
const PRIMARY_TEXT_COLOR = "#ffffff";
const LIGHT_TEXT_COLOR = "#101820";

const Container = styled.button<Props>`
  ${(props) => css`
    background: none;
    color: inherit;
    border: none;
    padding: 12px 28px;
    min-width: 220px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: relative;

    border-radius: 50px;

    font-size: 1.39rem;
    letter-spacing: 1px;
    background-color: ${variantToColor(props.variant)};
    color: ${variantToTextColor(props.variant)};

    &:hover,
    &:focus {
      &::after {
        box-shadow: 0 0 0 6px ${variantToColor(props.variant)}61;
        top: 0;
        left: 0;
        padding: 0;
      }
    }

    &::after {
      transition: all 0.2s ease-in-out;
      content: "";
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      top: -4px;
      left: -4px;
      padding: 4px;
      position: absolute;
      border-radius: 50px;
      box-shadow: 0 0 0 1.5px ${variantToColor(props.variant)};
    }
  `}
`;

const PrimaryButton: React.FC<Props> = ({ children, variant }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default PrimaryButton;

const variantToColor = (variant?: Variants) => {
  switch (variant) {
    case "light":
      return css`
        ${LIGHT_COLOR}
      `;

    default:
      return css`
        ${PRIMARY_COLOR}
      `;
  }
};

const variantToTextColor = (variant?: Variants) => {
  switch (variant) {
    case "light":
      return css`
        ${LIGHT_TEXT_COLOR}
      `;

    default:
      return css`
        ${PRIMARY_TEXT_COLOR}
      `;
  }
};
