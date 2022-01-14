/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { generatePath, useNavigate, useLocation } from "react-router-dom";
import Survey, { ISurvey } from '../../entities/Survey';
import SurveyResponse, { ISurveyResponse } from "../../entities/SurveyResponse";
import { IInfoAlertProps } from "../../entities/Survey";
import { getSurvey } from '../../services/surveys';
import { addResponse } from '../../services/responses';
import { waitFor } from '../../utils/wait';

const useSurvey = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [finished, setFinished] = useState(false);
  const [ surveyId, setSurveyId ] = useState<number>(1);
  const [ infoAlert, setInfoAlert ] = useState<IInfoAlertProps | null | unknown | any>(null);
  const [ survey, setSurvey ] = useState<ISurvey | null | any>(null);
  const [ surveyResponse, setSurveyResponse ] = useState<ISurveyResponse| null>(null);

  const onSurveySubmit = async () => {
    let success = false;
    if (surveyResponse) {
      const response: boolean | null = await addResponse(surveyResponse);
      if (response) {
        setSurveyResponse(null);
        setInfoAlert({ variant: "success", message: "Survey submitted successfully." });
        success = true;
      } else {
        setInfoAlert({ variant: "danger", message: "You are not authorized to perform this action." });
      }
    } else {
      setInfoAlert({ variant: "danger", message: "Should select an answer." });
    }
    await waitFor(1000);
    setInfoAlert(null);
    if (success) {
      setSurveyId(prevState => (prevState + 1));
      navigate(generatePath(`/survey/${surveyId + 1}`));
    }
  }

  const loadSurvey = async () => {
    const response: Survey | null = await getSurvey(surveyId);
    if (response && typeof response === 'object') {
      setSurvey(response);
    } else {
      setInfoAlert({ variant: "danger", message: "Survey not found." });
      await waitFor(1000);
      setInfoAlert(null);
      setSurvey(null);
      setFinished(true);
      navigate("/");
    }
  }

  const onSurveySelection = (question: string, answer: string): void => {
    const newSurveyResponse: ISurveyResponse = new SurveyResponse(survey.id);
    if (newSurveyResponse == null) return;
    const index = newSurveyResponse.content.questions.findIndex(value => value.question === question);
    if (index < 0) {
      newSurveyResponse.content.questions.push({question, answer});
    } else {
      newSurveyResponse.content.questions[index].answer = answer;
    }
    setSurveyResponse(newSurveyResponse);
  };

  useEffect(() => {
    if(pathname === `/survey/${surveyId}`) {
      loadSurvey();
    }
    return () => {
    }
  }, [surveyId, pathname]);

  return [
    finished,
    surveyId,
    survey,
    infoAlert,
    onSurveySubmit,
    onSurveySelection,
  ];
}

export default useSurvey;