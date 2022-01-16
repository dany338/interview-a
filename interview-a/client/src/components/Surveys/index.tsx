import React from 'react'
import Survey, { IQuestion, ISurveysProps } from "../../entities/Survey";
import Question from '../Question';
import Questions from '../Questions';
import SearchBar from '../SearchBar';
import {
  Container,
  Wrapper,
  ContainerSurveys,
} from './styled';

const Surveys: React.FC<ISurveysProps> = ({
  surveys,
  query,
  loading,
  onChangeQuery,
  onSearchBySurvey
}) => (
  <Container>
    <Wrapper>
      <SearchBar onSearchBySurvey={onSearchBySurvey} placeholder="Search by survey" value={query} onChangeQuery={onChangeQuery} count={surveys.length} />
      {loading && <div>Loading...</div>}
      <ContainerSurveys>
        {(surveys && surveys.length > 0) && (
          surveys.map((survey: Survey, index: number) =>
            <div className="survey-container" key={`survey-${index}`}>
              <h1 className="survey--name">{survey.name}</h1>
              {survey.content.questions.map((question: IQuestion, idx: number) => <Questions key={`survey-${index}-question-${idx}`} id={`survey-${index}-question-${idx}`} question={question} />)}
              <hr />
            </div>
          )
        )}
      </ContainerSurveys>
    </Wrapper>
  </Container>
)

export default Surveys;
