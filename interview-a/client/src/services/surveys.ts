import { BACKEND_SURVEYS_URL } from '../constants/backend';
import Survey from '../entities/Survey';

export const getSurvey = (id: number): Promise<Survey | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await fetch(`${BACKEND_SURVEYS_URL}/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      resolve(new Survey(data.survey));
    } else if (response.status === 404) {
      resolve(null);
    }
  } catch (error) {
    reject(error);
  }
});

export const getSurveys = (): Promise<Survey[] | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await fetch(`${BACKEND_SURVEYS_URL}`);
    if (response.status === 200) {
      const data = await response.json();
      const newSurveys = data.surveys.map((survey: Survey) => new Survey(survey));
      resolve(newSurveys);
    }
  } catch (error) {
    reject(error);
  }
});