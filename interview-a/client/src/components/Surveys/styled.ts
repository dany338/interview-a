import styled from 'styled-components';
import Colors from '../../styleguide/colors';

interface IContainerProps {}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  padding: 7.938rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const ContainerSurveys = styled.div`
  padding: 3.125rem 0rem;
  display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 10px;
  width: 100%;

  .survey-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .survey--name {
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2.688rem;
    line-height: 3.313rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${Colors.backgroundColorModal};
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }
`;