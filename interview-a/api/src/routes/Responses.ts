/* eslint-disable @typescript-eslint/no-unsafe-call */
import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import ResponseDao from '@daos/Response/ResponseDao.mock';
import { paramMissingError } from '@shared/constants';
import { IResponseDao } from '../daos/Response/ResponseDao';

const responseDao: IResponseDao = new ResponseDao();
const { BAD_REQUEST, CREATED, OK, NOT_FOUND } = StatusCodes;


/**
 * Add a response.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns 201 created with an empty body.
 *   If the parameters are invalid, returns a 400 with an JSON object describing the error.
 */
 export async function addResponse(req: Request, res: Response) {
    const { response } = req.body;
    if (!response) {
        return res.status(BAD_REQUEST)
                  .json({error: paramMissingError});
    }
    await responseDao.add(response);
    return res.status(CREATED).end();
}

/**
 * Get one survey, by ID.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns the survey as JSON `{"survey": {...}}`.
 *   If the survey ID isn't found, returns a 404 with an empty body.
 */
 export async function getResponses(req: Request, res: Response) {
    const responses = await responseDao.getAll();
    return responses ? res.status(OK)
    .json({responses}) : res.status(NOT_FOUND).end();
}

