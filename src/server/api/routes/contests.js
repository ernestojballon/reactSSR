import * as express from 'express';
import data from '../../../data/testData.js'


// api/contests/

const getContests = () => {
  const router = express.Router(); 
  router.get('/',(req,res)=>{
    res.status(200)
    res.json(data)
  })
  return router
}

export default getContests;