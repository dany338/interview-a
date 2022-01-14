import { ISurveyResponse } from '@entities/SurveyResponse';

export interface IResponseDao {
    getOne: (id: number) => Promise<ISurveyResponse | null | unknown>;
    getAll: () => Promise<ISurveyResponse[] | unknown>;
    add: (SurveyResponse: ISurveyResponse) => Promise<void>;
    update: (SurveyResponse: ISurveyResponse) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
