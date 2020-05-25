const env = process.env 

const getConfig = () => {
  const enviroment = env.ENVIROMENT || 'dev'
  const url = env.URL || 'localhost'
  const port = env.PORT || 8080

  return {
    enviroment,
    url,
    port,
  }
}
export default getConfig;