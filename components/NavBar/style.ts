import styled from "styled-components";

// -------- STYLES START -------- //

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItemsContainer = styled.ul`
  list-style-type: none;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 38px;
  font-size: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialMedia = styled.ul`
  list-style-type: none;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SocialMediaItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none !important;
  color: inherit;
  font-size: 1.96rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #4eae4a;
  }
`;

export const ButtonTextUnderline = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 10px 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  display: inline-block;
  position: relative;
  opacity: 0.88;
  transition: opacity 0.2s ease-in-out;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    margin-top: 5px;
    content: "";
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    background: #4eae4a;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover,
  &:focus {
    opacity: 1;

    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

// -------- STYLES END -------- //
