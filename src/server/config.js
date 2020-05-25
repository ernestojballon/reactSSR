const env = process.env 

const getConfig = () => {
  const enviroment = env.ENVIROMENT || 'dev'
  let host = env.HOST || 'localhost'
  let port = env.PORT || 8080
  if(env.ENVIROMENT === 'dev'){
    host = 'localhost'
    port =  8080
  }
  return {
    enviroment,
    host,
    port,
  }
}
export default getConfig();