import styled, { css } from "styled-components";

export const HeroSection = styled.section<{ imageUrl?: string }>`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  padding: 138px 0;
  padding-top: 188px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  background: #333;
  color: #fff;

  ${(props) =>
    props.imageUrl &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
        url(${props.imageUrl});
    `}

  background-size:cover;
`;

export const HeroTitle = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  margin-bottom: 15px;
  white-space: pre-wrap;
`;

export const HeroSubTitle = styled.h2`
  font-size: 1.8rem;
  padding: 0 100px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

export const HeroText = styled.span`
  padding: 0 250px;
  & p {
    font-size: 1.38rem;
    margin-bottom: 5px;
  }
`;

export const HeroCTAs = styled.div`
  display: flex;
  margin-top: 38px;

  & > *:first-child {
    margin-right: 25px;
  }
`;
