export const useApi = () => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'Accept': 'application/json',
      'Origin': 'http://localhost:8080', // Votre origine locale
      'Referer': 'http://localhost:8080'
    }
  })
  
  return { api }
}