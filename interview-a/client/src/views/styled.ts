import styled from 'styled-components';

interface IContainerProps {}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: auto;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 7.938rem 0rem;

  .survey-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
