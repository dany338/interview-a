import { ICardAnswerContainerProps } from 'src/entities/Survey';
import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div<ICardAnswerContainerProps>`
  background-color: ${Colors.white};
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  border-radius: 5px;
	min-height: 6.25rem;
	font-weight: bold;
	position: relative;
	overflow: hidden;
  width: 100%;
  height: auto;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    border-radius: 0.5rem;
    transition: outline-offset 0.1s ease;
    outline-offset: 4px;
    outline: ${Colors.backgroundColorBadgeYellow}; auto 1px;
  }

  .image {
    background-size: contain;
    background-repeat: no-repeat;
	  background-position: center center;
    background-image: url(${({ image }) => image});
    height: 12.813rem;
  }

  .textos {
    margin: 25px;
    height: auto;
    display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
    color: ${Colors.colorTextResultsFounded};

    .answer--name {
      color: ${Colors.colorTextTitleBlog};
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-size: 1.313rem;
      line-height: 1.75rem;
      letter-spacing: -0.01em;
    }
  }

  .line {
    margin: 1.563rem;
    width: 86%;
    height: 0px;
    border: 0.063rem solid ${Colors.colorLineSeparate};
  }

  .footer {
    margin: 1.563rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 1.563rem;
        height: 1.563rem;
        fill: ${Colors.backgroundColorBadgeYellow};
      }
    }

    div:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 0.875rem;
        text-align: center;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.7;
      }
    }
  }
`;