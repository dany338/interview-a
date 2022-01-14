import React from 'react'
import {
  Container,
} from './styled';
import { ICardAnswerProps } from 'src/entities/Survey';
import ImageSurvey from '../../assets/images/survey.png';
import Logo from '../../assets/logo/logo.png';

const CardAnswer: React.FC<ICardAnswerProps> = ({ answer }) => (
  <Container image={ImageSurvey}>
    <div className="image" />
    <div className="textos">
      <h3 className="answer--name">{answer?.answer}</h3>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={Logo}
          alt='Survey...'
        />
      </div>
      <div>
        <span>Count: {answer?.count}</span>
      </div>
    </div>
  </Container>
)

export default CardAnswer;
