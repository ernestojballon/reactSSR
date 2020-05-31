import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from '../../config'

export function createUser(user,cb){
  MongoClient.connect(config.mongoURL,(err,client)=>{
    assert.equal(null,err)
    const db = client.db('contests')
    const collection = db.collection('users')
    collection.find({username:user.username})
    .project({username:1})
    .toArray(
      (err,resp)=>{
        assert.equal(null,err)
        if (resp.length > 0) cb(new Error('Username already in use'),null) 
        else collection.insertOne({
          username:user.username,
          password:user.password
        },(err,res)=>{
          assert.equal(null,err)
          cb(err,{...res.ops[0],password:'*******'})
        })
      })
    
  })
  
  
}