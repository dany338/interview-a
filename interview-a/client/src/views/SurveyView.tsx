import React from 'react';
import Question from "src/components/Question";
import { ISurvey, IQuestion, IInfoAlertProps } from "../entities/Survey";
import {Container, Button, Alert} from 'react-bootstrap';
import useSurvey from '../hooks/useSurvey';
interface ISurveyProps {
  surveyId: number;
  survey: ISurvey | null;
  infoAlert: IInfoAlertProps | null;
  onSurveySubmit: () => void;
  onSurveySelection: (question: string, answer: string) => any;
}

const SurveyView: React.FC<ISurveyProps> = ({
  surveyId,
  survey,
  infoAlert,
  onSurveySubmit,
  onSurveySelection
}) => {
    let qAndA = null;
    if (survey) {
        qAndA = survey.content.questions.map((question: IQuestion, index: number) =>
          <Question question={ question }
                    onSelection={ onSurveySelection }
                    key={ index } />
        );
    }

    return (
        <Container className="pad-t">
            <h1>Survey {surveyId}</h1>
            { qAndA }
            
            <hr />
            {infoAlert ? (
              <Alert variant={infoAlert.variant}>
                {infoAlert.message}
              </Alert>
            ) : (
              <Button
                  className="text-uppercase"
                  variant="success"
                  block={true}
                  onClick={event => {
                      event.stopPropagation();
                      onSurveySubmit();
                  }}
              >
                  Respond!
              </Button>
            )}
        </Container>
    )
}

export default SurveyView;
