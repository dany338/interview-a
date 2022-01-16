import { useEffect, useRef, useState } from "react";
import { ISurveyResponse } from "../../entities/SurveyResponse";
import Survey, { ISurvey, IInfoAlertProps, IQuestion, IAnswer } from "../../entities/Survey";
import { getSurveys } from '../../services/surveys';
import { getSurveysResponses } from '../../services/responses';
import { waitFor } from '../../utils/wait';

const useSurveysResponses = () => {
  const [ surveys,  setSurveys ] = useState<ISurvey[]>([]);
  const [ surveysFiltered,  setSurveysFiltered ] = useState<ISurvey[]>([]);
  const [ responses, setResponses ] = useState<ISurveyResponse[]>([]);
  const [ infoAlert, setInfoAlert ] = useState<IInfoAlertProps | null | any>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ query, setQuery ] = useState<string>('');
  const [state, setState] = useState<boolean>(false);
  const componentMounted = useRef(setState);
  let wait = null;

  const onChangeQuery = (value: string) => {
    setQuery(value);
  };

  const onSearchBySurvey = async () => {
    try {
      setIsLoading(true);
      if (query !== '') {
        const newSurveys: Survey[] = surveys.filter((survey: Survey) => survey.name.toLowerCase().includes(query.toLowerCase()));
        setSurveysFiltered(newSurveys);
      } else {
        setSurveysFiltered(surveys);
      }
      wait = await waitFor(300);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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
    try {
      setIsLoading(true);
      const responseSurveys: ISurvey[] | unknown = await getSurveys();
      if (responseSurveys && Array.isArray(responseSurveys)) {
        const responses: ISurveyResponse[] = await getSurveysResponses();
        if (responses && Array.isArray(responses)) {
          setResponses(responses);
          const newSurveys: Survey[] = mappingSurveys(responseSurveys, responses);
          setSurveys(newSurveys);
          setSurveysFiltered(newSurveys);
        }
        setInfoAlert({ variant: "success", message: " surveys responses loaded successfully." });
      } else {
        setInfoAlert({ variant: "danger", message: "Not found surveys responses" });
      }
      setIsLoading(false);
      wait = await waitFor(2000);
      setInfoAlert(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadSurveysResponses();
    return () => {
      wait = null;
      componentMounted.current = () => undefined;
    }
  }, []);

  return [
    surveysFiltered,
    responses,
    infoAlert,
    isLoading,
    query,
    onChangeQuery,
    onSearchBySurvey,
  ];
};

export default useSurveysResponses;