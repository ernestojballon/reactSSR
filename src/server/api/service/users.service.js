import { createUser } from '../dao/users.dao';
//::::::::::::::::::::::::::::::::::::::::::
// Create user service
//::::::::::::::::::::::::::::::::::::::::::
export function createUserService({username,password}){

  return new Promise ((resolve,reject)=>{
    try{
      createUser({username,password},(err,resp)=>{
        if(err) reject(err)
        resolve(resp)
      });
    }catch(err){
      reject(err)
    }
    
  })
}