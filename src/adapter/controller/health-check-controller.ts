import {Router, Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

const makeHealthCheckController = async (app: Router) => {
  handlers(app);
}

const handlers = (app:Router) => {
  app.get('/health-check', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send({app: {message: 'Application is running', success: true}})
  })

}

export { makeHealthCheckController };
