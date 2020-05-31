import * as express from 'express';
import bodyParser from 'body-parser';
import getContestsRoute from './routes/contests.route.js';
import getUsersRoute from './routes/users.route.js'

const getApi = () => {

  const router = express.Router();

  router.use(bodyParser.json());

  //contests router
  router.use('/contests',getContestsRoute);
  router.use('/users',getUsersRoute);
  return router
}

export default getApi;