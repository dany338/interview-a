import { useEffect, useState } from "react";
import { ISurveyResponse } from "../../entities/SurveyResponse";
import Survey, { ISurvey, IInfoAlertProps, IQuestion, IAnswer } from "../../entities/Survey";
import { getSurveys } from '../../services/surveys';
import { getSurveysResponses } from '../../services/responses';
import { waitFor } from '../../utils/wait';

const useSurveysResponses = () => {
  const [ surveys,  setSurveys ] = useState<ISurvey[]>([]);
  const [responses, setResponses] = useState<ISurveyResponse[]>([]);
  const [ infoAlert, setInfoAlert ] = useState<IInfoAlertProps | null | any>(null);

  const mappingSurveys = (surveysMapping: ISurvey[], responses: ISurveyResponse[]): Survey[] => surveysMapping.map((survey: Survey) =>
    new Survey({ ...survey, content: { ...survey.content, questions: [
      ...survey.content.questions.map((question: IQuestion) => {
        const newResponses = responses.filter((response: ISurveyResponse) => response.content.questions.some(questionResponse => questionResponse.question === question.question));
        const newAnswers: IAnswer[] | any = question.answers.map((answer: string | IAnswer) => ({ answer, count: newResponses.filter((response: ISurveyResponse) => response.content.questions.some(questionResponse => questionResponse.answer === answer) ).length }) );
        return { ...question, answers: [...newAnswers] };
      })
    ]}})
  )

  const loadSurveysResponses = async () => {
    const responseSurveys: ISurvey[] | unknown = await getSurveys();
    if (responseSurveys && Array.isArray(responseSurveys)) {
      const responses: ISurveyResponse[] = await getSurveysResponses();
      if (responses && Array.isArray(responses)) {
        setResponses(responses);
        const newSurveys: Survey[] = mappingSurveys(responseSurveys, responses);
        console.log('newSurveys', newSurveys);
        setSurveys(newSurveys);
      }
      setInfoAlert({ variant: "success", message: " surveys responses loaded successfully." });
    } else {
      setInfoAlert({ variant: "danger", message: "Not found surveys responses" });
    }
    await waitFor(2000);
    setInfoAlert(null);
  }

  useEffect(() => {
    loadSurveysResponses();
    return () => {
    }
  }, []);

  return [
    surveys,
    responses,
    infoAlert,
  ];
};

export default useSurveysResponses;