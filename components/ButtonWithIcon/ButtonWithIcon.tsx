import React from "react";
import styled, { StyledComponentProps } from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4eae4a;
  border-radius: 50px;
  color: #fff;
  width: 3.1rem;
  height: 3.1rem;
  font-size: 1.28rem;
  margin-right: 15px;

  box-shadow: 0 0 0 3px #4eae4a7f;
  transition: box-shadow 0.3s ease-in-out;
`;

const Container = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: left;

  display: flex;
  align-items: center;
  font-size: 1.28rem;
  font-weight: 500;
  line-height: 1.45;

  &:hover {
    color: #4eae4a;

    & ${IconContainer} {
      box-shadow: 0 0 0 0 #4eae4a33;
    }
  }
`;

type Props = StyledComponentProps<"button", any, {}, never> & {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ButtonWithIcon: React.FC<Props> = ({
  title,
  description,
  icon,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <IconContainer>{icon}</IconContainer>
      <div>
        <div>{title.toUpperCase()}</div>
        <div>{description}</div>
      </div>
    </Container>
  );
};

export default ButtonWithIcon;
