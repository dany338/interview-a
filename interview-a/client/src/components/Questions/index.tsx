import React from 'react';
import { IAnswer, IQuestionsProps } from "../../entities/Survey";
import CardAnswer from '../CardAnswer';

import {
  Container,
  Answers,
} from './styled';

const Questions: React.FC<IQuestionsProps> = ({ id, question }) => (
  <Container>
    <h2 className="question--name">{question.question}</h2>
    <Answers>
      {(question.answers && question.answers.length > 0) && (
         question.answers.map((answer: IAnswer | string, index: number) => <CardAnswer key={`${id}-answer-${index}`} answer={answer} />)
      )}
    </Answers>
  </Container>
)

export default Questions
