import React from 'react'
import useSurveysResponses from '../hooks/useSurveysResponses';
import { Container } from './styled';
import Surveys from '../components/Surveys';

const ResponsesView = () => {
  const [ surveys ] = useSurveysResponses();
  return (
    <Container>
      <Surveys
        surveys={surveys}
      />
    </Container>
  )
}

export default ResponsesView
