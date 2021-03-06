import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import app from '@server';
import SurveyDao from '@daos/Survey/SurveyDao.mock';
import Survey from '@entities/Survey';
import { pErr } from '@shared/functions';
import { IResponse } from '../support/types';



describe('Surveys Routes', () => {

    const surveysPath = '/api/surveys';
    const getSurveyPath = `${surveysPath}/:id`;

    const { BAD_REQUEST, OK } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"GET:${getSurveyPath}"`, () => {
        const callApi = (id: number) => {
            return agent.get(getSurveyPath.replace(':id', id.toString()));
        };

        it(`returns a JSON object with all the surveys and a status code of "${OK}" if the
            request was successful.`, (done) => {
            // Setup spy
            const survey = new Survey(
                "Favorites",
                {"questions":[{"question":"What's your favorite number?","answers":["1","2","3"]}]}
            );
            spyOn(SurveyDao.prototype, 'getOne').and.returnValue(Promise.resolve(survey));
            // Call API
            callApi(15)
                .end((err: Error, res: IResponse) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    // Cast instance-objects to 'Survey' objects
                    const respSurvey = res.body.survey;
                    const retSurvey = new Survey(respSurvey);
                    expect(retSurvey).toEqual(survey);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`returns a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
            // Setup spy
            const errMsg = 'TEST: Could not fetch surveys.';
            spyOn(SurveyDao.prototype, 'getOne').and.throwError(errMsg);
            // Call API
            callApi(1)
                .end((err: Error, res: IResponse) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(errMsg);
                    done();
                });
        });
    });

});
