/* eslint-disable @typescript-eslint/no-unsafe-call */
import SurveyResponse, { ISurveyResponse } from '@entities/SurveyResponse';
import { getRandomInt } from '@shared/functions';
import { IResponseDao } from './ResponseDao';
import MockDaoMock, { IDatabase } from '../MockDb/MockDao.mock';

class ResponseDao extends MockDaoMock implements IResponseDao {


    public async getOne(id: number): Promise<ISurveyResponse | null | unknown> {
        const db: IDatabase = await super.openDb();
        for (const response of db.responses) {
            if (response.id === id) {
                return response as unknown;
            }
        }
        return null;
    }


    public async getAll(): Promise<ISurveyResponse[] | unknown> {
        const db: IDatabase = await super.openDb();
        return db.responses as unknown;
    }


    public async add(Response: ISurveyResponse): Promise<void> {
        const db: IDatabase = await super.openDb();
        const id: number | bigint = getRandomInt();
        Response.id = id;
        Response.completed ||= new Date();
        db.responses.push(Response);
        await super.saveDb(db);
    }


    public async update(Response: ISurveyResponse): Promise<void> {
        const db: IDatabase = await super.openDb();
        for (let i = 0; i < db.responses.length; i++) {
            if (db.responses[i].id === Response.id) {
                db.responses[i] = Response;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Response not found');
    }


    public async delete(id: number): Promise<void> {
        const db: IDatabase = await super.openDb();
        for (let i = 0; i < db.responses.length; i++) {
            if (db.responses[i].id === id) {
                db.responses.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Response not found');
    }
}

export default ResponseDao;
