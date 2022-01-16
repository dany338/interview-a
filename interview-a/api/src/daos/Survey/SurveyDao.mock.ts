/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ISurvey } from '@entities/Survey';
import { getRandomInt } from '@shared/functions';
import { ISurveyDao } from './SurveyDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class SurveyDao extends MockDaoMock implements ISurveyDao {


    public async getOne(id: number): Promise<ISurvey | null | unknown> {
        const db = await super.openDb();
        for (const survey of db.surveys) {
            if (survey.id === id) {
                return survey as unknown;
            }
        }
        return null;
    }


    public async getAll(): Promise<ISurvey[] | unknown> {
        const db = await super.openDb();
        return db.surveys as unknown;
    }


    public async add(Survey: ISurvey): Promise<void> {
        const db = await super.openDb();
        const id: number | bigint = getRandomInt();
        Survey.id = id;
        db.surveys.push(Survey);
        await super.saveDb(db);
    }


    public async update(Survey: ISurvey): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.surveys.length; i++) {
            if (db.surveys[i].id === Survey.id) {
                db.surveys[i] = Survey;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Survey not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.surveys.length; i++) {
            if (db.surveys[i].id === id) {
                db.surveys.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Survey not found');
    }
}

export default SurveyDao;
