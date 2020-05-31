import * as express from 'express';
import data from '../../../data/testData.js'

// ROUTE :api/contests/

const getContestsRoute = () => {
  const router = express.Router(); 
  router.get('/',(req,res)=>{
    res.status(200)
    res.json(data)
  })
  router.post('/',(req,res)=>{
    res.status(200)
    res.json(data)
  })
  return router
}

export default getContestsRoute();