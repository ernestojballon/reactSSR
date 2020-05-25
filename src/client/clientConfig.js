

const getClientConfig = () => {
  const enviroment = 'dev'
  let host = 'undefined'
  let port = 2000
  if(enviroment === 'dev'){
    host = 'localhost'
    port =  8080
  }
  return {
    enviroment,
    host,
    port,
  }
}
export default getClientConfig();