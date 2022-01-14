import styled from 'styled-components';
import Colors from '../../styleguide/colors';

interface IContainerProps {}
export const Container = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .question--name {
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.313rem;
    line-height: 2rem;
    text-align: justify;
    color: ${Colors.colorTextLinkNormal};
    width: 100%;
  }
`;

export const Answers = styled.div`
  display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
  width: 100%;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
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