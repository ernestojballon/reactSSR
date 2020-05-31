import * as express from 'express';
import {createUserService} from '../service/users.service'

// api/contests/

const getUsersRoute = () => {
  const router = express.Router(); 
  router.post('/',async(req,res)=>{
    try{
      let resp = await createUserService(req.body.user)
      res.status(200)
      res.json({resp:resp})
    }catch(e){
      res.status(500)
      res.json({ message:e.message })
    }
    
  })
  return router
}

export default getUsersRoute();