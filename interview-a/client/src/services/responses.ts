import { BACKEND_RESPONSES_URL } from '../constants/backend';
import SurveyResponse from '../entities/SurveyResponse';
import { ISurveyResponse } from "../entities/SurveyResponse";

export const addResponse = (surveyResponse: ISurveyResponse | null): Promise<boolean | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await fetch(`${BACKEND_RESPONSES_URL}`,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({response: surveyResponse})
      }
    );
    if (response.status === 201) {
      resolve(true);
    }
  } catch (error) {
    reject(error);
  }
});

export const getSurveysResponses = (): Promise<SurveyResponse[]> => new Promise( async (resolve, reject) => {
  try {
    const response = await fetch(`${BACKEND_RESPONSES_URL}`);
    if (response.status === 200) {
      const data = await response.json();
      const newSurveysResponses = data.responses.map((surveyResponse: SurveyResponse) => new SurveyResponse(surveyResponse));
      resolve(newSurveysResponses);
    }
  } catch (error) {
    reject(error);
  }
});