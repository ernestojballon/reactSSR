import { MongoClient } from "mongodb";
import assert from 'assert'
import config from '../../config'

let mdb;
const getMongoDatabase = () => {

  MongoClient.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(err,db)=>{
    assert.equal(null,err)
    mdb = db
  })

  return mdb
}
export default getMongoDatabase()