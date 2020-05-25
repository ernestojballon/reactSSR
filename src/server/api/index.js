import * as express from 'express';
import bodyParser from 'body-parser';
import getContests from './routes/contests.js';

const getApi = () => {

  const router = express.Router();

  router.use(bodyParser.json());

  //contests router
  router.use('/contests',getContests());
  return router
}

export default getApi;