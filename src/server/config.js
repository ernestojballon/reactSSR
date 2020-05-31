const env = process.env 

const getConfig = () => {
  const enviroment = env.ENVIROMENT || 'dev'
  let host,port,mongoHost,mongoPort,database,mongoURL;
  if(enviroment === 'dev'){
    host = 'localhost'
    port =  8080
    mongoHost = 'localhost'
    mongoPort = 27017
    database = 'contests'
  }
  mongoURL = `mongodb://${mongoHost}:${mongoPort}/${database}`;
  
  return {
    enviroment,
    host,
    port,
    mongoHost,
    mongoPort,
    database,
    mongoURL
  }
}
export default getConfig();