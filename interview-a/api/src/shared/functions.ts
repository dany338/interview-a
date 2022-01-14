import logger from './Logger';

export const pErr = (err: Error) => {
    if (err) {
        logger.err(err);
    }
};

type NewType = number;

export const getRandomInt = (): NewType => Math.floor(Math.random() * 1_000_000_000_000);
