import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100%;
  height: 3.75rem;
  background-color: ${Colors.white};
  box-shadow: 0px 8px 24px rgba(22, 27, 45, 0.1);
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 3.75rem;

  img {
    position: absolute;
    top: 53%;
    left: 1.875rem;
    transform: translate(-50%, -50%);
    color: ${Colors.colorTextResultsFounded};
    font-size: 1.25rem;
    z-index: 1;
  }

  input {
    border: 0;
    outline: none;
    color: ${Colors.backgroundColorModal};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.625rem 3.125rem;
    border-radius: 6px;
    font-size: 1.063rem;
    font-weight: 900;
    line-height: 1.625rem;
    font-family: Roboto, "Helvetica Neue", sans-serif;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 5.25rem;
    height: 2.625rem;
    border-radius: 6px;
    background: ${Colors.backgroundColorButton};
    color: ${Colors.white};
    z-index: 1;
    cursor: pointer;
    border: 0;
    padding: 0.563rem 0.563rem;
    margin: 0.563rem 0.563rem;

    &:hover {
      background: ${Colors.colorTextLinkNormal};
    }
  }

  div {
    position: absolute;
    top: 0;
    right: 6.875rem;
    width: auto;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${Colors.colorTextResultsFounded};
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 900;
      font-family: Roboto, "Helvetica Neue", sans-serif;
    }
  }
`;