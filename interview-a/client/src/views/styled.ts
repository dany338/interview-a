import styled from 'styled-components';

interface IContainerProps {}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
