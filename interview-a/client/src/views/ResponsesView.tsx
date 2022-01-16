import React from 'react'
import useSurveysResponses from '../hooks/useSurveysResponses';
import { Container } from './styled';
import Surveys from '../components/Surveys';

const ResponsesView = () => {
  const [
    surveysFiltered,
    ,
    ,
    isLoading,
    query,
    onChangeQuery,
    onSearchBySurvey,
  ] = useSurveysResponses();
  return (
    <Container>
      <Surveys
        surveys={surveysFiltered}
        query={query}
        onChangeQuery={onChangeQuery}
        onSearchBySurvey={onSearchBySurvey}
        loading={isLoading}
      />
    </Container>
  )
}

export default ResponsesView
