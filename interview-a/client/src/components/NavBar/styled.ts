import styled from 'styled-components';
import { Link } from "react-router-dom";
import Colors from '../../styleguide/colors';
import { IMenuProps, IMenuItemLinkProps } from '../../entities/Survey';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${Colors.white};
  position: fixed;
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled(Link)`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: Roboto, "Helvetica Neue", sans-serif;

  img {
    fill: ${Colors.backgroundColorBadgeYellow};
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const Menu = styled.ul<IMenuProps>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: ${Colors.white};
    position: absolute;
    top: 70px;
    left: ${({ open }) => open ? '0' : '-100%'};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(Link)<IMenuItemLinkProps | any>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: ${({ active }) => active === 'true' ? `${Colors.colorTextLinkActive}` : `${Colors.colorTextLinkNormal}`};
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: ${Colors.white};
    background-color: ${Colors.colorTextLinkActive};
    transition: 0.5s all ease;

    div {
      svg {
        fill: ${Colors.white};
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: ${Colors.colorTextLinkNormal};
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  > svg {
    fill: ${Colors.colorTextLinkActive};
    width: '2rem';
    height: '2rem';
  }

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: ${Colors.colorTextLinkNormal};
      margin-right: 0.5rem;
    }
`;
